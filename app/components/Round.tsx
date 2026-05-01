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

  const [result, setResult] = React.useState(() =>
    words.reduce(
      (p, w: string) => {
        p[w] = { failedAttempts: 0 };
        return p;
      },
      {} as Record<string, { failedAttempts: number }>
    )
  );

  const [cleanCount, setCleanCount] = React.useState(0);
  const [seenCount, setSeenCount] = React.useState(0);
  const seenWordsRef = React.useRef(new Set<string>());
  const [streak, setStreak] = React.useState(0);
  const [showStrugglingModal, setShowStrugglingModal] = React.useState(false);
  const [savedConfirm, setSavedConfirm] = React.useState(false);

  const [playSuccess] = useSound("/success.mp3");
  const [playFail] = useSound("/fail.mp3");

  const [snapshot, send] = useMachine(roundMachine);
  const state = snapshot.value;
  const [i, setI] = React.useState(0);
  const [lastError, setLastError] = React.useState<string | undefined>(
    undefined
  );
  const word = wordsForGame[i % wordsForGame.length];

  React.useEffect(() => {
    if (i === wordsForGame.length) {
      onResult(result);
    }
  }, [result, i, onResult, wordsForGame]);

  const uniqueTotal = words.length;
  const uniqueSeen = seenCount;
  const strugglingWords = Object.entries(result)
    .filter(([, v]) => v.failedAttempts >= 2)
    .map(([w]) => w);

  const progressBar = (
    <>
    <div className="fixed top-[49px] left-0 w-full z-40 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm">
        <div className="flex items-center gap-4 text-xs mb-1">
          <span className="text-gray-400">📖 Words <span className="font-semibold text-gray-700">{uniqueSeen}/{uniqueTotal}</span></span>
          <span className="text-gray-400">🔥 Streak <span className="font-semibold text-gray-700">{streak}</span></span>
          <span className="text-gray-400">✓ Clean <span className="font-semibold text-gray-700">{cleanCount}/{uniqueSeen}</span></span>
          <button
            className={`rounded px-1.5 py-0.5 border ${strugglingWords.length > 0 ? "bg-red-50 border-red-300 hover:bg-red-100" : "border-transparent"}`}
            onClick={() => strugglingWords.length > 0 && setShowStrugglingModal(true)}
          >
            <span className="text-gray-400">⚑ Review <span className={`font-semibold ${strugglingWords.length > 0 ? "text-red-600" : "text-gray-700"}`}>{strugglingWords.length}</span></span>
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${uniqueTotal > 0 ? Math.round((uniqueSeen / uniqueTotal) * 100) : 0}%` }}
          />
        </div>
      </div>
      {showStrugglingModal && strugglingWords.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setShowStrugglingModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl px-6 py-5 min-w-[200px] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-semibold mb-1 text-gray-800">Words to review</div>
            <div className="text-xs text-gray-400 mb-3">Failed 2 or more times this session</div>
            <ul className="space-y-1">
              {strugglingWords.map((w) => (
                <li key={w} className="text-sm text-red-600">{w} <span className="text-gray-400">({result[w].failedAttempts}x)</span></li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              {savedConfirm ? (
                <span className="text-xs text-green-600">saved!</span>
              ) : (
                <button
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                  onClick={() => {
                    const existing = JSON.parse(localStorage.getItem("ielts-my-list") || "[]") as string[];
                    const merged = Array.from(new Set([...existing, ...strugglingWords]));
                    localStorage.setItem("ielts-my-list", JSON.stringify(merged));
                    onSaveStruggling?.(merged);
                    setSavedConfirm(true);
                    setTimeout(() => setSavedConfirm(false), 2000);
                  }}
                >
                  + save to My Words
                </button>
              )}
              <button
                className="text-xs text-gray-400 hover:text-gray-600 ml-auto"
                onClick={() => setShowStrugglingModal(false)}
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
          commonErrorWord={lastError}
          onSuccess={() => {
            send({ type: "success" });
            playSuccess();
          }}
          onFail={(failWith) => {
            setResult((r) => {
              r[word].failedAttempts++;
              return r;
            });
            setStreak(0);
            setLastError(failWith);
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
            if (result[word].failedAttempts === 0 && !seenWordsRef.current.has(word)) setCleanCount((c) => c + 1);
            if (!seenWordsRef.current.has(word)) setSeenCount((c) => c + 1);
            seenWordsRef.current.add(word);
            setStreak((s) => s + 1);
            send({ type: "success" });
            playSuccess();
            setI((i) => i + 1);
          }}
          onFail={(failWith) => {
            setResult((r) => {
              r[word].failedAttempts++;
              return r;
            });
            setStreak(0);
            setLastError(failWith);
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
