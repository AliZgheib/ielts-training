"use client";
import React, { useEffect } from "react";
import { Round } from "./Round";
import { DictateRound, WordType } from "./DictateRound";
import { SpeechContext } from "./SpeechContext";
import { wordSets, categories } from "./wordSets";

const defaultSet = wordSets.find((s) => s.id === "all")!;

const typeMap: Record<string, WordType> = {
  letters: WordType.Letters,
  numbers: WordType.Numbers,
  numbersDT: WordType.NumbersDoubleAndTriple,
  "alpha-numeric": WordType.AlphaNumeric,
  word: WordType.Word,
};

function getSpeech(): Promise<SpeechSynthesisVoice[]> {
  return new Promise(function (resolve) {
    const synth = window.speechSynthesis;
    const id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
}

type SpellingAppProps = {
  mode?: "spelling" | "dictation";
};

export const SpellingApp = ({ mode }: SpellingAppProps) => {
  const [dictateSet, setDictateSet] = React.useState<string>("letters");
  const [playing, setPlaying] = React.useState(false);
  const [rate, setRate] = React.useState(1);
  const [spellingRate, setSpellingRate] = React.useState(1);
  const [length, setLength] = React.useState(6);
  const [dictate, setDictate] = React.useState(false);
  const [selectedSetId, setSelectedSetId] = React.useState(defaultSet.id);
  const [words, setWords] = React.useState(defaultSet.words);
  const [hints, setHints] = React.useState<Record<string, string> | undefined>(defaultSet.hints);
  const [results, setResults] = React.useState<
    undefined | { word: string; failedAttempts: number }[]
  >(undefined);

  const [voices, setVoices] = React.useState<string[]>([]);
  useEffect(() => {
    (async () => {
      setVoices(
        (await getSpeech())
          .map((voice) => voice.name)
          .filter((x) => x.includes("nglish"))
      );
    })();
  }, []);
  const [voice, setVoice] = React.useState<string | undefined>(
    "Default voice"
  );

  if (dictate) {
    return (
      <SpeechContext.Provider value={voice}>
        <DictateRound
          length={length}
          rate={rate}
          type={typeMap[dictateSet]}
        />
      </SpeechContext.Provider>
    );
  }

  if (playing) {
    return (
      <SpeechContext.Provider value={voice}>
        <Round
          onStop={() => setPlaying(false)}
          onResult={(result) => {
            const sorted = Object.entries(result)
              .sort((a, b) => b[1].failedAttempts - a[1].failedAttempts)
              .map((w) => ({ word: w[0], failedAttempts: w[1].failedAttempts }));
            setResults(sorted);
            const array = sorted.map((w) => w.word);
            setWords(array);
            setPlaying(false);
          }}
          multiply={3}
          hints={hints}
          rate={spellingRate}
          words={words
            .filter((w) => w.length > 0)
            .map((w) => w.toLocaleLowerCase())
            .map((w) => w.trim())}
        />
      </SpeechContext.Provider>
    );
  }

  const showSpelling = !mode || mode === "spelling";
  const showDictation = !mode || mode === "dictation";

  return (
    <div className={`p-4 flex ${showSpelling && showDictation ? "flex-row justify-around" : "flex-col items-center"}`}>
      {showSpelling && (
      /* Left panel: Practice spelling */
      <div className="flex flex-col items-start">
        <div className="m-[10px] text-[25px] font-semibold">
          Practice spelling:
        </div>

        {/* Word Set Selector */}
        <div className="mx-[10px] mb-2 w-[250px]">
          <label className="text-sm font-medium block mb-1">Word Set:</label>
          <select
            className="w-full border border-gray-300 rounded p-2 text-sm"
            value={selectedSetId}
            onChange={(e) => {
              const set = wordSets.find((s) => s.id === e.target.value);
              if (set) {
                setSelectedSetId(set.id);
                setWords(set.words);
                setHints(set.hints);
                setResults(undefined);
              }
            }}
          >
            {categories.map((cat) => (
              <optgroup key={cat} label={cat}>
                {wordSets
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.words.length} words)
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Speech Rate */}
        <div className="mx-[10px] mb-2 w-[250px]">
          <label className="text-sm block mb-1">Speech Rate: {spellingRate}</label>
          <input
            type="range"
            className="w-full"
            value={spellingRate}
            onChange={(e) => setSpellingRate(parseFloat(e.target.value))}
            min={0.3}
            max={2}
            step={0.1}
          />
        </div>

        {/* Voice */}
        <div className="mx-[10px] mb-2">
          <select
            className="border border-gray-300 rounded p-1 text-sm"
            value={voice || "Default voice"}
            onChange={(e) => setVoice(e.target.value)}
          >
            <option disabled value="Default voice">Default Voice</option>
            {voices.map((v, idx) => (
              <option key={idx} value={v}>{v}</option>
            ))}
          </select>
        </div>

        {results &&
          results.map((r, i) => (
            <div key={i} className="px-[10px] text-sm">
              {r.failedAttempts} - {r.word}
            </div>
          ))}
        <textarea
          className="m-[10px] border border-gray-300 rounded p-2 h-[160px] w-[250px] text-sm"
          value={words.join("\n")}
          onChange={(e) => {
            if (e.target && e.target.value) {
              const value = e.target.value;
              setWords(value.toLocaleString().split("\n"));
            }
          }}
        />
        <button
          className="m-[10px] px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setPlaying(true)}
        >
          Start
        </button>
      </div>
      )}

      {showDictation && (
      /* Right panel: Practice dictation */
      <div className="flex flex-col items-center">
        <div className="m-[10px] text-[25px] font-semibold">
          Practice writing down when dictated:
        </div>

        {/* Speech Rate slider */}
        <div className="w-[200px] my-2">
          <label className="text-sm">
            Speech Rate: {rate}
          </label>
          <input
            type="range"
            className="w-full"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            min={0.3}
            max={2}
            step={0.1}
          />
        </div>

        {/* Length slider */}
        <div className="w-[200px] my-2">
          <label className="text-sm">
            Length: {length}
          </label>
          <input
            type="range"
            className="w-full"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            min={3}
            max={15}
            step={1}
          />
        </div>

        {/* Type radio group */}
        <fieldset className="my-2">
          <legend className="text-sm font-medium mb-1">Type</legend>
          {[
            { value: "letters", label: "letters" },
            { value: "numbers", label: "numbers" },
            { value: "numbersDT", label: "numbers + double + triple" },
            { value: "alpha-numeric", label: "alpha-numeric" },
            { value: "word", label: "word (lorem ipsum)" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm py-0.5">
              <input
                type="radio"
                name="dictateType"
                value={opt.value}
                checked={dictateSet === opt.value}
                onChange={(e) => setDictateSet(e.target.value)}
              />
              {opt.label}
            </label>
          ))}
        </fieldset>

        {/* Voice selector */}
        <div className="my-2">
          <select
            className="border border-gray-300 rounded p-1 text-sm"
            value={voice || "Default voice"}
            onChange={(e) => setVoice(e.target.value)}
          >
            <option disabled value="Default voice">
              Default Voice
            </option>
            {voices.map((v, i) => (
              <option key={i} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <button
          className="m-[10px] px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setDictate(true)}
        >
          Start
        </button>
      </div>
      )}
    </div>
  );
};
