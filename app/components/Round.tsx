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
  onResult: (result: Record<string, { failedAttempts: number }>) => void;
};

export const Round = ({ words, multiply, hints, onResult }: RoundProps) => {
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

  if (state === State.Play) {
    return (
      <WordRound
        key="play"
        blind={false}
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
    );
  } else if (state === State.Blind) {
    return (
      <WordRound
        key="blind"
        blind={true}
        targetWord={word}
        hint={hints?.[word]}
        onSuccess={() => {
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
