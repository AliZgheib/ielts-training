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
  type: "verb" | "noun";
  direction: TrendDirection;
};

export const trendWords: TrendWord[] = [
  // ===== BIG INCREASE =====
  { word: "soared", type: "verb", direction: "big-increase" },
  { word: "surged", type: "verb", direction: "big-increase" },
  { word: "rocketed", type: "verb", direction: "big-increase" },
  { word: "skyrocketed", type: "verb", direction: "big-increase" },
  { word: "jumped", type: "verb", direction: "big-increase" },
  { word: "shot up", type: "verb", direction: "big-increase" },
  { word: "rose sharply", type: "verb", direction: "big-increase" },
  { word: "rose dramatically", type: "verb", direction: "big-increase" },
  { word: "rose significantly", type: "verb", direction: "big-increase" },
  { word: "increased substantially", type: "verb", direction: "big-increase" },
  { word: "climbed considerably", type: "verb", direction: "big-increase" },
  { word: "grew rapidly", type: "verb", direction: "big-increase" },
  { word: "a surge", type: "noun", direction: "big-increase" },
  { word: "a dramatic rise", type: "noun", direction: "big-increase" },
  { word: "a sharp increase", type: "noun", direction: "big-increase" },
  { word: "a significant jump", type: "noun", direction: "big-increase" },
  { word: "a substantial growth", type: "noun", direction: "big-increase" },
  { word: "a considerable rise", type: "noun", direction: "big-increase" },
  { word: "a steep climb", type: "noun", direction: "big-increase" },

  // ===== SMALL INCREASE =====
  { word: "rose slightly", type: "verb", direction: "small-increase" },
  { word: "edged up", type: "verb", direction: "small-increase" },
  { word: "crept up", type: "verb", direction: "small-increase" },
  { word: "inched up", type: "verb", direction: "small-increase" },
  { word: "climbed gradually", type: "verb", direction: "small-increase" },
  { word: "increased modestly", type: "verb", direction: "small-increase" },
  { word: "grew marginally", type: "verb", direction: "small-increase" },
  { word: "rose steadily", type: "verb", direction: "small-increase" },
  { word: "went up slightly", type: "verb", direction: "small-increase" },
  { word: "a slight rise", type: "noun", direction: "small-increase" },
  { word: "a modest increase", type: "noun", direction: "small-increase" },
  { word: "a marginal rise", type: "noun", direction: "small-increase" },
  { word: "a gradual increase", type: "noun", direction: "small-increase" },
  { word: "a minor increase", type: "noun", direction: "small-increase" },
  { word: "a steady climb", type: "noun", direction: "small-increase" },

  // ===== BIG DECREASE =====
  { word: "plummeted", type: "verb", direction: "big-decrease" },
  { word: "plunged", type: "verb", direction: "big-decrease" },
  { word: "crashed", type: "verb", direction: "big-decrease" },
  { word: "collapsed", type: "verb", direction: "big-decrease" },
  { word: "tumbled", type: "verb", direction: "big-decrease" },
  { word: "nosedived", type: "verb", direction: "big-decrease" },
  { word: "fell sharply", type: "verb", direction: "big-decrease" },
  { word: "fell dramatically", type: "verb", direction: "big-decrease" },
  { word: "dropped significantly", type: "verb", direction: "big-decrease" },
  { word: "declined substantially", type: "verb", direction: "big-decrease" },
  { word: "decreased considerably", type: "verb", direction: "big-decrease" },
  { word: "fell steeply", type: "verb", direction: "big-decrease" },
  { word: "a sharp decline", type: "noun", direction: "big-decrease" },
  { word: "a dramatic fall", type: "noun", direction: "big-decrease" },
  { word: "a steep drop", type: "noun", direction: "big-decrease" },
  { word: "a significant decrease", type: "noun", direction: "big-decrease" },
  { word: "a substantial decline", type: "noun", direction: "big-decrease" },
  { word: "a considerable drop", type: "noun", direction: "big-decrease" },

  // ===== SMALL DECREASE =====
  { word: "dipped", type: "verb", direction: "small-decrease" },
  { word: "edged down", type: "verb", direction: "small-decrease" },
  { word: "fell slightly", type: "verb", direction: "small-decrease" },
  { word: "slipped", type: "verb", direction: "small-decrease" },
  { word: "eased", type: "verb", direction: "small-decrease" },
  { word: "dropped marginally", type: "verb", direction: "small-decrease" },
  { word: "declined modestly", type: "verb", direction: "small-decrease" },
  { word: "decreased gradually", type: "verb", direction: "small-decrease" },
  { word: "went down slightly", type: "verb", direction: "small-decrease" },
  { word: "a slight decline", type: "noun", direction: "small-decrease" },
  { word: "a modest fall", type: "noun", direction: "small-decrease" },
  { word: "a gradual decrease", type: "noun", direction: "small-decrease" },
  { word: "a minor drop", type: "noun", direction: "small-decrease" },
  { word: "a marginal decline", type: "noun", direction: "small-decrease" },
  { word: "a small dip", type: "noun", direction: "small-decrease" },

  // ===== NO CHANGE =====
  { word: "remained stable", type: "verb", direction: "no-change" },
  { word: "stayed the same", type: "verb", direction: "no-change" },
  { word: "held steady", type: "verb", direction: "no-change" },
  { word: "levelled off", type: "verb", direction: "no-change" },
  { word: "plateaued", type: "verb", direction: "no-change" },
  { word: "remained unchanged", type: "verb", direction: "no-change" },
  { word: "stabilised", type: "verb", direction: "no-change" },
  { word: "remained constant", type: "verb", direction: "no-change" },
  { word: "stayed flat", type: "verb", direction: "no-change" },
  { word: "a plateau", type: "noun", direction: "no-change" },
  { word: "stability", type: "noun", direction: "no-change" },
  { word: "no change", type: "noun", direction: "no-change" },

  // ===== FLUCTUATE =====
  { word: "fluctuated", type: "verb", direction: "fluctuate" },
  { word: "varied", type: "verb", direction: "fluctuate" },
  { word: "oscillated", type: "verb", direction: "fluctuate" },
  { word: "went up and down", type: "verb", direction: "fluctuate" },
  { word: "was erratic", type: "verb", direction: "fluctuate" },
  { word: "was volatile", type: "verb", direction: "fluctuate" },
  { word: "a fluctuation", type: "noun", direction: "fluctuate" },
  { word: "an erratic pattern", type: "noun", direction: "fluctuate" },

  // ===== PEAK =====
  { word: "peaked", type: "verb", direction: "peak" },
  { word: "reached a peak", type: "verb", direction: "peak" },
  { word: "hit the highest point", type: "verb", direction: "peak" },
  { word: "reached its maximum", type: "verb", direction: "peak" },
  { word: "peaked at", type: "verb", direction: "peak" },
  { word: "a peak", type: "noun", direction: "peak" },
  { word: "the highest point", type: "noun", direction: "peak" },

  // ===== BOTTOM =====
  { word: "bottomed out", type: "verb", direction: "bottom" },
  { word: "reached a low", type: "verb", direction: "bottom" },
  { word: "hit the lowest point", type: "verb", direction: "bottom" },
  { word: "hit rock bottom", type: "verb", direction: "bottom" },
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
