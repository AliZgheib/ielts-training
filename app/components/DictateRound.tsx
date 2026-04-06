"use client";
import React from "react";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import { WordRound } from "./WordRound";
import useSound from "use-sound";
import Jabber from "jabber";

const jabber = new Jabber();

enum State {
  Success = "SUCCESS",
  Fail = "FAIL",
  Play = "PLAY",
}

const dictateMachine = createMachine({
  id: "dictate",
  initial: State.Play,
  states: {
    [State.Play]: {
      on: {
        success: State.Play,
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
        1000: State.Play,
      },
    },
  },
});

export enum WordType {
  Letters = "abcdefghijklmnopqrstuvwxyz",
  Numbers = "0123456789",
  NumbersDoubleAndTriple = "0123456789DT",
  AlphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789",
  Word = "word",
}

const createRandomNumber = (type: string, length: number) =>
  [...new Array(length)]
    .map(() => Math.floor(Math.random() * type.length))
    .map((n) => {
      const letter = type[n];
      if (
        type === WordType.NumbersDoubleAndTriple &&
        (letter === "D" || letter === "T")
      ) {
        const newNumber =
          WordType.Numbers[Math.floor(Math.random() * WordType.Numbers.length)];
        return `${letter === "D" ? "double" : "triple"} ${newNumber}`;
      }
      return letter;
    })
    .join(". ");

const createSetOfNumbers = (type: WordType, length: number, count: number) =>
  [...new Array(count)].map(() =>
    type === WordType.Word
      ? jabber.createWord(length).split("").join(". ")
      : createRandomNumber(type, length)
  );

export type DictateRoundProps = {
  length: number;
  rate: number;
  type: WordType;
};

export const DictateRound = ({ length, rate, type }: DictateRoundProps) => {
  const [words] = React.useState(createSetOfNumbers(type, length, 100));
  const [i, setI] = React.useState(0);
  const word = words[i % words.length];

  const target = word
    .replace(/double (\d)/g, "$1$1")
    .replace(/triple (\d)/g, "$1$1$1")
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(/,/g, "");
  const sayWord = word;

  const [playSuccess] = useSound("/success.mp3");
  const [playFail] = useSound("/fail.mp3");

  const [snapshot, send] = useMachine(dictateMachine);
  const state = snapshot.value;

  if (state === State.Play) {
    return (
      <WordRound
        key={i}
        blind={true}
        rate={rate}
        targetWord={target}
        sayWord={`It is ${sayWord}`}
        onSuccess={() => {
          send({ type: "success" });
          playSuccess();
          setI((i) => i + 1);
        }}
        onFail={(failWith) => {
          if (failWith.length > 1)
            console.log(`${word}\n${failWith} <-- error`);
          send({ type: "fail" });
          playFail();
          setI((i) => i + 1);
        }}
      />
    );
  } else if (state === State.Success) {
    return <div className="fixed w-full h-full bg-green-500" />;
  } else {
    return <div className="fixed w-full h-full bg-red-500" />;
  }
};
