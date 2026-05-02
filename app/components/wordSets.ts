export type WordSet = {
  id: string;
  name: string;
  category: string;
  words: string[];
  hints?: Record<string, string>;
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
      "midlife", "midmonth", "midyear",
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
  // CORE & TRICKY SPELLING
  // ==========================================
  {
    id: "core-tricky",
    name: "Core & Tricky",
    category: "Spelling Practice",
    words: [
      "accommodation", "achieve", "acknowledge", "address", "adolescence",
      "airport", "ancient", "annuity", "anxiety", "apartment",
      "ash", "ascertained", "assess", "assessed", "athletes", "autumn", "available",
      "background", "beginning", "believe", "bedsit", "bookstore", "boundaries",
      "brakes", "brass", "business",
      "cabins", "calcium", "canteen", "ceiling", "chemistry", "cigar",
      "circumstances", "classroom", "climate", "cloudy", "colonel", "colonization",
      "column", "committee", "conceive", "concisely", "conscience", "conscious",
      "convenient", "countryside",
      "database", "debt", "deceive", "definite", "design",
      "desert", "dessert", "different", "difficult", "disappear", "disappoint",
      "disease", "dissertation", "dissemination", "doubt",
      "efficient", "embarrass", "emigrate", "environment", "erosion",
      "exaggerate", "excellent", "exhibit", "exhibition", "experience", "explanation",
      "faculty", "field", "flat", "foreign",
      "friend", "fundamental", "fundraising", "fur",
      "government", "grazed", "guarantee", "guaranteed",
      "hairdresser", "harbors", "hardware", "happened", "height", "honest",
      "imagination", "immediate", "immediately", "immigrate", "implemented",
      "incineration", "inconclusive", "independent", "innocent", "intelligent",
      "interrupt", "intricacies", "island",
      "keyboard", "knowledge",
      "laboratory", "laptop", "leisure", "library", "lifestyle", "livestock", "lounge",
      "maintenance", "manuscript", "mathematical", "merely", "messenger",
      "midday",
      "mortgage", "motto", "museum",
      "necessary", "neither", "niece", "non-refundable", "notebook",
      "occurrence", "opportunity", "ottoman",
      "parallel", "passenger", "passport", "pavements", "pedestrians", "perceive",
      "persuade", "pharaoh", "physics", "possession", "possible",
      "postbox", "potassium", "poultry", "pressure", "privilege", "process",
      "professional", "pronounce", "pronunciation", "psychology",
      "questionnaire",
      "raincoat", "rainwear", "receipt", "receive", "recommend", "relief",
      "restaurant", "rhyme", "rhythm", "rural",
      "sable", "science", "scientist", "scissors", "seasick", "seaside",
      "separate", "sign", "sneakers", "software", "speech", "speeches",
      "standardization", "success", "sufficient", "suggestion", "sunshade",
      "support", "swallowing",
      "taps", "technique", "teeming", "temperature", "temporarily", "tennis",
      "textbook", "thesis", "thief", "thorough", "throughout",
      "traffic", "trainers", "trivial", "twelfth",
      "umbrella", "unconscious", "unfortunate", "unfortunately", "unforeseen",
      "university", "unnecessary", "urban",
      "vegetarian", "vehicle", "vehicles", "view", "village", "volcanic", "volunteer",
      "waterfall", "website", "whales",
      "winding", "wombat", "workplace",
      "yoghurt", "yolk",
      "advertisement", "enthusiasm", "hierarchy", "miniature",
      "miscellaneous", "occasionally", "particularly", "peculiar",
      "responsibility", "schedule", "surveillance",
    ],
  },

  {
    id: "ie-ei",
    name: "ie / ei Words",
    category: "Spelling Practice",
    words: [
      "achieve", "believe", "relieve", "retrieve", "grieve", "reprieve",
      "brief", "chief", "field", "grief", "piece", "pierce", "priest",
      "shield", "siege", "thief", "yield", "niece", "fierce", "fiend",
      "receive", "deceive", "conceive", "perceive", "ceiling", "receipt",
      "neither", "leisure", "seize", "weird", "protein", "caffeine", "species",
      "height", "freight", "weight", "eight", "surveillance",
    ],
  },

  {
    id: "silent-letters",
    name: "Silent Letters",
    category: "Spelling Practice",
    words: [
      "knight", "knife", "knock", "kneel", "knot", "knowledge",
      "gnaw", "gnat", "gnome",
      "wrist", "wreck", "write", "wrong", "wrap", "wreath",
      "psalm", "pneumonia", "psychology", "psychiatrist",
      "salmon", "castle", "whistle", "listen", "fasten", "often",
      "plumber", "subtle", "lamb", "climb", "comb", "thumb", "doubt", "debt",
      "island", "aisle", "receipt", "scissors", "muscle",
      "colonel", "heir", "honest", "honour", "hour",
      "autumn", "column", "condemn", "hymn", "solemn",
      "answer", "sword", "whole", "whose",
      "biscuit", "building", "guarantee", "guide", "tongue",
    ],
  },

  {
    id: "double-letters",
    name: "Double Letter Traps",
    category: "Spelling Practice",
    words: [
      "accommodation", "committee", "occurrence", "recommend", "necessary",
      "professional", "assessment", "immediately", "embarrass", "address",
      "aggressive", "appreciate", "arrangement", "beginning", "communication",
      "difference", "disappoint", "exaggerate", "millennium", "opportunity",
      "parallel", "possession", "programme", "success", "supposed",
      "tomorrow", "unnecessary", "broccoli", "cappuccino", "diarrhoea",
      "disappear", "dissatisfied", "excellent", "happiness", "interrupt",
      "jewellery", "misspell", "occasion", "questionnaire", "satellite",
      "succession", "vaccination",
    ],
  },

  {
    id: "confusable-pairs",
    name: "Confusable Pairs",
    category: "Spelling Practice",
    words: [
      "affect", "effect",
      "advice", "advise",
      "practice", "practise",
      "licence", "license",
      "lose", "loose",
      "quiet", "quite",
      "accept", "except",
      "desert", "dessert",
      "personal", "personnel",
      "emigrate", "immigrate",
      "ensure", "insure",
      "dependant", "dependent",
      "stationery", "stationary",
      "complement", "compliment",
      "principal", "principle",
    ],
    hints: {
      "affect":     "verb - to influence something",
      "effect":     "noun - the result of a change",
      "advice":     "noun - a suggestion (ice is a noun)",
      "advise":     "verb - to give a suggestion (ise is a verb)",
      "practice":   "noun - a doctor's practice (ice is a noun)",
      "practise":   "verb - to practise piano (ise is a verb)",
      "licence":    "noun - a driving licence (ice is a noun)",
      "license":    "verb - licensed to sell alcohol (ise is a verb)",
      "lose":       "verb - to lose your keys (one o)",
      "loose":      "adjective - loose clothing (two o's)",
      "quiet":      "adjective - no noise (qui-et, two syllables)",
      "quite":      "adverb - quite good (one syllable)",
      "accept":     "verb - to receive or agree to",
      "except":     "preposition - not including",
      "desert":     "noun - dry sandy place (one s, one dessert)",
      "dessert":    "noun - sweet after dinner (two s's, you want more)",
      "personal":   "adjective - private, belonging to you",
      "personnel":  "noun - staff or employees (double n)",
      "emigrate":   "to leave your country (exit)",
      "immigrate":  "to enter a new country (in)",
      "ensure":     "to make certain",
      "insure":     "to protect with an insurance policy",
      "dependant":  "noun - a person who depends on you",
      "dependent":  "adjective - relying on something",
      "stationery": "noun - paper and pens (e for envelope)",
      "stationary": "adjective - not moving (a for at rest)",
      "complement": "to complete something (complete has an e)",
      "compliment": "to say something nice (I like compliments)",
      "principal":  "the main one, or head of school (pal)",
      "principle":  "a rule or belief (rule ends in le)",
    },
  },

  {
    id: "form-filling",
    name: "Form Filling (Section 1)",
    category: "IELTS Skills",
    words: [
      "luggage", "insurance", "appointment", "membership", "registration",
      "reference", "extension", "maintenance", "equipment", "cancellation",
      "confirmation", "signature", "identification", "application",
      "occupation", "nationality", "destination", "accommodation",
      "reservation", "certificate", "receipt", "deposit", "refund",
      "deadline", "enquiry", "complaint", "guarantee", "assessment",
      "arrangement", "recommendation", "qualification", "advertisement",
    ],
  },

  {
    id: "plural-f-fe",
    name: "Plural -f/-fe to -ves",
    category: "Spelling Practice",
    words: [
      "knife", "knives", "life", "lives", "wife", "wives", "leaf",
      "leaves", "wolf", "wolves", "thief", "thieves", "shelf",
      "shelves", "half", "halves", "loaf", "loaves", "roof", "roofs",
      "chief", "chiefs", "belief", "beliefs", "giraffe", "giraffes",
      "chef", "chefs", "scarf", "scarfs", "scarves", "dwarf", "dwarfs",
      "dwarves", "hoof", "hoofs", "hooves", "cliff", "cliffs", "staff",
      "staffs",
    ],
  },

  // ==========================================
  // ENGLISH NAMES
  // ==========================================
  {
    id: "first-names",
    name: "First Names",
    category: "Names",
    words: [
      "alexander", "alice", "amanda", "andrew", "angela", "anthony",
      "barbara", "benjamin", "bridget", "catherine", "charlotte", "christopher",
      "daniel", "deborah", "diana", "dorothy", "douglas", "edward", "elizabeth",
      "emily", "emma", "eugene", "florence", "francis", "frederick",
      "geoffrey", "george", "gerald", "graham", "hannah", "harriet",
      "henry", "hugh", "isabel", "jacqueline", "james", "janet", "jennifer",
      "jessica", "jonathan", "joseph", "judith", "katherine", "lawrence",
      "leonard", "lewis", "louise", "lucy", "margaret", "martin", "matthew",
      "michael", "natalie", "nathaniel", "nicholas", "oliver", "patricia",
      "patrick", "pauline", "penelope", "peter", "philip", "rachel",
      "rebecca", "richard", "robert", "rosemary", "ruth", "samuel",
      "sarah", "sebastian", "simon", "sophie", "stephen", "stuart",
      "susan", "suzanne", "theresa", "thomas", "timothy", "victoria", "vincent",
      "virginia", "william",
    ],
  },
  {
    id: "surnames",
    name: "Surnames",
    category: "Names",
    words: [
      "anderson", "armstrong", "bailey", "baker", "bennett", "campbell",
      "carpenter", "chandler", "clarke", "collins", "crawford", "cunningham",
      "davidson", "edwards", "fitzgerald", "fletcher", "gallagher", "gibson",
      "griffiths", "hamilton", "harrison", "henderson", "jackson", "jefferson",
      "johnson", "kennedy", "lambert", "mackenzie", "marshall", "mitchell",
      "morrison", "murray", "nicholson", "o'brien", "palmer", "patel",
      "pemberton", "phillips", "robertson", "robinson", "sanders", "shepherd",
      "simpson", "sinclair", "sullivan", "thompson", "thornton", "wallace",
      "whitfield", "williams", "worthington", "wright",
    ],
  },
  // ==========================================
  // HOMOPHONES (same sound, different meaning)
  // ==========================================
  {
    id: "homophones",
    name: "Homophones (Same Sound)",
    category: "Spelling Practice",
    words: [
      "council", "counsel",
      "flour", "flower",
      "meat", "meet",
      "weather", "whether",
      "hear", "here",
      "their", "there",
      "principal", "principle",
      "stationary", "stationery",
      "complement", "compliment",
      "coarse", "course",
      "fair", "fare",
      "peace", "piece",
      "plain", "plane",
      "sail", "sale",
      "steal", "steel",
      "waist", "waste",
      "weak", "week",
      "whole", "hole",
      "soul", "sole",
      "son", "sun",
      "brake", "break",
      "right", "write",
      "sight", "site",
      "past", "passed",
      "role", "roll",
      "tale", "tail",
      "vain", "vein",
      "bare", "bear",
      "cereal", "serial",
      "muscle", "mussel",
      "altar", "alter",
      "aloud", "allowed",
      "male", "mail",
      "knot", "not",
      "no", "know",
      "new", "knew",
      "for", "four",
      "wait", "weight",
      "way", "weigh",
      "wear", "where",
      "wood", "would",
      "hour", "our",
      "two", "too",
      "buy", "by",
      "morning", "mourning",
      "knight", "night",
      "heard", "herd",
      "stair", "stare",
      "stake", "steak",
      "rain", "reign",
      "scene", "seen",
      "patience", "patients",
      "pray", "prey",
      "minor", "miner",
      "profit", "prophet",
      "suite", "sweet",
      "taut", "taught",
      "seam", "seem",
      "some", "sum",
    ],
    hints: {
      "council":    "a group that makes decisions — not advice or a lawyer",
      "counsel":    "advice, or a lawyer — not a decision-making group",
      "flour":      "you bake bread with it",
      "flower":     "a rose is one of these",
      "meat":       "beef, chicken, lamb — food",
      "meet":       "to see someone for the first time",
      "weather":    "rain, sun, wind — outside conditions",
      "whether":    "introduces two options — not rain or sunshine",
      "hear":       "using your ears to listen",
      "here":       "in this place — not using your ears",
      "their":      "belonging to them — not a place",
      "there":      "at that place — not belonging to them",
      "principal":  "the main one, or the head of a school",
      "principle":  "a rule or belief — not the head of a school",
      "stationary": "not moving, staying still",
      "stationery": "paper, pens, envelopes — writing materials",
      "complement": "to complete or go well with something",
      "compliment": "to say something nice to someone",
      "coarse":     "rough in texture — not a path or class",
      "course":     "a path, or a class you study — not rough texture",
      "fair":       "just and equal, or a fun outdoor event",
      "fare":       "the price of a bus or train ticket",
      "peace":      "no war, calm and quiet",
      "piece":      "a part or portion of something",
      "plain":      "simple, or flat open land",
      "plane":      "an aircraft",
      "sail":       "the cloth that catches wind on a boat",
      "sale":       "selling things, often at a discount",
      "steal":      "to take something that is not yours",
      "steel":      "a strong metal used in buildings",
      "waist":      "the middle part of your body",
      "waste":      "to use more than needed, or rubbish",
      "weak":       "not strong",
      "week":       "seven days",
      "whole":      "the complete amount — not an opening or gap",
      "hole":       "an opening or gap",
      "soul":       "the spiritual part of a person",
      "sole":       "the bottom of a shoe, or the only one",
      "son":        "a male child",
      "sun":        "the star that gives us light and heat",
      "brake":      "what you press to stop a car",
      "break":      "to damage something, or a short rest",
      "right":      "correct, or the opposite of left",
      "write":      "to put words on paper",
      "sight":      "the ability to see, or a view",
      "site":       "a location or place — not the ability to see",
      "past":       "time before now — not succeeded (past tense of pass)",
      "passed":     "went by, or succeeded — not time before now",
      "role":       "a part or function in a group — not bread or tumbling",
      "roll":       "to turn over, or a small round bread — not a job or function",
      "tale":       "a story",
      "tail":       "the part at the back of an animal",
      "vain":       "too proud of your looks, or pointless",
      "vein":       "a blood vessel in your body",
      "bare":       "uncovered, with nothing on it",
      "bear":       "a large wild animal, or to carry/tolerate",
      "cereal":     "a grain crop, or breakfast food",
      "serial":     "happening in a sequence — not a grain crop",
      "muscle":     "body tissue that helps you move",
      "mussel":     "a small shellfish you can eat",
      "altar":      "a table in a church used for religious ceremonies",
      "alter":      "to change something",
      "aloud":      "spoken out loud, using your voice — not permitted",
      "allowed":    "permitted to do something — not spoken out loud",
      "male":       "the opposite of female",
      "mail":       "letters and parcels sent by post",
      "knot":       "a tie made in rope or string",
      "not":        "makes something negative — not a tied rope",
      "no":         "a negative answer or refusal",
      "know":       "to have knowledge of something",
      "new":        "recently made or not used before",
      "knew":       "past tense of 'know' — not brand new",
      "for":        "indicates purpose or direction — not the number after three",
      "four":       "the number 4",
      "wait":       "to stay until something happens",
      "weight":     "how heavy something is",
      "way":        "a route or method — not measuring heaviness",
      "weigh":      "to measure how heavy something is",
      "wear":       "to have clothes on your body",
      "where":      "asking about a location — not putting on clothes",
      "wood":       "material from trees",
      "would":      "conditional or past of 'will' — not the tree material",
      "hour":       "60 minutes",
      "our":        "belonging to us — not 60 minutes",
      "two":        "the number 2",
      "too":        "also, or more than enough — not the number",
      "buy":        "to purchase something",
      "by":         "next to, or using something — not a purchase",
      "morning":    "the early part of the day",
      "mourning":   "grieving after someone has died",
      "knight":     "an armoured soldier in medieval times",
      "night":      "the dark part of the day",
      "heard":      "past tense of 'hear' — not a group of animals",
      "herd":       "a group of animals — not past tense of 'hear'",
      "stair":      "one step you climb — not a long fixed look",
      "stare":      "to look at something for a long time",
      "stake":      "a pointed stick, or something at risk",
      "steak":      "a thick slice of meat",
      "rain":       "water falling from clouds",
      "reign":      "a king or queen's period of rule",
      "scene":      "a view, or part of a play/film",
      "seen":       "past participle of 'see' — not a view or film part",
      "patience":   "the ability to wait calmly",
      "patients":   "people being treated by a doctor",
      "pray":       "to speak to God",
      "prey":       "an animal hunted by another animal",
      "minor":      "small or less important, or someone under 18",
      "miner":      "a person who works in a mine",
      "profit":     "money earned above costs — not a religious messenger",
      "prophet":    "a person who delivers messages from God",
      "suite":      "a set of rooms, or matching furniture",
      "sweet":      "tasting like sugar, or a piece of candy",
      "taut":       "stretched or pulled tight — not past tense of 'teach'",
      "taught":     "past tense of 'teach' — not stretched tight",
      "seam":       "a line of stitching joining two pieces of fabric",
      "seem":       "to appear to be a certain way",
      "some":       "an unspecified amount — not a maths total",
      "sum":        "a total, or a maths calculation",
    },
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
