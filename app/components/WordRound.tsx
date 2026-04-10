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
    const onKey = ({ key }: any) => {
      if (key === "Enter") {
        if (buffer.length === 0) return;
        if (buffer === targetWord) {
          onSuccess();
        } else {
          onFail(buffer);
        }
      } else if (key === "Backspace") {
        setBuffer((p) => p.slice(0, -1));
      } else if (abc.includes(key)) {
        setBuffer((p) => p + key);
      }
    };
    window.addEventListener("keyup", onKey);
    return () => {
      window.removeEventListener("keyup", onKey);
    };
  }, [onFail, onSuccess, targetWord, setBuffer, buffer, sayWord]);

  // Build display: show typed characters, and in non-blind mode also show the target
  const typedLetters = buffer.split("").map((char, index) => {
    if (!blind) {
      // In play mode (after failure): color letters green/red vs target
      const targetChar = targetWord[index];
      return {
        char,
        type: char === targetChar ? LetterType.Correct : LetterType.Highlight,
      };
    }
    return { char, type: LetterType.Correct };
  });

  const targetLetters = targetWord.split("").map((char, index) => {
    const typedChar = buffer[index];
    if (typedChar === char) {
      return { char, type: LetterType.Correct };
    } else if (typedChar !== undefined) {
      return { char, type: LetterType.Highlight };
    } else {
      return { char, type: LetterType.Faded };
    }
  });

  return (
    <div className="absolute w-full h-full flex flex-col items-center">
      {!blind && (
        <div className="flex flex-row m-[10px]">
          <WordRow word={targetLetters} />
        </div>
      )}
      <div className="flex flex-row m-[10px]">
        <WordRow
          word={
            typedLetters.length > 0
              ? typedLetters
              : [{ char: "_", type: LetterType.Faded }]
          }
        />
      </div>
      <div className="text-sm text-gray-400 mt-2">
        Press Enter to submit
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
