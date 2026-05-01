"use client";
import React from "react";
import { WordRow, LetterType } from "./LetterRow";
import { SpeechContext } from "./SpeechContext";

const abc = "abcdefghijklmnopqrstuvwxyz0123456789-".split("");

type WordRoundProps = {
  rate?: number;
  blind: boolean;
  targetWord: string;
  sayWord?: string;
  hint?: string;
  commonErrorWord?: string;
  onSuccess: () => void;
  onFail: (failWith: string) => void;
};

export const WordRound = ({
  rate,
  blind,
  targetWord,
  sayWord,
  hint,
  commonErrorWord,
  onSuccess,
  onFail,
}: WordRoundProps) => {
  const [buffer, setBuffer] = React.useState("");
  const [showHint, setShowHint] = React.useState(false);
  const bufferRef = React.useRef(buffer);
  const onSuccessRef = React.useRef(onSuccess);
  const onFailRef = React.useRef(onFail);
  const targetWordRef = React.useRef(targetWord);

  React.useEffect(() => { bufferRef.current = buffer; }, [buffer]);
  React.useEffect(() => { onSuccessRef.current = onSuccess; }, [onSuccess]);
  React.useEffect(() => { onFailRef.current = onFail; }, [onFail]);
  React.useEffect(() => { targetWordRef.current = targetWord; }, [targetWord]);
  React.useEffect(() => { setShowHint(false); }, [targetWord]);

  const speechLang = React.useContext(SpeechContext);

  const sayItRef = React.useRef<() => void>(() => {});
  sayItRef.current = () => {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(sayWord || targetWord);
    msg.voice =
      speechSynthesis
        .getVoices()
        .find((voice) => voice.name.includes(speechLang || "English"))!;
    if (rate) msg.rate = rate;
    msg.lang = "en-UK";
    window.speechSynthesis.speak(msg);
  };

  const sayIt = React.useCallback(() => sayItRef.current(), []);

  React.useEffect(() => {
    sayItRef.current();
    return () => window.speechSynthesis.cancel();
  }, [targetWord, sayWord]);

  React.useEffect(() => {
    const onKey = ({ key }: any) => {
      if (key === "Enter") {
        if (bufferRef.current.length === 0) return;
        window.speechSynthesis.cancel();
        (document.activeElement as HTMLElement)?.blur();
        if (bufferRef.current === targetWordRef.current) {
          onSuccessRef.current();
        } else {
          onFailRef.current(bufferRef.current);
        }
      } else if (key === "Backspace") {
        setBuffer((p) => p.slice(0, -1));
      } else if (abc.includes(key)) {
        setBuffer((p) => p + key);
      }
    };
    window.addEventListener("keyup", onKey);
    return () => window.removeEventListener("keyup", onKey);
  }, []);

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
    <div className="w-full flex flex-col items-center pt-14">
      {hint && (
        <div className="mt-20 mb-2 text-center">
          {showHint ? (
            <div className="px-6 py-2 bg-yellow-100 border border-yellow-300 rounded text-sm text-gray-700 max-w-sm">
              {hint}
            </div>
          ) : (
            <button
              tabIndex={-1}
              onClick={() => setShowHint(true)}
              className="text-xs text-gray-400 underline cursor-pointer hover:text-gray-600"
            >
              show hint
            </button>
          )}
        </div>
      )}
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
      <div className="flex items-center gap-4 mt-2">
        <span className="text-sm text-gray-400">Press Enter to submit</span>
        <button
          tabIndex={-1}
          onClick={sayIt}
          className="text-sm text-blue-500 hover:text-blue-700 underline cursor-pointer"
        >
          🔊 Replay
        </button>
      </div>
    </div>
  );
};
