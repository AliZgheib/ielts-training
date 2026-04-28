"use client";
import React, { useState, useMemo, useCallback } from "react";
import { svaQuestions, SVAQuestion } from "./subjectVerbQuestions";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function SubjectVerbDrill() {
  const questions = useMemo(() => shuffle(svaQuestions), []);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [wrongOnes, setWrongOnes] = useState<SVAQuestion[]>([]);

  const q = questions[index];
  const done = index >= questions.length;

  const handleSelect = useCallback(
    (i: number) => {
      if (selected !== null) return;
      setSelected(i);
      if (i === q.correctIndex) {
        setScore((s) => ({ ...s, correct: s.correct + 1 }));
      } else {
        setScore((s) => ({ ...s, wrong: s.wrong + 1 }));
        setWrongOnes((w) => [...w, q]);
      }
    },
    [selected, q]
  );

  const handleNext = useCallback(() => {
    setSelected(null);
    setIndex((i) => i + 1);
  }, []);

  const handleRestart = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setScore({ correct: 0, wrong: 0 });
    setWrongOnes([]);
  }, []);

  if (done) {
    return (
      <div className="max-w-2xl mx-auto p-6">
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
            out of {questions.length}
          </p>
          <p className="text-gray-500 mb-6">
            {score.correct === questions.length
              ? "Perfect score!"
              : `${Math.round((score.correct / questions.length) * 100)}% accuracy`}
          </p>

          {wrongOnes.length > 0 && (
            <div className="text-left mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">
                Review your mistakes:
              </h3>
              <div className="space-y-3">
                {wrongOnes.map((wq, i) => (
                  <div
                    key={i}
                    className="bg-red-50 border border-red-200 rounded-lg p-3"
                  >
                    <p className="text-sm text-gray-800">
                      {wq.sentence.replace("___", wq.options[wq.correctIndex])}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {wq.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleRestart}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selected !== null && selected === q.correctIndex;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">
          Question {index + 1} of {questions.length}
        </span>
        <span className="text-sm">
          <span className="text-green-600">{score.correct}</span>
          {" / "}
          <span className="text-red-500">{score.wrong}</span>
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
        <div
          className="bg-purple-600 h-1.5 rounded-full transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <p className="text-xs text-gray-400 mb-3">
          Pick the correct verb form:
        </p>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          {q.sentence.split("___").map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="inline-block min-w-[80px] border-b-2 border-gray-300 mx-1 text-center font-semibold">
                  {selected !== null ? q.options[q.correctIndex] : "___"}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>

        {/* Options - side by side for 2-option questions */}
        <div
          className={`grid gap-3 mb-4 ${
            q.options.length === 2 ? "grid-cols-2" : "grid-cols-2"
          }`}
        >
          {q.options.map((opt, i) => {
            let cls =
              "border rounded-lg px-4 py-3 text-center transition-all font-semibold text-lg ";
            if (selected === null) {
              cls +=
                "border-gray-200 hover:border-purple-400 hover:bg-purple-50 cursor-pointer";
            } else if (i === q.correctIndex) {
              cls += "border-green-500 bg-green-50 text-green-700";
            } else if (i === selected) {
              cls += "border-red-400 bg-red-50 text-red-600";
            } else {
              cls += "border-gray-200 opacity-50";
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} className={cls}>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {selected !== null && (
          <div
            className={`rounded-lg p-4 mb-4 ${
              isCorrect
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <p className="font-semibold mb-1">
              {isCorrect ? "Correct!" : "Wrong!"}
            </p>
            <p className="text-sm text-gray-700">{q.explanation}</p>
          </div>
        )}

        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-purple-600 text-white py-2.5 rounded-lg hover:bg-purple-700 font-medium"
          >
            {index + 1 < questions.length ? "Next Question" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
}
