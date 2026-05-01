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
  onResult: (result: Record<string, { failedAttempts: number }>) => void;
};

export const Round = ({ words, multiply, hints, rate, onResult }: RoundProps) => {
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

  const total = wordsForGame.length;
  const progressBar = (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-sm">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{i} / {total}</span>
        <span>{cleanCount} perfect</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${total > 0 ? Math.round((i / total) * 100) : 0}%` }}
        />
      </div>
    </div>
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
            if (result[word].failedAttempts === 0) setCleanCount((c) => c + 1);
            send({ type: "success" });
            playSuccess();
            setI((i) => i + 1);
          }}
          onFail={(failWith) => {
            setResult((r) => {
              r[word].failedAttempts++;
              return r;
            });
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
