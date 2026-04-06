"use client";
import React from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { WordRow, LetterType } from "./LetterRow";
import { SpeechContext } from "./SpeechContext";

const abc = "abcdefghijklmnopqrstuvwxyz0123456789-".split("");

type WordRoundProps = {
  rate?: number;
  blind: boolean;
  targetWord: string;
  sayWord?: string;
  commonErrorWord?: string;
  onSuccess: () => void;
  onFail: (failWith: string) => void;
};

export const WordRound = ({
  rate,
  blind,
  targetWord,
  sayWord,
  commonErrorWord,
  onSuccess,
  onFail,
}: WordRoundProps) => {
  const ref = React.useRef<any>(null);

  const [buffer, setBuffer] = React.useState("");
  const position = buffer.length;

  const speechLang = React.useContext(SpeechContext);
  React.useEffect(() => {
    const msg = new SpeechSynthesisUtterance(sayWord || targetWord);
    msg.voice =
      speechSynthesis
        .getVoices()
        .find((voice) =>
          voice.name.includes(speechLang || "English")
        )!;
    if (rate) {
      msg.rate = rate;
    }
    msg.lang = "en-UK";
    window.speechSynthesis.speak(msg);
    return () => window.speechSynthesis.cancel();
  }, [rate, sayWord, targetWord, speechLang]);

  React.useEffect(() => {
    const key = targetWord.split("")[position];
    if (ref.current) {
      abc
        .filter((char) => char !== key)
        .forEach((char) =>
          ref.current.physicalKeyboard.handleHighlightKeyUp({
            key: char,
            code: "key",
          })
        );
      ref.current.physicalKeyboard.handleHighlightKeyDown({
        key,
        code: "key",
      });
    }
  }, [position, targetWord, sayWord, rate]);

  React.useEffect(() => {
    const onKey = ({ key }: any) => {
      if (abc.includes(key)) {
        const targetKey = targetWord.split("")[position];
        if (targetKey === key) {
          if (position === targetWord.length - 1) {
            onSuccess();
          } else {
            setBuffer((p) => p + key);
          }
        } else {
          onFail(buffer + key);
        }
      }
    };
    window.addEventListener("keyup", onKey);
    return () => {
      window.removeEventListener("keyup", onKey);
    };
  }, [onFail, onSuccess, position, targetWord, setBuffer, buffer, sayWord]);

  const highlightPosition = !commonErrorWord
    ? undefined
    : targetWord
        .split("")
        .findIndex(
          (targetChar, targetIndex) =>
            commonErrorWord.split("")[targetIndex] !== targetChar
        );

  return (
    <div className="absolute w-full h-full flex flex-col items-center">
      <div className="flex flex-row m-[10px]">
        <WordRow
          word={targetWord.split("").map((char, index) => {
            if (
              !blind &&
              highlightPosition !== undefined &&
              index === highlightPosition &&
              index >= position
            ) {
              return {
                char,
                type: LetterType.Highlight,
              };
            } else if (blind && !(index < position)) {
              return undefined;
            } else {
              return {
                char,
                type: index < position ? LetterType.Correct : LetterType.Faded,
              };
            }
          })}
        />
      </div>
      {!blind && (
        <div className="pt-[80px] px-[80px] self-stretch">
          <Keyboard
            keyboardRef={(r) => {
              ref.current = r;
            }}
            onChange={() => {}}
            onKeyPress={() => {}}
          />
        </div>
      )}
    </div>
  );
};
