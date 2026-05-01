"use client";
import React from "react";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import { WordRound } from "./WordRound";
import useSound from "use-sound";

enum State {
  Success = "SUCCESS",
  Fail = "FAIL",
  Play = "PLAY",
  Blind = "BLIND",
}

const roundMachine = createMachine({
  id: "round",
  initial: State.Blind,
  states: {
    [State.Play]: {
      on: {
        success: State.Blind,
        fail: State.Fail,
      },
    },
    [State.Blind]: {
      on: {
        success: State.Success,
        fail: State.Fail,
      },
    },
    [State.Fail]: {
      after: {
        200: State.Play,
      },
    },
    [State.Success]: {
      after: {
        1000: State.Blind,
      },
    },
  },
});

function shuffleArray<T>(originalArray: T[]): T[] {
  const array = [...originalArray];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export type RoundProps = {
  words: string[];
  multiply: number;
  hints?: Record<string, string>;
  rate?: number;
  onSaveStruggling?: (words: string[]) => void;
  onResult: (result: Record<string, { failedAttempts: number }>) => void;
};

export const Round = ({ words, multiply, hints, rate, onSaveStruggling, onResult }: RoundProps) => {
  const [wordsForGame] = React.useState(() => {
    const output: string[] = [];
    for (let i = 0; i < multiply; i++) {
      output.push(...words);
    }
    return shuffleArray(output);
  });

  const [wordStats, setWordStats] = React.useState(() =>
    words.reduce(
      (p, w: string) => {
        p[w] = { failedAttempts: 0 };
        return p;
      },
      {} as Record<string, { failedAttempts: number }>
    )
  );

  const [successCount, setSuccessCount] = React.useState(0);
  const [blindFailCount, setBlindFailCount] = React.useState(0);
  const [uniqueSeenCount, setUniqueSeenCount] = React.useState(0);
  const seenWordsRef = React.useRef(new Set<string>());
  const [showReviewModal, setShowReviewModal] = React.useState(false);
  const [showSavedConfirm, setShowSavedConfirm] = React.useState(false);
  const [showFinishedModal, setShowFinishedModal] = React.useState(false);
  const finishedModalShownRef = React.useRef(false);

  const [playSuccess] = useSound("/success.mp3");
  const [playFail] = useSound("/fail.mp3");

  const [snapshot, send] = useMachine(roundMachine);
  const state = snapshot.value;
  const [wordIndex, setWordIndex] = React.useState(0);
  const [lastAttempt, setLastAttempt] = React.useState<string | undefined>(
    undefined
  );
  const word = wordsForGame[wordIndex % wordsForGame.length];

  React.useEffect(() => {
    if (wordIndex === wordsForGame.length) {
      onResult(wordStats);
    }
  }, [wordStats, wordIndex, onResult, wordsForGame]);

  React.useEffect(() => {
    if (uniqueSeenCount === words.length && !finishedModalShownRef.current) {
      finishedModalShownRef.current = true;
      setShowFinishedModal(true);
    }
  }, [uniqueSeenCount, words.length]);

  const uniqueTotal = words.length;
  const totalAttempts = successCount + blindFailCount;
  const wordsToReview = Object.entries(wordStats)
    .filter(([, v]) => v.failedAttempts >= 2)
    .map(([w]) => w);

  const progressBar = (
    <>
    <div className="fixed top-[49px] left-0 w-full z-40 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm">
        <div className="flex justify-between items-center text-xs mb-1 text-gray-800">
          <span>📖 <span className="font-semibold">{uniqueSeenCount}/{uniqueTotal}</span></span>
          <div className="flex items-center gap-4">
            <span>📝 <span className="font-semibold">{totalAttempts}</span></span>
            <span>✅ <span className="font-semibold">{successCount}</span></span>
            <span>❌ <span className="font-semibold">{blindFailCount}</span></span>
            <button
              className={`rounded px-1.5 py-0.5 border ${wordsToReview.length > 0 ? "bg-red-50 border-red-300 hover:bg-red-100" : "border-transparent"}`}
              onClick={() => wordsToReview.length > 0 && setShowReviewModal(true)}
            >
              ⚠️ <span className={`font-semibold ${wordsToReview.length > 0 ? "text-red-600" : ""}`}>{wordsToReview.length}</span>
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${uniqueTotal > 0 ? Math.round(Math.min(uniqueSeenCount / uniqueTotal, 1) * 100) : 0}%` }}
          />
        </div>
      </div>
      {showFinishedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-xl px-6 py-5 min-w-[240px] max-w-sm text-center">
            <div className="text-2xl mb-2">🎉</div>
            <div className="font-semibold text-gray-800 mb-1">You finished the list!</div>
            <div className="text-xs text-gray-400 mb-4">You went through all {words.length} words.</div>
            <div className="flex flex-col gap-2">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded px-4 py-2"
                onClick={() => setShowFinishedModal(false)}
              >
                Keep practicing
              </button>
              <button
                className="text-sm text-gray-500 hover:text-gray-700"
                onClick={() => onResult(wordStats)}
              >
                Back to word lists
              </button>
            </div>
          </div>
        </div>
      )}
      {showReviewModal && wordsToReview.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowReviewModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl px-6 py-5 min-w-[200px] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-semibold mb-1 text-gray-800">Words to review</div>
            <div className="text-xs text-gray-400 mb-3">Failed 2 or more times this session</div>
            <ul className="space-y-1">
              {wordsToReview.map((w) => (
                <li key={w} className="text-sm text-red-600">{w} <span className="text-gray-400">({wordStats[w].failedAttempts}x)</span></li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              {showSavedConfirm ? (
                <span className="text-xs text-green-600">saved!</span>
              ) : (
                <button
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                  onClick={() => {
                    const existing = JSON.parse(localStorage.getItem("ielts-my-list") || "[]") as string[];
                    const merged = Array.from(new Set([...existing, ...wordsToReview]));
                    localStorage.setItem("ielts-my-list", JSON.stringify(merged));
                    onSaveStruggling?.(merged);
                    setShowSavedConfirm(true);
                    setTimeout(() => setShowSavedConfirm(false), 2000);
                  }}
                >
                  + save to My Words
                </button>
              )}
              <button
                className="text-xs text-gray-400 hover:text-gray-600 ml-auto"
                onClick={() => setShowReviewModal(false)}
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  if (state === State.Play) {
    return (
      <>
        {progressBar}
        <WordRound
          key="play"
          blind={false}
          rate={rate}
          targetWord={word}
          hint={hints?.[word]}
          commonErrorWord={lastAttempt}
          onSuccess={() => {
            send({ type: "success" });
            playSuccess();
          }}
          onFail={(failWith) => {
            setWordStats((r) => {
              r[word].failedAttempts++;
              return r;
            });
            setLastAttempt(failWith);
            send({ type: "fail" });
            playFail();
          }}
        />
      </>
    );
  } else if (state === State.Blind) {
    return (
      <>
        {progressBar}
        <WordRound
          key="blind"
          blind={true}
          rate={rate}
          targetWord={word}
          hint={hints?.[word]}
          onSuccess={() => {
            if (!seenWordsRef.current.has(word)) {
              seenWordsRef.current.add(word);
              setUniqueSeenCount((c) => c + 1);
            }
            setSuccessCount((c) => c + 1);
            send({ type: "success" });
            playSuccess();
            setWordIndex((idx) => idx + 1);
          }}
          onFail={(failWith) => {
            setBlindFailCount((c) => c + 1);
            setWordStats((r) => {
              r[word].failedAttempts++;
              return r;
            });
            setLastAttempt(failWith);
            send({ type: "fail" });
            playFail();
          }}
        />
      </>
    );
  } else if (state === State.Success) {
    return (
      <div className="fixed w-full h-full bg-green-500" />
    );
  } else {
    return (
      <div className="fixed w-full h-full bg-red-500" />
    );
  }
};
