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

// ---- Recall mode: type synonyms from memory ----

function normalize(s: string) {
  return s.toLowerCase().trim().replace(/\s+/g, " ");
}

function RecallGame() {
  const [currentDir, setCurrentDir] = useState<TrendDirection | null>(null);
  const [filterType, setFilterType] = useState<string>("all");
  const [input, setInput] = useState("");
  const [found, setFound] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);

  const directions = useMemo(() => shuffle([...allDirections]), []);
  const [dirIndex, setDirIndex] = useState(0);

  const dir = currentDir ?? directions[dirIndex];
  const matching = trendWords.filter(
    (w) =>
      w.direction === dir && (filterType === "all" || w.type === filterType)
  );
  const matchingNormalized = useMemo(
    () => new Map(matching.map((w) => [normalize(w.word), w])),
    [matching]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guess = normalize(input);
    if (!guess) return;

    if (found.has(guess)) {
      // already found, just clear
      setInput("");
      return;
    }

    if (matchingNormalized.has(guess)) {
      setFound((prev) => new Set([...prev, guess]));
    } else {
      setWrongGuesses((prev) =>
        prev.includes(guess) ? prev : [...prev, input.trim()]
      );
    }
    setInput("");
  };

  const handleGiveUp = () => setRevealed(true);

  const handleNext = () => {
    setRevealed(false);
    setFound(new Set());
    setWrongGuesses([]);
    setInput("");
    if (currentDir) {
      setCurrentDir(null);
    } else {
      setDirIndex((i) => (i + 1) % directions.length);
    }
  };

  const missed = matching.filter((w) => !found.has(normalize(w.word)));
  const allFound = found.size === matching.length;

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
              setFound(new Set());
              setWrongGuesses([]);
              setInput("");
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
              setFound(new Set());
              setWrongGuesses([]);
              setInput("");
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
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="text-center mb-4">
          <p className="text-3xl mb-2">{directionEmojis[dir]}</p>
          <p className="text-xl font-bold text-gray-800 mb-1">
            {directionLabels[dir]}
          </p>
          <p className="text-sm text-gray-400">
            {found.size} / {matching.length} found
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
          <div
            className={`h-2 rounded-full transition-all ${
              allFound ? "bg-green-500" : "bg-orange-500"
            }`}
            style={{
              width: `${matching.length > 0 ? (found.size / matching.length) * 100 : 0}%`,
            }}
          />
        </div>

        {/* Found words */}
        {found.size > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {[...found].map((g) => {
              const w = matchingNormalized.get(g)!;
              return (
                <span
                  key={g}
                  className="bg-green-50 border border-green-300 text-green-700 text-sm px-3 py-1 rounded-full"
                >
                  {w.word}{" "}
                  <span className="text-green-400 text-xs">({w.type})</span>
                </span>
              );
            })}
          </div>
        )}

        {/* Wrong guesses */}
        {wrongGuesses.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {wrongGuesses.map((g, i) => (
              <span
                key={i}
                className="bg-red-50 border border-red-300 text-red-500 text-sm px-3 py-1 rounded-full line-through"
              >
                {g}
              </span>
            ))}
          </div>
        )}

        {/* Input */}
        {!revealed && !allFound && (
          <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a synonym and press Enter..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              autoFocus
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2.5 rounded-lg hover:bg-orange-600 font-medium text-sm"
            >
              Check
            </button>
          </form>
        )}

        {/* All found message */}
        {allFound && !revealed && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-center">
            <p className="font-semibold text-green-700">
              You got all {matching.length}!
            </p>
          </div>
        )}

        {/* Give up / Show missed */}
        {!revealed && !allFound && (
          <button
            onClick={handleGiveUp}
            className="w-full text-gray-400 hover:text-gray-600 text-sm py-2"
          >
            Give up &amp; show answers
          </button>
        )}

        {/* Revealed: show missed words */}
        {revealed && missed.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              You missed {missed.length}:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {missed.map((w, i) => (
                <div
                  key={i}
                  className="bg-orange-50 border border-orange-200 rounded px-3 py-2 text-sm"
                >
                  <span className="font-medium">{w.word}</span>
                  <span className="text-gray-400 text-xs ml-1">
                    ({w.type})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next button */}
        {(revealed || allFound) && (
          <button
            onClick={handleNext}
            className="w-full bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600 font-medium"
          >
            Next Direction
          </button>
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
            Given a direction like &quot;Large Increase,&quot; type as many
            synonyms as you can from memory. Get scored on how many you find.
          </p>
        </button>
      </div>
    </div>
  );
}
