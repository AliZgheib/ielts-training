export type ConnectorPattern =
  | "before-verb-ing"
  | "participle-ending"
  | "then-subsequently"
  | "after-which"
  | "followed-by"
  | "with-exception"
  | "mixed";

export type SentenceBuilderQuestion = {
  sentence: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  pattern: ConnectorPattern;
};

export const patternLabels: Record<ConnectorPattern, string> = {
  "before-verb-ing": "before + verb-ing",
  "participle-ending": ", reaching / peaking at",
  "then-subsequently": "then / subsequently",
  "after-which": "after which",
  "followed-by": "followed by",
  "with-exception": "with (exception)",
  mixed: "Mixed Patterns",
};

export const patternColors: Record<ConnectorPattern, string> = {
  "before-verb-ing": "bg-purple-50 text-purple-700",
  "participle-ending": "bg-blue-50 text-blue-700",
  "then-subsequently": "bg-green-50 text-green-700",
  "after-which": "bg-amber-50 text-amber-700",
  "followed-by": "bg-rose-50 text-rose-700",
  "with-exception": "bg-teal-50 text-teal-700",
  mixed: "bg-gray-50 text-gray-700",
};

export const sentenceBuilderQuestions: SentenceBuilderQuestion[] = [
  // ===== BEFORE + VERB-ING (7) =====
  {
    sentence:
      "The number of tourists rose steadily to 12 million ___ around 10 million in 1991.",
    options: ["before falling to", "before fell to", "then falling to", "until fell to"],
    correctIndex: 0,
    explanation:
      "'Before + verb-ing' connects a main trend with the change that followed. Always use the -ing form after 'before', not past tense.",
    pattern: "before-verb-ing",
  },
  {
    sentence:
      "House prices climbed from $200,000 to $350,000 ___ a low of $280,000 during the recession.",
    options: ["before hitting", "before they hitting", "before hit", "before had hit"],
    correctIndex: 0,
    explanation:
      "After 'before' in a participle clause, use verb-ing directly. No subject ('they') is needed between 'before' and the -ing verb.",
    pattern: "before-verb-ing",
  },
  {
    sentence:
      "Internet usage grew rapidly ___ slightly between 2003 and 2004.",
    options: ["before dipping", "before it dipping", "then dipping", "before dip"],
    correctIndex: 0,
    explanation:
      "'Before dipping' needs no subject. The subject of the main clause (internet usage) carries over automatically.",
    pattern: "before-verb-ing",
  },
  {
    sentence:
      "Sales of electric cars increased to 50,000 units ___ to 35,000 the following year.",
    options: ["before dropping", "before it dropped", "until dropping", "before drop"],
    correctIndex: 0,
    explanation:
      "'Before dropping to' links the rise with the fall in one smooth sentence. After 'before', use -ing, not a base verb or a new clause.",
    pattern: "before-verb-ing",
  },
  {
    sentence:
      "Spending on healthcare rose throughout the decade ___ slightly after the policy change.",
    options: ["before declining", "before declined", "until declined", "while declining"],
    correctIndex: 0,
    explanation:
      "'Before declining' shows what happened next. 'While declining' would mean both happened at the same time, which is wrong here.",
    pattern: "before-verb-ing",
  },
  {
    sentence:
      "Water consumption climbed to 500 litres per day ___ during the winter months.",
    options: ["before easing", "before eased", "then easing", "after eased"],
    correctIndex: 0,
    explanation:
      "'Before easing' connects the peak with the subsequent drop. Remember: before + verb-ing, not before + past tense.",
    pattern: "before-verb-ing",
  },
  {
    sentence:
      "The proportion of graduates stood at 60% in 2010 ___ to 80% by 2020.",
    options: ["before rising", "before rose", "then rising", "until rose"],
    correctIndex: 0,
    explanation:
      "'Stood at X before rising to Y' connects a starting point with the trend that followed. This is one of the most useful Task 1 patterns.",
    pattern: "before-verb-ing",
  },

  // ===== PARTICIPLE ENDING (7) =====
  {
    sentence:
      "The number of students increased steadily over the decade, ___ 25,000 in 2015.",
    options: ["reaching", "reached", "to reach", "and reach"],
    correctIndex: 0,
    explanation:
      "A participle clause (', reaching X') adds the final data point to the end of a sentence without starting a new one.",
    pattern: "participle-ending",
  },
  {
    sentence:
      "Oil production rose sharply in the first quarter, ___ a record of 3 million barrels in March.",
    options: ["hitting", "hit", "to hitting", "it hitting"],
    correctIndex: 0,
    explanation:
      "', hitting a record' is a participle ending. No subject is needed before the -ing verb.",
    pattern: "participle-ending",
  },
  {
    sentence:
      "Unemployment fell throughout the recovery period, ___ its lowest level of 4% in 2019.",
    options: ["reaching", "reached", "to reach", "had reached"],
    correctIndex: 0,
    explanation:
      "', reaching its lowest level' works for both highs and lows. It adds the endpoint data smoothly.",
    pattern: "participle-ending",
  },
  {
    sentence: "The temperature climbed all morning, ___ 35 degrees by noon.",
    options: ["peaking at", "peaked at", "to peak at", "and peaked"],
    correctIndex: 0,
    explanation:
      "', peaking at 35 degrees' is a participle clause showing the highest point reached.",
    pattern: "participle-ending",
  },
  {
    sentence:
      "Consumer spending grew between January and June, ___ $2 billion at its highest point.",
    options: ["totalling", "totalled", "which totalled", "it totalled"],
    correctIndex: 0,
    explanation:
      "', totalling $2 billion' uses a participle ending to add a figure at the end of the sentence.",
    pattern: "participle-ending",
  },
  {
    sentence:
      "The city's population expanded year after year, ___ 3 million by 2020.",
    options: ["surpassing", "surpassed", "to surpass", "and surpass"],
    correctIndex: 0,
    explanation:
      "', surpassing 3 million' adds the milestone figure with a participle clause instead of a new sentence.",
    pattern: "participle-ending",
  },
  {
    sentence:
      "Exports grew steadily over the period, ___ by more than 200% in total.",
    options: ["increasing", "increased", "to increase", "which increase"],
    correctIndex: 0,
    explanation:
      "', increasing by more than 200%' uses a participle to add the overall magnitude of the trend.",
    pattern: "participle-ending",
  },

  // ===== THEN / SUBSEQUENTLY (5) =====
  {
    sentence:
      "The figure dropped to a low of 200 in 2008. It ___ rebounded to 350 over the next three years.",
    options: ["then", "before", "after", "while"],
    correctIndex: 0,
    explanation:
      "'Then' connects two events across sentences: first the drop, then the recovery.",
    pattern: "then-subsequently",
  },
  {
    sentence:
      "The share price dipped during the first quarter. It ___ climbed steadily for the rest of the year.",
    options: ["subsequently", "previously", "meanwhile", "regardless"],
    correctIndex: 0,
    explanation:
      "'Subsequently' is the formal version of 'then'. Both signal what happened after a turning point.",
    pattern: "then-subsequently",
  },
  {
    sentence:
      "Exports fell sharply during the recession, but ___ recovered to pre-crisis levels by 2012.",
    options: ["then", "before", "since", "while"],
    correctIndex: 0,
    explanation:
      "'But then recovered' shows the reversal. 'But' signals the contrast, 'then' signals the timing.",
    pattern: "then-subsequently",
  },
  {
    sentence:
      "The proportion dipped to 15% in 2005. It ___ rose gradually, returning to 20% in 2010.",
    options: ["then", "throughout", "during", "before"],
    correctIndex: 0,
    explanation:
      "'It then rose' introduces the recovery. Notice ', returning to 20%' at the end is also a participle clause.",
    pattern: "then-subsequently",
  },
  {
    sentence:
      "Energy consumption plateaued between 2015 and 2017. ___, it began to decline.",
    options: ["Subsequently", "Previously", "Meanwhile", "Nevertheless"],
    correctIndex: 0,
    explanation:
      "'Subsequently' at the start of a sentence means 'after that period'. It introduces the next phase of the trend.",
    pattern: "then-subsequently",
  },

  // ===== AFTER WHICH (5) =====
  {
    sentence:
      "The rate peaked at 75% in 2005, ___ it fell gradually to 60%.",
    options: ["after which", "after that", "then which", "since which"],
    correctIndex: 0,
    explanation:
      "', after which' is a relative clause connector. It links a peak to what happened next in the same sentence. 'After that' would need a full stop before it.",
    pattern: "after-which",
  },
  {
    sentence:
      "Sales surged to 2 million units in the third quarter, ___ they levelled off.",
    options: ["after which", "before which", "during which", "since which"],
    correctIndex: 0,
    explanation:
      "', after which they levelled off' connects the surge with the stabilisation in one sentence.",
    pattern: "after-which",
  },
  {
    sentence:
      "The number of applicants reached a record high in 2018, ___ there was a sharp decline.",
    options: ["after which", "after when", "then which", "since then"],
    correctIndex: 0,
    explanation:
      "', after which' is correct. 'After when' does not exist in English. 'Since then' needs a new sentence.",
    pattern: "after-which",
  },
  {
    sentence:
      "Rainfall peaked in July at 200mm, ___ it decreased steadily through autumn.",
    options: ["after which", "after", "before which", "then which"],
    correctIndex: 0,
    explanation:
      "', after which it decreased' keeps both events in one sentence. Just 'after' alone would need restructuring.",
    pattern: "after-which",
  },
  {
    sentence:
      "The country's GDP reached $1 trillion in 2015, ___ growth slowed to around 2% per year.",
    options: ["after which", "after what", "following which it", "then where"],
    correctIndex: 0,
    explanation:
      "', after which growth slowed' connects the milestone with the subsequent deceleration.",
    pattern: "after-which",
  },

  // ===== FOLLOWED BY (5) =====
  {
    sentence:
      "There was a sharp increase in enrolment between 2010 and 2013, ___ a period of stability.",
    options: ["followed by", "following by", "follows by", "was followed"],
    correctIndex: 0,
    explanation:
      "'Followed by' connects two noun phrases: a trend, followed by another trend. 'Following by' does not exist in English.",
    pattern: "followed-by",
  },
  {
    sentence:
      "The first half of the year saw a steady decline, ___ a sudden recovery in the third quarter.",
    options: ["followed by", "following by", "then followed", "followed with"],
    correctIndex: 0,
    explanation:
      "', followed by a sudden recovery' links two phases as noun phrases.",
    pattern: "followed-by",
  },
  {
    sentence:
      "There was a dramatic surge in house prices, ___ a gradual correction over two years.",
    options: ["followed by", "following for", "follows with", "followed for"],
    correctIndex: 0,
    explanation:
      "'A surge, followed by a correction.' This is a classic IELTS pattern for describing two-phase trends.",
    pattern: "followed-by",
  },
  {
    sentence:
      "The decade began with rapid growth, ___ stagnation in the later years.",
    options: ["followed by", "following by", "follow by", "followed from"],
    correctIndex: 0,
    explanation:
      "'Followed by' is always the correct form. 'Following by' is a common error that does not exist.",
    pattern: "followed-by",
  },
  {
    sentence:
      "There was a period of volatility in the early years, ___ a more stable trend after 2010.",
    options: ["followed by", "followed with", "following with", "follows by"],
    correctIndex: 0,
    explanation:
      "Structure: 'There was [phase 1], followed by [phase 2].' Both sides should be noun phrases.",
    pattern: "followed-by",
  },

  // ===== WITH (EXCEPTION) (3) =====
  {
    sentence:
      "The number of passengers grew from 2 million to 5 million over the decade, ___ a brief dip in 2008.",
    options: ["with", "having", "being", "for"],
    correctIndex: 0,
    explanation:
      "', with a brief dip in...' is a concise way to mention an exception to the overall trend without starting a new sentence.",
    pattern: "with-exception",
  },
  {
    sentence:
      "Internet adoption rose from 10% to 85%, ___ the fastest growth occurring between 2005 and 2010.",
    options: ["with", "having", "when", "where"],
    correctIndex: 0,
    explanation:
      "', with the fastest growth occurring...' adds detail about the pace of change within the main trend.",
    pattern: "with-exception",
  },
  {
    sentence:
      "The country's exports tripled over the period, ___ particularly strong performance in the electronics sector.",
    options: ["with", "having", "being", "for having"],
    correctIndex: 0,
    explanation:
      "', with particularly strong performance...' adds a supporting detail to the main trend without a new sentence.",
    pattern: "with-exception",
  },

  // ===== MIXED (3) =====
  {
    sentence:
      "The value of imports ___ at $10 billion in 2008 before recovering to $14 billion by 2012.",
    options: ["bottomed out", "was bottomed", "bottoming out", "had bottom"],
    correctIndex: 0,
    explanation:
      "The main verb needs past simple ('bottomed out'). The sentence then uses 'before recovering' as the connector. Notice both patterns working together.",
    pattern: "mixed",
  },
  {
    sentence:
      "Spending on education increased throughout the 1990s, ___ 8% of GDP by 2000.",
    options: ["accounting for", "accounted for", "to account for", "which accounted"],
    correctIndex: 0,
    explanation:
      "', accounting for' is a participle ending. It adds the final figure expressed as a proportion.",
    pattern: "mixed",
  },
  {
    sentence:
      "The proportion of women in management ___ at just 10% in 1990 and rose gradually, reaching 35% two decades later.",
    options: ["stood", "standing", "was stood", "had standing"],
    correctIndex: 0,
    explanation:
      "'Stood at X and rose gradually, reaching Y' chains THREE data points using 'and' plus a participle ending. This is the gold standard for Task 1 sentences.",
    pattern: "mixed",
  },
];
