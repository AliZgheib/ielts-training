export type WordSet = {
  id: string;
  name: string;
  category: string;
  words: string[];
};

export const wordSets: WordSet[] = [
  // ==========================================
  // GENERAL / ALL
  // ==========================================
  {
    id: "all",
    name: "All Words (Everything)",
    category: "General",
    words: [], // populated dynamically below
  },

  // ==========================================
  // TIME & CALENDAR
  // ==========================================
  {
    id: "days",
    name: "Days of the Week",
    category: "Time & Calendar",
    words: [
      "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
      "sunday", "weekdays", "weekend",
    ],
  },
  {
    id: "months",
    name: "Months of the Year",
    category: "Time & Calendar",
    words: [
      "january", "february", "march", "april", "may", "june", "july",
      "august", "september", "october", "november", "december",
    ],
  },
  {
    id: "time-expressions",
    name: "Time Expressions",
    category: "Time & Calendar",
    words: [
      "afternoon", "midday", "midnight", "morning", "evening", "fortnight",
      "midweek", "midmorning", "overnight", "daytime", "midafternoon",
      "midevening", "timetable", "tomorrow", "tonight",
    ],
  },

  // ==========================================
  // FAMILY & PEOPLE
  // ==========================================
  {
    id: "family",
    name: "Family & Relationships",
    category: "People",
    words: [
      "aunt", "brother", "cousin", "daughter", "father", "grandfather",
      "grandmother", "husband", "mother", "nephew", "niece", "sister", "son",
      "uncle", "wife", "sibling", "parent", "relative", "spouse",
      "father-in-law", "mother-in-law", "brother-in-law", "sister-in-law",
      "stepfather", "stepmother", "toddler", "teenager", "infant",
    ],
  },
  {
    id: "occupations",
    name: "Jobs & Occupations",
    category: "People",
    words: [
      "accountant", "architect", "captain", "cashier", "clerk", "conductor",
      "craftsman", "decorator", "dentist", "designer", "doctor", "employer",
      "engineer", "guard", "lecturer", "manager", "pilot", "professor",
      "psychologist", "receptionist", "scientist", "secretary", "specialist",
      "supervisor", "teacher", "tutor", "volunteer", "waiter", "waitress",
    ],
  },

  // ==========================================
  // EDUCATION
  // ==========================================
  {
    id: "education",
    name: "Education & Study",
    category: "Education",
    words: [
      "accommodation", "assessment", "assignment", "attendance", "bachelor",
      "certificate", "classroom", "colleague", "commencement", "conference",
      "course", "curriculum", "deadline", "degree", "department", "diploma",
      "dissertation", "education", "enrolment", "examination", "experiment",
      "facilities", "faculty", "feedback", "graduate", "guideline", "handout",
      "intermediate", "introductory", "knowledge", "laboratory", "laptop",
      "lecture", "library", "module", "notebook", "placement", "presentation",
      "printer", "professor", "publication", "questionnaire", "reference",
      "registration", "research", "scholarship", "seminar", "specialist",
      "statistics", "supervisor", "syllabus", "technique", "textbook",
      "thesis", "timetable", "tutor", "university",
    ],
  },
  {
    id: "subjects",
    name: "Academic Subjects",
    category: "Education",
    words: [
      "agriculture", "anthropology", "archaeology", "architecture", "biology",
      "business", "chemistry", "economics", "ecology", "geography", "geology",
      "history", "humanities", "law", "linguistics", "literature", "logic",
      "mathematics", "philosophy", "physics", "politics", "psychology",
      "science", "sociology", "statistics",
    ],
  },

  // ==========================================
  // MONEY & FINANCE
  // ==========================================
  {
    id: "money",
    name: "Money & Finance",
    category: "Money",
    words: [
      "annuity", "budget", "cash", "cheque", "coupon", "credit", "debt",
      "deficit", "deposit", "discount", "distribution", "dividend", "expense",
      "fee", "finance", "fundraising", "income", "insurance", "interest",
      "investment", "mortgage", "non-refundable", "poverty", "profit",
      "purchase", "receipt", "refund", "rent", "salary", "tax", "tuition",
      "voucher", "withdraw",
    ],
  },

  // ==========================================
  // NATURE & ENVIRONMENT
  // ==========================================
  {
    id: "nature",
    name: "Nature & Geography",
    category: "Nature",
    words: [
      "avalanche", "canyon", "cliff", "coast", "countryside", "dam", "desert",
      "earthquake", "erosion", "flood", "forest", "hill", "hurricane", "island",
      "jungle", "lake", "mountain", "oasis", "peninsula", "pond", "reef",
      "river", "storm", "tornado", "typhoon", "valley", "village", "volcano",
      "waterfall",
    ],
  },
  {
    id: "environment",
    name: "Environment & Climate",
    category: "Nature",
    words: [
      "carbon", "climate", "cloudy", "contaminated", "deforestation",
      "degradation", "dioxide", "drought", "earthquake", "emission",
      "environment", "fossil", "freezing", "greenhouse", "humid", "hurricane",
      "moisture", "oxygen", "pollution", "precipitation", "rainfall",
      "renewable", "solar", "subsoil", "temperature", "topsoil", "vegetation",
      "volcanic", "weather",
    ],
  },
  {
    id: "animals",
    name: "Animals & Wildlife",
    category: "Nature",
    words: [
      "amphibian", "cattle", "cetacean", "creature", "dolphin", "elephant",
      "feather", "fish", "frog", "insect", "lion", "livestock", "lizard",
      "mammal", "octopus", "penguin", "poultry", "predator", "primate",
      "reptile", "rodent", "seabird", "shark", "species", "whale", "wombat",
    ],
  },

  // ==========================================
  // HEALTH & FOOD
  // ==========================================
  {
    id: "health",
    name: "Health & Body",
    category: "Health & Food",
    words: [
      "athlete", "balanced", "calcium", "disease", "exercise", "fitness",
      "health", "jogging", "laboratory", "medicine", "mineral", "muscle",
      "nursing", "nutrition", "pharmacy", "potassium", "protein", "remedy",
      "seasick", "surgery", "swallowing", "symptom", "treatment", "vaccine",
      "vegetarian", "vitamin", "vitamin", "yoga",
    ],
  },
  {
    id: "food",
    name: "Food & Cooking",
    category: "Health & Food",
    words: [
      "beans", "bread", "breakfast", "calcium", "carbohydrate", "cereal",
      "cheese", "chocolate", "dessert", "dinner", "eggs", "flour", "fruit",
      "lunch", "meal", "meat", "mineral", "mushroom", "pasta", "pepper",
      "pizza", "potato", "protein", "recipe", "rice", "salad", "seafood",
      "tomato", "vegetable", "vegetarian", "vitamin", "yoghurt", "yolk",
    ],
  },

  // ==========================================
  // HOME & HOUSING
  // ==========================================
  {
    id: "housing",
    name: "Home & Housing",
    category: "Places",
    words: [
      "apartment", "balcony", "basement", "bathroom", "bedroom", "bungalow",
      "ceiling", "chimney", "condominium", "corridor", "dormitory", "duplex",
      "fence", "flat", "floor", "furniture", "garage", "garden", "hallway",
      "house", "kitchen", "landlord", "lease", "microwave", "mortgage",
      "neighborhood", "oven", "refrigerator", "rent", "sofa", "storey",
      "suburb", "tenant",
    ],
  },

  // ==========================================
  // TRANSPORT
  // ==========================================
  {
    id: "transport",
    name: "Transport & Travel",
    category: "Transport",
    words: [
      "aircraft", "airport", "automobile", "bicycle", "brakes", "canoe",
      "cargo", "carriage", "cycling", "ferry", "flight", "gondola",
      "helicopter", "highway", "hovercraft", "kayak", "minibus", "motorcycle",
      "passenger", "passport", "pedestrian", "platform", "reservation",
      "sailboat", "seatbelt", "shipment", "subway", "taxi", "terminal",
      "ticket", "timetable", "traffic", "train", "tram", "underground",
      "vehicle",
    ],
  },

  // ==========================================
  // MAP & DIRECTIONS
  // ==========================================
  {
    id: "maps",
    name: "Maps & Directions",
    category: "IELTS Skills",
    words: [
      "above", "adjacent", "adjoining", "alongside", "behind", "below",
      "beneath", "beside", "between", "beyond", "corner", "corridor",
      "crossing", "eastside", "entrance", "exit", "footbridge", "intersection",
      "junction", "northeast", "northwest", "opposite", "pavement",
      "pedestrian", "roundabout", "southeast", "southwest", "straight",
      "suburb", "westside",
    ],
  },

  // ==========================================
  // ARTS & MEDIA
  // ==========================================
  {
    id: "arts",
    name: "Arts & Entertainment",
    category: "Culture",
    words: [
      "audience", "ballet", "carnival", "cinema", "classical", "concert",
      "conductor", "exhibition", "festival", "gallery", "instrument", "magazine",
      "museum", "newspaper", "opera", "orchestra", "painting", "photography",
      "portrait", "pottery", "radio", "sculpture", "symphony", "television",
      "theatre", "vocalist",
    ],
  },

  // ==========================================
  // MATERIALS
  // ==========================================
  {
    id: "materials",
    name: "Materials & Substances",
    category: "Science",
    words: [
      "aluminum", "bone", "brass", "cement", "ceramics", "concrete", "copper",
      "cotton", "fabric", "feather", "fiberglass", "fur", "glass", "glue",
      "gold", "leather", "lumber", "metal", "paper", "plastic", "rubber",
      "silver", "steel", "stone", "textile", "wax", "wood", "wool",
    ],
  },

  // ==========================================
  // SPORTS & HOBBIES
  // ==========================================
  {
    id: "sports",
    name: "Sports & Hobbies",
    category: "Lifestyle",
    words: [
      "archery", "badminton", "baseball", "basketball", "billiards", "bowling",
      "canoeing", "championship", "climbing", "cricket", "cycling", "embroidery",
      "exercise", "gardening", "golf", "gymnasium", "hockey", "jogging",
      "marathon", "orienteering", "photography", "rugby", "skateboarding",
      "snorkeling", "soccer", "squash", "surfing", "swimming", "tennis",
      "volleyball", "windsurfing", "wrestling",
    ],
  },

  // ==========================================
  // TRICKY SPELLING (from your notes)
  // ==========================================
  {
    id: "tricky",
    name: "Tricky Spelling Words",
    category: "Spelling Practice",
    words: [
      "accommodation", "achieve", "acknowledge", "ancient", "anxiety",
      "assessment", "believe", "business", "catalogue", "ceiling", "cigar",
      "climate", "cloudy", "colonel", "column", "committee", "conceive",
      "conscience", "conscious", "convenient", "council", "counsel", "deceive",
      "definite", "different", "difficult", "disappoint", "disease",
      "dissertation", "doubt", "efficient", "embarrass", "environment",
      "exaggerate", "excellent", "exhibit", "exhibition", "February",
      "foreign", "government", "guarantee", "hairdresser", "height", "honest",
      "immediately", "independent", "interrupt", "island", "knowledge",
      "laboratory", "leisure", "maintenance", "manuscript", "mortgage",
      "muscle", "necessary", "niece", "occurrence", "opportunity", "parallel",
      "perceive", "pharaoh", "piece", "possession", "privilege", "pronunciation",
      "psychology", "questionnaire", "receipt", "receive", "recommend", "relief",
      "restaurant", "rhyme", "rhythm", "scissors", "separate", "speech",
      "sufficient", "technique", "temperature", "thesis", "umbrella",
      "unfortunately", "vegetarian", "Wednesday", "yoghurt",
    ],
  },

  // ==========================================
  // YOUR PERSONAL WORDS (from words-2.txt)
  // ==========================================
  {
    id: "my-words",
    name: "Words I Got Wrong",
    category: "Spelling Practice",
    words: [
      "achievement", "afternoon", "ancient", "annuity", "anxiety", "apartment",
      "ash", "assess", "assessed", "assessment", "athletes", "bedsit", "brakes",
      "boundaries", "brass", "cabins", "calcium", "canteen", "catalogue", "center", "centre",
      "chemistry", "cigar", "climate", "cloudy", "colonization", "council",
      "counsel", "countryside", "desert", "dessert", "disease", "dissertation",
      "emigrate", "environment", "erosion", "exhibit", "exhibition", "faculty",
      "fifteen", "fifty", "flat", "fundraising", "fur", "grazed", "hairdresser",
      "harbors", "harbours", "house", "imagination", "immigrate", "implemented",
      "incineration", "laboratory", "leisure", "livestock", "lounge",
      "manuscript", "midday", "mortgage", "motto", "museum", "niece", "non-refundable",
      "pavements", "pedestrians", "pharaoh", "physics", "postbox", "potassium",
      "poultry", "pronounce", "pronunciation", "psychology", "rainwear", "rural",
      "sable", "seasick", "sneakers", "speech", "speeches", "standardization",
      "subsoil", "sunshade", "swallowing", "taps", "teeming", "temporarily",
      "tennis", "thesis", "topsoil", "trainers", "trivial", "umbrella", "urban",
      "vegetarian", "volcanic", "waist", "whales", "winding", "wombat",
      "yoghurt", "yolk",
    ],
  },

  // ==========================================
  // CLEAN WORD LIST (from desktop words.txt)
  // ==========================================
  {
    id: "clean-list",
    name: "Core Spelling List",
    category: "Spelling Practice",
    words: [
      "accommodation", "achieve", "acknowledge", "address", "afternoon",
      "airport", "ancient", "assessment", "autumn", "available", "background",
      "beginning", "believe", "bookstore", "business", "ceiling", "classroom",
      "column", "committee", "conceive", "convenient", "database", "daytime",
      "deceive", "debt", "design", "different", "difficult", "disappoint",
      "doubt", "efficient", "embarrass", "environment", "exaggerate",
      "excellent", "experience", "explanation", "february", "field", "foreign",
      "fortnight", "friend", "government", "greenhouse", "happened", "hardware",
      "height", "honest", "immediate", "independent", "innocent", "intelligent",
      "interrupt", "island", "keyboard", "knowledge", "laptop", "library",
      "lifestyle", "maintenance", "messenger", "midafternoon", "midday",
      "midevening", "midlife", "midmorning", "midnight", "midmonth", "midpoint",
      "midsection", "midstream", "midway", "midweek", "midyear", "muscle",
      "necessary", "neither", "notebook", "occurrence", "opportunity",
      "overnight", "parallel", "passenger", "passport", "perceive", "persuade",
      "piece", "possession", "possible", "pressure", "privilege", "professional",
      "process", "questionnaire", "receipt", "receive", "recommend", "relief",
      "rhyme", "rhythm", "science", "scientist", "scissors", "seaside",
      "separate", "sign", "software", "success", "sufficient", "suggestion",
      "support", "technique", "temperature", "textbook", "thief", "timetable",
      "tomorrow", "tonight", "traffic", "university", "unfortunate", "view",
      "village", "volunteer", "waterfall", "weather", "wednesday", "weekend",
      "website", "workplace",
    ],
  },
];

// Populate the "All Words" set with every unique word
const allWords = new Set<string>();
wordSets.forEach((set) => {
  if (set.id !== "all") {
    set.words.forEach((w) => allWords.add(w.toLowerCase()));
  }
});
wordSets[0].words = Array.from(allWords).sort();

// Get all unique categories
export const categories = Array.from(
  new Set(wordSets.map((s) => s.category))
);
