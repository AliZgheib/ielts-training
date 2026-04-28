export type TenseQuestion = {
  sentence: string; // use ___ for the blank
  timeSignal: string; // the clue word(s)
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const tenseQuestions: TenseQuestion[] = [
  // --- Past Simple (completed actions with specific past time) ---
  {
    sentence: "In 2015, the number of tourists ___ significantly.",
    timeSignal: "In 2015",
    options: ["increased", "has increased", "increases", "had increased"],
    correctIndex: 0,
    explanation:
      "\"In 2015\" is a finished past time. Use past simple: increased.",
  },
  {
    sentence: "Between 2005 and 2010, spending on education ___ by 20%.",
    timeSignal: "Between 2005 and 2010",
    options: ["rose", "has risen", "rises", "was rising"],
    correctIndex: 0,
    explanation:
      "\"Between 2005 and 2010\" is a completed past period. Use past simple: rose.",
  },
  {
    sentence: "The percentage of people who used public transport ___ in 2008.",
    timeSignal: "in 2008",
    options: ["peaked", "has peaked", "peaks", "had peaked"],
    correctIndex: 0,
    explanation:
      "\"In 2008\" is a specific past year. Use past simple: peaked.",
  },
  {
    sentence: "From 1990 to 2000, the population of the city ___ steadily.",
    timeSignal: "From 1990 to 2000",
    options: ["grew", "has grown", "grows", "is growing"],
    correctIndex: 0,
    explanation:
      "\"From 1990 to 2000\" is a finished range. Use past simple: grew.",
  },
  {
    sentence: "Expenditure on healthcare ___ sharply in the early 2000s.",
    timeSignal: "in the early 2000s",
    options: ["fell", "has fallen", "falls", "was falling"],
    correctIndex: 0,
    explanation:
      "\"In the early 2000s\" is a completed past period. Use past simple: fell.",
  },
  {
    sentence:
      "Over the period from 1980 to 1995, car ownership ___ from 30% to 55%.",
    timeSignal: "from 1980 to 1995",
    options: ["increased", "has increased", "increases", "will increase"],
    correctIndex: 0,
    explanation:
      "\"From 1980 to 1995\" is a completed period. Use past simple: increased.",
  },
  {
    sentence: "During the 1990s, internet usage ___ almost non-existent.",
    timeSignal: "During the 1990s",
    options: ["was", "has been", "is", "had been"],
    correctIndex: 0,
    explanation:
      "\"During the 1990s\" is a finished decade. Use past simple: was.",
  },

  // --- Present Perfect (past to now / "since" / unfinished time) ---
  {
    sentence: "Since 2010, the rate of unemployment ___ dramatically.",
    timeSignal: "Since 2010",
    options: ["has fallen", "fell", "falls", "had fallen"],
    correctIndex: 0,
    explanation:
      "\"Since 2010\" connects past to now. Use present perfect: has fallen.",
  },
  {
    sentence:
      "Over the past decade, the proportion of online shoppers ___.",
    timeSignal: "Over the past decade",
    options: ["has doubled", "doubled", "doubles", "had doubled"],
    correctIndex: 0,
    explanation:
      "\"Over the past decade\" includes the present. Use present perfect: has doubled.",
  },
  {
    sentence:
      "The number of international students ___ steadily since 2015.",
    timeSignal: "since 2015",
    options: ["has grown", "grew", "grows", "had grown"],
    correctIndex: 0,
    explanation:
      "\"Since 2015\" means from 2015 up to now. Use present perfect: has grown.",
  },
  {
    sentence: "In recent years, demand for electric vehicles ___.",
    timeSignal: "In recent years",
    options: ["has surged", "surged", "surges", "had surged"],
    correctIndex: 0,
    explanation:
      "\"In recent years\" includes the present. Use present perfect: has surged.",
  },
  {
    sentence: "So far, consumption of fossil fuels ___ by 15%.",
    timeSignal: "So far",
    options: ["has decreased", "decreased", "decreases", "had decreased"],
    correctIndex: 0,
    explanation:
      "\"So far\" means up to the present moment. Use present perfect: has decreased.",
  },

  // --- Present Simple (general facts / describing what a chart shows) ---
  {
    sentence: "The bar chart ___ the number of visitors to three museums.",
    timeSignal: "(describing the chart itself)",
    options: ["shows", "showed", "has shown", "is showing"],
    correctIndex: 0,
    explanation:
      "When describing what a chart does right now, use present simple: shows.",
  },
  {
    sentence:
      "The table ___ information about household spending in five countries.",
    timeSignal: "(describing the chart itself)",
    options: ["provides", "provided", "has provided", "is providing"],
    correctIndex: 0,
    explanation:
      "Describing what a table contains uses present simple: provides.",
  },
  {
    sentence: "The pie chart ___ the distribution of energy sources.",
    timeSignal: "(describing the chart itself)",
    options: ["illustrates", "illustrated", "has illustrated", "is illustrating"],
    correctIndex: 0,
    explanation:
      "Charts always illustrate (present simple) their data: illustrates.",
  },
  {
    sentence:
      "It is clear that Tokyo ___ the highest rate of public transport use.",
    timeSignal: "(general fact from the data)",
    options: ["has", "had", "is having", "will have"],
    correctIndex: 0,
    explanation:
      "Stating a fact visible in the data right now uses present simple: has.",
  },

  // --- Mixed / Tricky ---
  {
    sentence:
      "While spending on food ___ in 2010, spending on housing continued to rise.",
    timeSignal: "in 2010",
    options: ["dropped", "has dropped", "drops", "had dropped"],
    correctIndex: 0,
    explanation:
      "\"In 2010\" is a finished year. Use past simple: dropped.",
  },
  {
    sentence:
      "By 2005, the figure for car ownership ___ to 60%.",
    timeSignal: "By 2005",
    options: ["had risen", "rose", "has risen", "rises"],
    correctIndex: 0,
    explanation:
      "\"By 2005\" means before that point in the past. Use past perfect: had risen.",
  },
  {
    sentence:
      "The data ___ that women earned less than men in every year surveyed.",
    timeSignal: "(describing what the data reveals)",
    options: ["reveals", "revealed", "has revealed", "had revealed"],
    correctIndex: 0,
    explanation:
      "Describing what data shows uses present simple: reveals.",
  },
  {
    sentence:
      "After 2012, the gap between the two groups ___ considerably.",
    timeSignal: "After 2012",
    options: ["narrowed", "has narrowed", "narrows", "had narrowed"],
    correctIndex: 0,
    explanation:
      "\"After 2012\" in a finished data set means past simple: narrowed.",
  },
  {
    sentence:
      "The percentage of adults with a degree ___ from 15% in 1990 to 40% in 2020.",
    timeSignal: "from 1990 to 2020",
    options: ["rose", "has risen", "rises", "had risen"],
    correctIndex: 0,
    explanation:
      "\"From 1990 to 2020\" is a completed range. Use past simple: rose.",
  },
  {
    sentence:
      "Overall, the amount of waste produced ___ significantly over the last 20 years.",
    timeSignal: "over the last 20 years",
    options: ["has increased", "increased", "increases", "had increased"],
    correctIndex: 0,
    explanation:
      "\"Over the last 20 years\" includes now. Use present perfect: has increased.",
  },
  {
    sentence:
      "At the start of the period, only 10% of households ___ a computer.",
    timeSignal: "At the start of the period",
    options: ["owned", "have owned", "own", "had owned"],
    correctIndex: 0,
    explanation:
      "\"At the start of the period\" is a specific past point. Use past simple: owned.",
  },
  {
    sentence:
      "The line graph ___ changes in the unemployment rate from 2000 to 2020.",
    timeSignal: "(describing the chart itself)",
    options: ["depicts", "depicted", "has depicted", "was depicting"],
    correctIndex: 0,
    explanation:
      "Describing what a chart does uses present simple: depicts.",
  },
  {
    sentence:
      "Since the beginning of the century, life expectancy ___ in most countries.",
    timeSignal: "Since the beginning of the century",
    options: ["has risen", "rose", "rises", "had risen"],
    correctIndex: 0,
    explanation:
      "\"Since the beginning of the century\" connects to the present. Use present perfect: has risen.",
  },
];
