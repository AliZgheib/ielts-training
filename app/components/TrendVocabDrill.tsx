"use client";
import React, { useState, useMemo, useCallback } from "react";
import {
  trendWords,
  TrendWord,
  TrendDirection,
  directionLabels,
  directionEmojis,
} from "./trendVocab";

type GameMode = "classify" | "recall";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

const allDirections: TrendDirection[] = [
  "big-increase",
  "small-increase",
  "big-decrease",
  "small-decrease",
  "no-change",
  "fluctuate",
  "peak",
  "bottom",
];

// ---- Classify mode: show a word, pick the direction ----

function ClassifyGame() {
  const words = useMemo(() => shuffle(trendWords).slice(0, 20), []);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<TrendDirection | null>(null);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [wrongOnes, setWrongOnes] = useState<
    { word: TrendWord; picked: TrendDirection }[]
  >([]);

  const w = words[index];
  const done = index >= words.length;

  const handleSelect = useCallback(
    (dir: TrendDirection) => {
      if (selected !== null) return;
      setSelected(dir);
      if (dir === w.direction) {
        setScore((s) => ({ ...s, correct: s.correct + 1 }));
      } else {
        setScore((s) => ({ ...s, wrong: s.wrong + 1 }));
        setWrongOnes((prev) => [...prev, { word: w, picked: dir }]);
      }
    },
    [selected, w]
  );

  const handleNext = useCallback(() => {
    setSelected(null);
    setIndex((i) => i + 1);
  }, []);

  if (done) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Done!</h2>
        <p className="text-lg mb-2">
          <span className="text-green-600 font-semibold">
            {score.correct} correct
          </span>{" "}
          /{" "}
          <span className="text-red-500 font-semibold">
            {score.wrong} wrong
          </span>{" "}
          out of {words.length}
        </p>

        {wrongOnes.length > 0 && (
          <div className="text-left mt-6">
            <h3 className="font-semibold text-gray-700 mb-3">
              Review your mistakes:
            </h3>
            <div className="space-y-2">
              {wrongOnes.map((item, i) => (
                <div
                  key={i}
                  className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm"
                >
                  <span className="font-semibold">{item.word.word}</span>
                  {" = "}
                  <span className="text-green-700">
                    {directionEmojis[item.word.direction]}{" "}
                    {directionLabels[item.word.direction]}
                  </span>
                  <span className="text-gray-400 ml-2">
                    (you picked: {directionLabels[item.picked]})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const isCorrect = selected !== null && selected === w.direction;

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          {index + 1} of {words.length}
        </span>
        <span className="text-sm">
          <span className="text-green-600">{score.correct}</span>
          {" / "}
          <span className="text-red-500">{score.wrong}</span>
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
        <div
          className="bg-orange-500 h-1.5 rounded-full transition-all"
          style={{ width: `${((index + 1) / words.length) * 100}%` }}
        />
      </div>

      {/* Word card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <p className="text-xs text-gray-400 mb-1">
          What kind of trend is this? ({w.type})
        </p>
        <p className="text-2xl font-bold text-gray-800 mb-6 text-center py-4">
          {w.word}
        </p>

        {/* Direction options */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {allDirections.map((dir) => {
            let cls =
              "border rounded-lg px-3 py-2.5 text-sm text-left transition-all ";
            if (selected === null) {
              cls +=
                "border-gray-200 hover:border-orange-400 hover:bg-orange-50 cursor-pointer";
            } else if (dir === w.direction) {
              cls += "border-green-500 bg-green-50 text-green-700 font-semibold";
            } else if (dir === selected) {
              cls += "border-red-400 bg-red-50 text-red-600";
            } else {
              cls += "border-gray-200 opacity-40";
            }
            return (
              <button
                key={dir}
                onClick={() => handleSelect(dir)}
                className={cls}
              >
                {directionEmojis[dir]} {directionLabels[dir]}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {selected !== null && (
          <div
            className={`rounded-lg p-3 mb-4 text-sm ${
              isCorrect
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            {isCorrect ? "Correct!" : `Wrong! It means: ${directionLabels[w.direction]}`}
          </div>
        )}

        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600 font-medium"
          >
            {index + 1 < words.length ? "Next" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
}

// ---- Recall mode: show a direction, list all synonyms you can think of ----

function RecallGame() {
  const [currentDir, setCurrentDir] = useState<TrendDirection | null>(null);
  const [filterType, setFilterType] = useState<string>("all");
  const [revealed, setRevealed] = useState(false);

  const directions = useMemo(() => shuffle([...allDirections]), []);
  const [dirIndex, setDirIndex] = useState(0);

  const dir = currentDir ?? directions[dirIndex];
  const matching = trendWords.filter(
    (w) =>
      w.direction === dir && (filterType === "all" || w.type === filterType)
  );

  const handleReveal = () => setRevealed(true);
  const handleNext = () => {
    setRevealed(false);
    if (currentDir) {
      setCurrentDir(null);
    } else {
      setDirIndex((i) => (i + 1) % directions.length);
    }
  };

  return (
    <div>
      {/* Direction picker */}
      <div className="flex flex-wrap gap-2 mb-4">
        {allDirections.map((d) => (
          <button
            key={d}
            onClick={() => {
              setCurrentDir(d);
              setRevealed(false);
            }}
            className={`text-xs px-2.5 py-1.5 rounded-full border transition-all ${
              dir === d
                ? "bg-orange-100 border-orange-400 text-orange-700"
                : "border-gray-200 hover:border-orange-300"
            }`}
          >
            {directionEmojis[d]} {directionLabels[d]}
          </button>
        ))}
      </div>

      {/* Type filter */}
      <div className="flex gap-2 mb-6">
        {["all", "verb", "noun"].map((t) => (
          <button
            key={t}
            onClick={() => {
              setFilterType(t);
              setRevealed(false);
            }}
            className={`text-xs px-2 py-1 rounded border ${
              filterType === t
                ? "bg-gray-800 text-white border-gray-800"
                : "border-gray-300 hover:border-gray-500"
            }`}
          >
            {t === "all" ? "All types" : t + "s"}
          </button>
        ))}
      </div>

      {/* Challenge card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
        <p className="text-xs text-gray-400 mb-2">
          How many synonyms can you name for:
        </p>
        <p className="text-3xl mb-2">
          {directionEmojis[dir]}
        </p>
        <p className="text-xl font-bold text-gray-800 mb-1">
          {directionLabels[dir]}
        </p>
        <p className="text-sm text-gray-400 mb-6">
          {matching.length} {filterType === "all" ? "words" : filterType + "s"}{" "}
          to find
        </p>

        {!revealed ? (
          <button
            onClick={handleReveal}
            className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 font-medium"
          >
            Show Answers
          </button>
        ) : (
          <div>
            <div className="grid grid-cols-2 gap-2 text-left mb-6">
              {matching.map((w, i) => (
                <div
                  key={i}
                  className="bg-orange-50 border border-orange-200 rounded px-3 py-2 text-sm"
                >
                  <span className="font-medium">{w.word}</span>
                  <span className="text-gray-400 text-xs ml-1">({w.type})</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 font-medium"
            >
              Next Direction
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ---- Main component ----

export function TrendVocabDrill() {
  const [mode, setMode] = useState<GameMode | null>(null);

  if (mode === "classify") {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <button
          onClick={() => setMode(null)}
          className="text-sm text-orange-600 hover:text-orange-800 mb-4 inline-block"
        >
          ← Back to modes
        </button>
        <ClassifyGame />
      </div>
    );
  }

  if (mode === "recall") {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <button
          onClick={() => setMode(null)}
          className="text-sm text-orange-600 hover:text-orange-800 mb-4 inline-block"
        >
          ← Back to modes
        </button>
        <RecallGame />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-4">
        <button
          onClick={() => setMode("classify")}
          className="w-full text-left bg-white rounded-xl border border-gray-200 p-5 hover:border-orange-400 hover:shadow-md transition-all"
        >
          <h3 className="font-semibold text-gray-900 mb-1">
            🎯 Classify the Word
          </h3>
          <p className="text-sm text-gray-500">
            See a word like &quot;soared&quot; or &quot;dipped&quot; and pick what kind of trend
            it describes. 20 random words per round.
          </p>
        </button>

        <button
          onClick={() => setMode("recall")}
          className="w-full text-left bg-white rounded-xl border border-gray-200 p-5 hover:border-orange-400 hover:shadow-md transition-all"
        >
          <h3 className="font-semibold text-gray-900 mb-1">
            🧠 Recall Synonyms
          </h3>
          <p className="text-sm text-gray-500">
            Given a direction like &quot;Large Increase,&quot; try to recall all the
            verbs, nouns, adjectives, and adverbs for it. Then reveal the
            answers.
          </p>
        </button>
      </div>
    </div>
  );
}
