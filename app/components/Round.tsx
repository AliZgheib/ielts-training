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

function pickWeighted(
  words: string[],
  wordStats: Record<string, { failedAttempts: number }>,
  seenWords: Set<string>,
  exclude?: string
): string {
  const pool = words.length > 1 ? words.filter((w) => w !== exclude) : words;
  const unseenCount = pool.filter((w) => !seenWords.has(w)).length;
  const unseenWeight = Math.max(5, unseenCount > 0 ? Math.ceil(words.length / unseenCount) : 5);
  const weights = pool.map((w) => {
    if (!seenWords.has(w)) return unseenWeight;
    if ((wordStats[w]?.failedAttempts ?? 0) > 0) return 2;
    return 1;
  });
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    r -= weights[i];
    if (r <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

export type RoundProps = {
  words: string[];
  multiply: number;
  hints?: Record<string, string>;
  rate?: number;
  onSaveStruggling?: (words: string[]) => void;
  onExit: () => void;
  onPerfectRound?: () => void;
  onResult: (result: Record<string, { failedAttempts: number }>) => void;
};

export const Round = ({ words, multiply, hints, rate, onSaveStruggling, onExit, onPerfectRound, onResult }: RoundProps) => {
  const totalTurns = words.length * multiply;

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
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [showSavedConfirm, setShowSavedConfirm] = React.useState(false);
  const [showFinishedModal, setShowFinishedModal] = React.useState(false);
  const finishedModalShownRef = React.useRef(false);

  const [playSuccess] = useSound("/success.mp3");
  const [playFail] = useSound("/fail.mp3");

  const [snapshot, send] = useMachine(roundMachine);
  const state = snapshot.value;
  const [completedTurns, setCompletedTurns] = React.useState(0);
  const [lastAttempt, setLastAttempt] = React.useState<string | undefined>(
    undefined
  );
  const [currentWord, setCurrentWord] = React.useState(() =>
    words[Math.floor(Math.random() * words.length)]
  );

  React.useEffect(() => {
    if (completedTurns === totalTurns) {
      onResult(wordStats);
    }
  }, [completedTurns, totalTurns, wordStats, onResult]);

  React.useEffect(() => {
    if (uniqueSeenCount === words.length && !finishedModalShownRef.current) {
      finishedModalShownRef.current = true;
      setShowFinishedModal(true);
      if (blindFailCount === 0) {
        onPerfectRound?.();
      }
    }
  }, [uniqueSeenCount, words.length, blindFailCount, onPerfectRound]);

  const uniqueTotal = words.length;
  const totalAttempts = successCount + blindFailCount;
  const wordsToReview = Object.entries(wordStats)
    .filter(([, v]) => v.failedAttempts >= 2)
    .map(([w]) => w);
  const errorWords = Object.entries(wordStats)
    .filter(([, v]) => v.failedAttempts >= 1)
    .map(([w]) => w);

  const progressBar = (
    <>
    <div className="fixed top-[49px] left-0 w-full z-40 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm">
        <div className="flex justify-between items-center text-xs mb-1 text-gray-800">
          <span>📖 Words <span className="font-semibold">{uniqueSeenCount}/{uniqueTotal}</span></span>
          <div className="flex items-center gap-4">
            <span>📝 Attempts <span className="font-semibold">{totalAttempts}</span></span>
            <span>✅ Success <span className="font-semibold">{successCount}</span></span>
            <button
              className={`rounded px-1.5 py-0.5 border ${errorWords.length > 0 ? "hover:bg-red-50 border-transparent hover:border-red-200" : "border-transparent"}`}
              onClick={() => errorWords.length > 0 && setShowErrorModal(true)}
            >
              ❌ Errors <span className={`font-semibold ${errorWords.length > 0 ? "text-red-500" : ""}`}>{blindFailCount}</span>
            </button>
            <button
              className={`rounded px-1.5 py-0.5 border ${wordsToReview.length > 0 ? "bg-red-50 border-red-300 hover:bg-red-100" : "border-transparent"}`}
              onClick={() => wordsToReview.length > 0 && setShowReviewModal(true)}
            >
              ⚠️ Review <span className={`font-semibold ${wordsToReview.length > 0 ? "text-red-600" : ""}`}>{wordsToReview.length}</span>
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
      {showErrorModal && errorWords.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowErrorModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl px-6 py-5 min-w-[200px] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-semibold mb-1 text-gray-800">Error words</div>
            <div className="text-xs text-gray-400 mb-3">Words you made at least one mistake on</div>
            <ul className="space-y-1">
              {errorWords.map((w) => (
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
                    const merged = Array.from(new Set([...existing, ...errorWords]));
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
                onClick={() => setShowErrorModal(false)}
              >
                close
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

  if (showFinishedModal) {
    return (
      <>
        {progressBar}
        <div className="w-full flex flex-col items-center pt-14 mt-20">
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
              onClick={onExit}
            >
              Back to word lists
            </button>
          </div>
        </div>
      </>
    );
  }

  if (state === State.Play) {
    return (
      <>
        {progressBar}
        <WordRound
          key="play"
          blind={false}
          rate={rate}
          targetWord={currentWord}
          hint={hints?.[currentWord]}
          commonErrorWord={lastAttempt}
          onSuccess={() => {
            send({ type: "success" });
            playSuccess();
          }}
          onFail={(failWith) => {
            setWordStats((r) => {
              r[currentWord].failedAttempts++;
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
          targetWord={currentWord}
          hint={hints?.[currentWord]}
          onSuccess={() => {
            if (!seenWordsRef.current.has(currentWord)) {
              seenWordsRef.current.add(currentWord);
              setUniqueSeenCount((c) => c + 1);
            }
            setSuccessCount((c) => c + 1);
            send({ type: "success" });
            playSuccess();
            setCompletedTurns((c) => c + 1);
            setCurrentWord(pickWeighted(words, wordStats, seenWordsRef.current, currentWord));
          }}
          onFail={(failWith) => {
            setBlindFailCount((c) => c + 1);
            setWordStats((r) => {
              r[currentWord].failedAttempts++;
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
