export type SVAQuestion = {
  sentence: string; // use ___ for the blank
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const svaQuestions: SVAQuestion[] = [
  // --- "The number of" = singular ---
  {
    sentence: "The number of students ___ increased over the past decade.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "\"The number of\" is singular. The subject is \"number,\" not \"students.\" Use has.",
  },
  {
    sentence: "The number of tourists visiting the museum ___ every year.",
    options: ["rises", "rise"],
    correctIndex: 0,
    explanation:
      "\"The number of tourists\" = singular subject. Use rises.",
  },
  {
    sentence:
      "The number of households with internet access ___ doubled since 2010.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "\"The number of households\" is singular. Use has.",
  },
  {
    sentence:
      "The number of people who commute by bicycle ___ relatively small.",
    options: ["is", "are"],
    correctIndex: 0,
    explanation:
      "\"The number of people\" = singular. Use is.",
  },

  // --- "A number of" = plural ---
  {
    sentence: "A number of countries ___ seen rapid growth in tourism.",
    options: ["have", "has"],
    correctIndex: 0,
    explanation:
      "\"A number of\" means \"several\" and takes a plural verb. Use have.",
  },
  {
    sentence: "A number of factors ___ responsible for this trend.",
    options: ["are", "is"],
    correctIndex: 0,
    explanation:
      "\"A number of factors\" = several factors. Use are.",
  },

  // --- "The proportion/percentage of" = singular ---
  {
    sentence: "The proportion of adults who used social media ___ from 40% to 70%.",
    options: ["rose", "risen"],
    correctIndex: 0,
    explanation:
      "\"The proportion\" is the subject (singular). Use rose.",
  },
  {
    sentence:
      "The percentage of income spent on food ___ declined in all countries.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "\"The percentage\" is singular. Use has.",
  },

  // --- Long subject with distracting plural noun ---
  {
    sentence:
      "The consumption of imported goods in developing countries ___ significantly.",
    options: ["has risen", "have risen"],
    correctIndex: 0,
    explanation:
      "The subject is \"consumption\" (singular), not \"countries.\" Use has risen.",
  },
  {
    sentence:
      "The rate of crimes committed in large cities ___ dropped since 2015.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "The subject is \"rate\" (singular), not \"cities\" or \"crimes.\" Use has.",
  },
  {
    sentence:
      "The amount of money spent on education and healthcare ___ every year.",
    options: ["increases", "increase"],
    correctIndex: 0,
    explanation:
      "\"The amount\" is singular. \"Education and healthcare\" is inside a prepositional phrase. Use increases.",
  },
  {
    sentence:
      "The level of CO2 emissions from cars and factories ___ steadily.",
    options: ["has risen", "have risen"],
    correctIndex: 0,
    explanation:
      "\"The level\" is the subject (singular). Use has risen.",
  },

  // --- Compound subjects ---
  {
    sentence: "Food and housing ___ the two largest categories of expenditure.",
    options: ["were", "was"],
    correctIndex: 0,
    explanation:
      "\"Food and housing\" = two things = plural subject. Use were.",
  },
  {
    sentence: "Both Japan and Germany ___ a decline in birth rates.",
    options: ["experienced", "experiences"],
    correctIndex: 0,
    explanation:
      "\"Both X and Y\" is always plural. Use experienced.",
  },

  // --- "Each / Every" = singular ---
  {
    sentence: "Each of the countries ___ a different pattern of energy use.",
    options: ["shows", "show"],
    correctIndex: 0,
    explanation:
      "\"Each of\" always takes a singular verb. Use shows.",
  },
  {
    sentence: "Every category ___ an increase between 2005 and 2015.",
    options: ["saw", "seen"],
    correctIndex: 0,
    explanation:
      "\"Every\" is always singular. Use saw (past simple).",
  },

  // --- "There is/are" ---
  {
    sentence: "There ___ a significant difference between the two groups.",
    options: ["was", "were"],
    correctIndex: 0,
    explanation:
      "\"A significant difference\" is singular. Use was.",
  },
  {
    sentence: "There ___ several reasons for this change.",
    options: ["were", "was"],
    correctIndex: 0,
    explanation:
      "\"Several reasons\" is plural. Use were.",
  },

  // --- Uncountable nouns (always singular) ---
  {
    sentence: "The amount of electricity generated from wind power ___ tripled.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "\"The amount\" is singular. \"Electricity\" is uncountable. Use has.",
  },
  {
    sentence: "Water consumption in the region ___ relatively stable.",
    options: ["remained", "remain"],
    correctIndex: 0,
    explanation:
      "\"Consumption\" is the subject (singular). Use remained.",
  },

  // --- Relative clause distractors ---
  {
    sentence:
      "The country that produces the most oil ___ also the largest consumer.",
    options: ["is", "are"],
    correctIndex: 0,
    explanation:
      "\"The country\" is the main subject (singular). The relative clause is extra info. Use is.",
  },
  {
    sentence:
      "Students who study abroad ___ to earn higher salaries after graduation.",
    options: ["tend", "tends"],
    correctIndex: 0,
    explanation:
      "\"Students\" is the subject (plural). \"Who study abroad\" is a relative clause. Use tend.",
  },
  {
    sentence:
      "The figure for exports, which includes both goods and services, ___ by 30%.",
    options: ["rose", "risen"],
    correctIndex: 0,
    explanation:
      "\"The figure\" is singular. The clause between commas is extra info. Use rose.",
  },

  // --- "Neither...nor" / "Either...or" (verb matches nearest subject) ---
  {
    sentence: "Neither the UK nor the other EU countries ___ this pattern.",
    options: ["followed", "follows"],
    correctIndex: 0,
    explanation:
      "With \"neither...nor,\" the verb matches the nearest subject (\"countries\" = plural). Use followed.",
  },

  // --- Data/information (singular in academic English) ---
  {
    sentence: "The data ___ that most people prefer working from home.",
    options: ["suggests", "suggest"],
    correctIndex: 0,
    explanation:
      "In academic IELTS writing, \"data\" can be treated as singular. \"Suggests\" is the safer choice.",
  },
];
