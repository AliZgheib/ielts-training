"use client";

export enum LetterType {
  Faded,
  Correct,
  Highlight,
}

type Letter = {
  char: string;
  type: LetterType;
};

type WordRowProps = {
  word: (Letter | undefined)[];
};

const letterTypeToColor = (type: LetterType | undefined) => {
  switch (type) {
    case LetterType.Faded:
      return "#eee";
    case LetterType.Correct:
      return "green";
    case LetterType.Highlight:
      return "brown";
    default:
      return "#eee";
  }
};

export const WordRow = ({ word }: WordRowProps) => {
  return (
    <div className="flex flex-row">
      {word.map((letter, index) => (
        <div key={index} className="pr-[7px]">
          <div className="shadow-md rounded bg-white">
            <div
              className="w-[35px] h-[55px] text-center text-[45px] leading-none"
              style={{ color: letterTypeToColor(letter ? letter.type : undefined) }}
            >
              {letter ? letter.char : "_"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
