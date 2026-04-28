"use client";
import React from "react";
import { SpellingApp } from "./components/SpellingApp";
import { TenseDrill } from "./components/TenseDrill";
import { SubjectVerbDrill } from "./components/SubjectVerbDrill";
import { TrendVocabDrill } from "./components/TrendVocabDrill";
import { SentenceBuilderDrill } from "./components/SentenceBuilderDrill";

type Skill = {
  id: string;
  title: string;
  description: string;
  icon: string;
  available: boolean;
};

const skills: Skill[] = [
  {
    id: "spelling",
    title: "Spelling Practice",
    description: "Type words from memory after hearing them. Practice with categorized word sets.",
    icon: "✏️",
    available: true,
  },
  {
    id: "dictation",
    title: "Dictation Practice",
    description: "Listen and type letters, numbers, or alpha-numeric sequences. Adjust speed and length.",
    icon: "🎧",
    available: true,
  },
  {
    id: "tense-drill",
    title: "Tense Picker",
    description: "Pick the correct tense for Task 1 sentences. Covers past simple, present perfect, and present simple.",
    icon: "⏰",
    available: true,
  },
  {
    id: "subject-verb",
    title: "Subject-Verb Agreement",
    description: "Choose the right verb form. Tricky subjects like 'the number of' and long noun phrases.",
    icon: "🔗",
    available: true,
  },
  {
    id: "trend-vocab",
    title: "Trend Vocabulary",
    description: "Learn synonyms for increase, decrease, stable, and more. Classify words or recall from memory.",
    icon: "📈",
    available: true,
  },
  {
    id: "sentence-builder",
    title: "Sentence Builder",
    description: "Chain data points with connectors like 'before dipping', ', reaching', and 'after which'. Write smooth Band 7 sentences.",
    icon: "🔗",
    available: true,
  },
];

export default function HomePage() {
  const [activeSkill, setActiveSkill] = React.useState<string | null>(null);

  if (activeSkill === "spelling") {
    return (
      <div className="min-h-screen">
        <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => setActiveSkill(null)}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            ← Back
          </button>
          <h1 className="text-lg font-semibold">Spelling Practice</h1>
        </nav>
        <SpellingApp mode="spelling" />
      </div>
    );
  }

  if (activeSkill === "dictation") {
    return (
      <div className="min-h-screen">
        <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => setActiveSkill(null)}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            ← Back
          </button>
          <h1 className="text-lg font-semibold">Dictation Practice</h1>
        </nav>
        <SpellingApp mode="dictation" />
      </div>
    );
  }

  if (activeSkill === "tense-drill") {
    return (
      <div className="min-h-screen">
        <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => setActiveSkill(null)}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            ← Back
          </button>
          <h1 className="text-lg font-semibold">Tense Picker</h1>
        </nav>
        <TenseDrill />
      </div>
    );
  }

  if (activeSkill === "subject-verb") {
    return (
      <div className="min-h-screen">
        <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => setActiveSkill(null)}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            ← Back
          </button>
          <h1 className="text-lg font-semibold">Subject-Verb Agreement</h1>
        </nav>
        <SubjectVerbDrill />
      </div>
    );
  }

  if (activeSkill === "trend-vocab") {
    return (
      <div className="min-h-screen">
        <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => setActiveSkill(null)}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            ← Back
          </button>
          <h1 className="text-lg font-semibold">Trend Vocabulary</h1>
        </nav>
        <TrendVocabDrill />
      </div>
    );
  }

  if (activeSkill === "sentence-builder") {
    return (
      <div className="min-h-screen">
        <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => setActiveSkill(null)}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
          >
            ← Back
          </button>
          <h1 className="text-lg font-semibold">Sentence Builder</h1>
        </nav>
        <SentenceBuilderDrill />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">IELTS Training</h1>
          <p className="text-gray-500 mt-1">Practice and improve your exam skills</p>
        </div>
      </header>

      {/* Skill cards */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => skill.available && setActiveSkill(skill.id)}
              disabled={!skill.available}
              className={`text-left p-5 rounded-xl border transition-all ${
                skill.available
                  ? "bg-white border-gray-200 hover:border-blue-400 hover:shadow-md cursor-pointer"
                  : "bg-gray-100 border-gray-200 opacity-60 cursor-not-allowed"
              }`}
            >
              <div className="text-2xl mb-2">{skill.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{skill.title}</h3>
              <p className="text-sm text-gray-500">{skill.description}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
