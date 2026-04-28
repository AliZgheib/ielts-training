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

  // --- Additional "The number of" ---
  {
    sentence:
      "The number of cars on the road ___ tripled since 1990.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "\"The number of\" is singular. Use has.",
  },
  {
    sentence:
      "The number of patients waiting for surgery ___ every winter.",
    options: ["increases", "increase"],
    correctIndex: 0,
    explanation:
      "\"The number\" is the subject (singular). Use increases.",
  },

  // --- Additional long subject distractors ---
  {
    sentence:
      "The cost of raw materials imported from overseas ___ risen sharply.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "\"The cost\" is singular. \"Materials\" and \"overseas\" are inside prepositional phrases. Use has.",
  },
  {
    sentence:
      "The quality of public services in rural areas ___ a concern.",
    options: ["remains", "remain"],
    correctIndex: 0,
    explanation:
      "\"The quality\" is the subject (singular). Use remains.",
  },
  {
    sentence:
      "Sales of smartphones in developing nations ___ exceeded expectations.",
    options: ["have", "has"],
    correctIndex: 0,
    explanation:
      "\"Sales\" is the subject (plural). Use have.",
  },
  {
    sentence:
      "The average income of workers in the manufacturing sector ___ by 12%.",
    options: ["fell", "fallen"],
    correctIndex: 0,
    explanation:
      "\"The average income\" is singular. Use fell (past simple).",
  },
  {
    sentence:
      "Demand for organic products among younger consumers ___ growing.",
    options: ["is", "are"],
    correctIndex: 0,
    explanation:
      "\"Demand\" is the subject (singular, uncountable). Use is.",
  },
  {
    sentence:
      "The use of renewable energy sources in northern Europe ___ increased.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "\"The use\" is singular. Use has.",
  },

  // --- Additional compound subjects ---
  {
    sentence: "Oil and gas ___ the main exports of the country.",
    options: ["were", "was"],
    correctIndex: 0,
    explanation:
      "\"Oil and gas\" = two things = plural. Use were.",
  },
  {
    sentence: "Neither spending nor savings ___ changed during this period.",
    options: ["have", "has"],
    correctIndex: 0,
    explanation:
      "\"Neither...nor\" matches the nearest subject (\"savings\" = plural). Use have.",
  },

  // --- Additional "Each / Every" ---
  {
    sentence: "Each region ___ a unique pattern of population growth.",
    options: ["displayed", "display"],
    correctIndex: 0,
    explanation:
      "\"Each\" is always singular. Use displayed.",
  },
  {
    sentence: "Every one of the students surveyed ___ to use a smartphone daily.",
    options: ["was found", "were found"],
    correctIndex: 0,
    explanation:
      "\"Every one\" is singular even though \"students\" is plural. Use was found.",
  },

  // --- Additional "There is/are" ---
  {
    sentence: "There ___ a number of factors behind this trend.",
    options: ["are", "is"],
    correctIndex: 0,
    explanation:
      "\"A number of factors\" means \"several factors\" = plural. Use are.",
  },
  {
    sentence: "There ___ little difference between the two figures.",
    options: ["was", "were"],
    correctIndex: 0,
    explanation:
      "\"Little difference\" is singular. Use was.",
  },
  {
    sentence: "There ___ very few countries where spending decreased.",
    options: ["were", "was"],
    correctIndex: 0,
    explanation:
      "\"Very few countries\" is plural. Use were.",
  },

  // --- Additional uncountable nouns ---
  {
    sentence: "The information in the two charts ___ that women lived longer.",
    options: ["shows", "show"],
    correctIndex: 0,
    explanation:
      "\"Information\" is uncountable and singular. Use shows.",
  },
  {
    sentence: "Research into climate change ___ received more funding recently.",
    options: ["has", "have"],
    correctIndex: 0,
    explanation:
      "\"Research\" is uncountable and singular. Use has.",
  },
  {
    sentence: "The evidence from multiple studies ___ this claim.",
    options: ["supports", "support"],
    correctIndex: 0,
    explanation:
      "\"The evidence\" is uncountable and singular. \"Studies\" is inside a prepositional phrase. Use supports.",
  },

  // --- Additional relative clause distractors ---
  {
    sentence:
      "The city that attracted the most tourists ___ London.",
    options: ["was", "were"],
    correctIndex: 0,
    explanation:
      "\"The city\" is singular. \"That attracted the most tourists\" is extra info. Use was.",
  },
  {
    sentence:
      "Workers who earn above the average ___ a higher tax rate.",
    options: ["pay", "pays"],
    correctIndex: 0,
    explanation:
      "\"Workers\" is the subject (plural). Use pay.",
  },
  {
    sentence:
      "The category that showed the biggest change ___ transport.",
    options: ["was", "were"],
    correctIndex: 0,
    explanation:
      "\"The category\" is singular. Use was.",
  },

  // --- Additional tricky ones ---
  {
    sentence: "One in four adults ___ unable to swim.",
    options: ["is", "are"],
    correctIndex: 0,
    explanation:
      "\"One in four\" = \"one out of every four.\" The subject is \"one\" (singular). Use is.",
  },
  {
    sentence: "Half of the population ___ in urban areas.",
    options: ["lives", "live"],
    correctIndex: 0,
    explanation:
      "\"Half of the population\" refers to a single group as a whole. Use lives.",
  },
  {
    sentence: "The majority of respondents ___ in favour of the change.",
    options: ["were", "was"],
    correctIndex: 0,
    explanation:
      "\"The majority of respondents\" = most of them (plural sense). Use were.",
  },
  {
    sentence: "None of the countries ___ a decrease in spending.",
    options: ["showed", "shows"],
    correctIndex: 0,
    explanation:
      "\"None of the countries\" = not one of them. With plural nouns, use plural verb: showed.",
  },
  {
    sentence: "The rest of the money ___ spent on entertainment.",
    options: ["was", "were"],
    correctIndex: 0,
    explanation:
      "\"Money\" is uncountable. \"The rest of the money\" takes a singular verb. Use was.",
  },
  {
    sentence: "Two thirds of the budget ___ allocated to healthcare.",
    options: ["was", "were"],
    correctIndex: 0,
    explanation:
      "\"The budget\" is singular. Fractions match the noun after \"of.\" Use was.",
  },
];
