export type TrendDirection =
  | "big-increase"
  | "small-increase"
  | "big-decrease"
  | "small-decrease"
  | "no-change"
  | "fluctuate"
  | "peak"
  | "bottom";

export type TrendWord = {
  word: string;
  type: "verb" | "noun" | "adjective" | "adverb";
  direction: TrendDirection;
};

export const trendWords: TrendWord[] = [
  // ===== BIG INCREASE =====
  // Verbs
  { word: "soared", type: "verb", direction: "big-increase" },
  { word: "surged", type: "verb", direction: "big-increase" },
  { word: "rocketed", type: "verb", direction: "big-increase" },
  { word: "skyrocketed", type: "verb", direction: "big-increase" },
  { word: "jumped", type: "verb", direction: "big-increase" },
  { word: "shot up", type: "verb", direction: "big-increase" },
  // Nouns
  { word: "a surge", type: "noun", direction: "big-increase" },
  { word: "a dramatic rise", type: "noun", direction: "big-increase" },
  { word: "a sharp increase", type: "noun", direction: "big-increase" },
  { word: "a significant jump", type: "noun", direction: "big-increase" },
  // Adjectives
  { word: "dramatic", type: "adjective", direction: "big-increase" },
  { word: "sharp", type: "adjective", direction: "big-increase" },
  { word: "significant", type: "adjective", direction: "big-increase" },
  { word: "substantial", type: "adjective", direction: "big-increase" },
  { word: "considerable", type: "adjective", direction: "big-increase" },
  // Adverbs
  { word: "dramatically", type: "adverb", direction: "big-increase" },
  { word: "sharply", type: "adverb", direction: "big-increase" },
  { word: "significantly", type: "adverb", direction: "big-increase" },
  { word: "substantially", type: "adverb", direction: "big-increase" },
  { word: "considerably", type: "adverb", direction: "big-increase" },

  // ===== SMALL INCREASE =====
  // Verbs
  { word: "rose slightly", type: "verb", direction: "small-increase" },
  { word: "edged up", type: "verb", direction: "small-increase" },
  { word: "crept up", type: "verb", direction: "small-increase" },
  { word: "inched up", type: "verb", direction: "small-increase" },
  { word: "climbed gradually", type: "verb", direction: "small-increase" },
  // Nouns
  { word: "a slight rise", type: "noun", direction: "small-increase" },
  { word: "a modest increase", type: "noun", direction: "small-increase" },
  { word: "a marginal rise", type: "noun", direction: "small-increase" },
  { word: "a gradual increase", type: "noun", direction: "small-increase" },
  { word: "a minor increase", type: "noun", direction: "small-increase" },
  // Adjectives
  { word: "slight", type: "adjective", direction: "small-increase" },
  { word: "modest", type: "adjective", direction: "small-increase" },
  { word: "marginal", type: "adjective", direction: "small-increase" },
  { word: "gradual", type: "adjective", direction: "small-increase" },
  { word: "steady", type: "adjective", direction: "small-increase" },
  // Adverbs
  { word: "slightly", type: "adverb", direction: "small-increase" },
  { word: "modestly", type: "adverb", direction: "small-increase" },
  { word: "marginally", type: "adverb", direction: "small-increase" },
  { word: "gradually", type: "adverb", direction: "small-increase" },
  { word: "steadily", type: "adverb", direction: "small-increase" },

  // ===== BIG DECREASE =====
  // Verbs
  { word: "plummeted", type: "verb", direction: "big-decrease" },
  { word: "plunged", type: "verb", direction: "big-decrease" },
  { word: "crashed", type: "verb", direction: "big-decrease" },
  { word: "collapsed", type: "verb", direction: "big-decrease" },
  { word: "tumbled", type: "verb", direction: "big-decrease" },
  { word: "nosedived", type: "verb", direction: "big-decrease" },
  // Nouns
  { word: "a sharp decline", type: "noun", direction: "big-decrease" },
  { word: "a dramatic fall", type: "noun", direction: "big-decrease" },
  { word: "a steep drop", type: "noun", direction: "big-decrease" },
  { word: "a significant decrease", type: "noun", direction: "big-decrease" },
  // Adjectives
  { word: "steep", type: "adjective", direction: "big-decrease" },
  // Adverbs
  { word: "steeply", type: "adverb", direction: "big-decrease" },

  // ===== SMALL DECREASE =====
  // Verbs
  { word: "dipped", type: "verb", direction: "small-decrease" },
  { word: "edged down", type: "verb", direction: "small-decrease" },
  { word: "fell slightly", type: "verb", direction: "small-decrease" },
  { word: "slipped", type: "verb", direction: "small-decrease" },
  { word: "eased", type: "verb", direction: "small-decrease" },
  // Nouns
  { word: "a slight decline", type: "noun", direction: "small-decrease" },
  { word: "a modest fall", type: "noun", direction: "small-decrease" },
  { word: "a gradual decrease", type: "noun", direction: "small-decrease" },
  { word: "a minor drop", type: "noun", direction: "small-decrease" },
  // Adjectives
  { word: "minimal", type: "adjective", direction: "small-decrease" },
  // Adverbs
  { word: "minimally", type: "adverb", direction: "small-decrease" },

  // ===== NO CHANGE =====
  // Verbs
  { word: "remained stable", type: "verb", direction: "no-change" },
  { word: "stayed the same", type: "verb", direction: "no-change" },
  { word: "held steady", type: "verb", direction: "no-change" },
  { word: "levelled off", type: "verb", direction: "no-change" },
  { word: "plateaued", type: "verb", direction: "no-change" },
  { word: "remained unchanged", type: "verb", direction: "no-change" },
  { word: "stabilised", type: "verb", direction: "no-change" },
  // Nouns
  { word: "a plateau", type: "noun", direction: "no-change" },
  { word: "stability", type: "noun", direction: "no-change" },
  // Adjectives
  { word: "stable", type: "adjective", direction: "no-change" },
  { word: "constant", type: "adjective", direction: "no-change" },
  { word: "unchanged", type: "adjective", direction: "no-change" },
  { word: "flat", type: "adjective", direction: "no-change" },

  // ===== FLUCTUATE =====
  // Verbs
  { word: "fluctuated", type: "verb", direction: "fluctuate" },
  { word: "varied", type: "verb", direction: "fluctuate" },
  { word: "oscillated", type: "verb", direction: "fluctuate" },
  // Nouns
  { word: "fluctuation", type: "noun", direction: "fluctuate" },
  { word: "variation", type: "noun", direction: "fluctuate" },
  // Adjectives
  { word: "erratic", type: "adjective", direction: "fluctuate" },
  { word: "volatile", type: "adjective", direction: "fluctuate" },

  // ===== PEAK =====
  // Verbs
  { word: "peaked", type: "verb", direction: "peak" },
  { word: "reached a peak", type: "verb", direction: "peak" },
  { word: "hit the highest point", type: "verb", direction: "peak" },
  { word: "reached its maximum", type: "verb", direction: "peak" },
  // Nouns
  { word: "a peak", type: "noun", direction: "peak" },
  { word: "the highest point", type: "noun", direction: "peak" },

  // ===== BOTTOM =====
  // Verbs
  { word: "bottomed out", type: "verb", direction: "bottom" },
  { word: "reached a low", type: "verb", direction: "bottom" },
  { word: "hit the lowest point", type: "verb", direction: "bottom" },
  // Nouns
  { word: "a trough", type: "noun", direction: "bottom" },
  { word: "the lowest point", type: "noun", direction: "bottom" },
];

export const directionLabels: Record<TrendDirection, string> = {
  "big-increase": "Large Increase",
  "small-increase": "Small Increase",
  "big-decrease": "Large Decrease",
  "small-decrease": "Small Decrease",
  "no-change": "No Change / Stable",
  fluctuate: "Fluctuation",
  peak: "Reached the Highest Point",
  bottom: "Reached the Lowest Point",
};

export const directionEmojis: Record<TrendDirection, string> = {
  "big-increase": "⬆️",
  "small-increase": "↗️",
  "big-decrease": "⬇️",
  "small-decrease": "↘️",
  "no-change": "➡️",
  fluctuate: "↕️",
  peak: "🔝",
  bottom: "🔻",
};
