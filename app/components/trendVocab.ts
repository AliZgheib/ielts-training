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
  alternates?: string[];
  type: "verb" | "noun";
  direction: TrendDirection;
};

export const trendWords: TrendWord[] = [
  // ===== BIG INCREASE (verbs) =====
  { word: "soared", alternates: ["soar"], type: "verb", direction: "big-increase" },
  { word: "surged", alternates: ["surge"], type: "verb", direction: "big-increase" },
  { word: "rocketed", alternates: ["rocket"], type: "verb", direction: "big-increase" },
  { word: "skyrocketed", alternates: ["skyrocket"], type: "verb", direction: "big-increase" },
  { word: "jumped", alternates: ["jump"], type: "verb", direction: "big-increase" },
  { word: "shot up", alternates: ["shoot up"], type: "verb", direction: "big-increase" },
  // ===== BIG INCREASE (nouns) =====
  { word: "a surge", type: "noun", direction: "big-increase" },
  { word: "a dramatic rise", type: "noun", direction: "big-increase" },
  { word: "a sharp increase", type: "noun", direction: "big-increase" },
  { word: "a significant jump", type: "noun", direction: "big-increase" },
  { word: "a steep climb", type: "noun", direction: "big-increase" },

  // ===== SMALL INCREASE (verbs) =====
  { word: "edged up", alternates: ["edge up"], type: "verb", direction: "small-increase" },
  { word: "crept up", alternates: ["creep up"], type: "verb", direction: "small-increase" },
  { word: "inched up", alternates: ["inch up"], type: "verb", direction: "small-increase" },
  // ===== SMALL INCREASE (nouns) =====
  { word: "a slight rise", type: "noun", direction: "small-increase" },
  { word: "a modest increase", type: "noun", direction: "small-increase" },
  { word: "a marginal rise", type: "noun", direction: "small-increase" },
  { word: "a gradual increase", type: "noun", direction: "small-increase" },
  { word: "a steady climb", type: "noun", direction: "small-increase" },

  // ===== BIG DECREASE (verbs) =====
  { word: "plummeted", alternates: ["plummet"], type: "verb", direction: "big-decrease" },
  { word: "plunged", alternates: ["plunge"], type: "verb", direction: "big-decrease" },
  { word: "crashed", alternates: ["crash"], type: "verb", direction: "big-decrease" },
  { word: "collapsed", alternates: ["collapse"], type: "verb", direction: "big-decrease" },
  { word: "tumbled", alternates: ["tumble"], type: "verb", direction: "big-decrease" },
  { word: "nosedived", alternates: ["nosedive"], type: "verb", direction: "big-decrease" },
  // ===== BIG DECREASE (nouns) =====
  { word: "a sharp decline", type: "noun", direction: "big-decrease" },
  { word: "a dramatic fall", type: "noun", direction: "big-decrease" },
  { word: "a steep drop", type: "noun", direction: "big-decrease" },
  { word: "a significant decrease", type: "noun", direction: "big-decrease" },

  // ===== SMALL DECREASE (verbs) =====
  { word: "dipped", alternates: ["dip"], type: "verb", direction: "small-decrease" },
  { word: "edged down", alternates: ["edge down"], type: "verb", direction: "small-decrease" },
  { word: "slipped", alternates: ["slip"], type: "verb", direction: "small-decrease" },
  { word: "eased", alternates: ["ease"], type: "verb", direction: "small-decrease" },
  // ===== SMALL DECREASE (nouns) =====
  { word: "a slight decline", type: "noun", direction: "small-decrease" },
  { word: "a modest fall", type: "noun", direction: "small-decrease" },
  { word: "a small dip", type: "noun", direction: "small-decrease" },
  { word: "a marginal decline", type: "noun", direction: "small-decrease" },

  // ===== NO CHANGE (verbs) =====
  { word: "plateaued", alternates: ["plateau"], type: "verb", direction: "no-change" },
  { word: "stabilised", alternates: ["stabilise", "stabilize", "stabilized"], type: "verb", direction: "no-change" },
  { word: "levelled off", alternates: ["level off"], type: "verb", direction: "no-change" },
  { word: "remained stable", alternates: ["remain stable"], type: "verb", direction: "no-change" },
  { word: "held steady", alternates: ["hold steady"], type: "verb", direction: "no-change" },
  { word: "stayed flat", alternates: ["stay flat"], type: "verb", direction: "no-change" },
  // ===== NO CHANGE (nouns) =====
  { word: "a plateau", type: "noun", direction: "no-change" },
  { word: "stability", type: "noun", direction: "no-change" },

  // ===== FLUCTUATE (verbs) =====
  { word: "fluctuated", alternates: ["fluctuate"], type: "verb", direction: "fluctuate" },
  { word: "varied", alternates: ["vary"], type: "verb", direction: "fluctuate" },
  { word: "oscillated", alternates: ["oscillate"], type: "verb", direction: "fluctuate" },
  // ===== FLUCTUATE (nouns) =====
  { word: "a fluctuation", type: "noun", direction: "fluctuate" },
  { word: "a variation", type: "noun", direction: "fluctuate" },

  // ===== PEAK (verbs) =====
  { word: "peaked", alternates: ["peak"], type: "verb", direction: "peak" },
  { word: "reached a peak", alternates: ["reach a peak"], type: "verb", direction: "peak" },
  // ===== PEAK (nouns) =====
  { word: "a peak", type: "noun", direction: "peak" },
  { word: "the highest point", type: "noun", direction: "peak" },

  // ===== BOTTOM (verbs) =====
  { word: "bottomed out", alternates: ["bottom out"], type: "verb", direction: "bottom" },
  { word: "reached a low", alternates: ["reach a low"], type: "verb", direction: "bottom" },
  // ===== BOTTOM (nouns) =====
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
