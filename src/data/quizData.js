export const quizData = {
  nutrition: {
    name: "Nutrition",
    icon: "🍎",
    levels: {
      easy: {
        name: "Easy",
        questions: [
          {
            id: "nut_easy_1",
            question: "Which vitamin is found in citrus fruits?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
            correct: 1,
            points: 10
          },
          {
            id: "nut_easy_2",
            question: "What is the main function of protein?",
            options: ["Energy source", "Building muscles", "Storing vitamins", "Producing hormones"],
            correct: 1,
            points: 10
          },
          {
            id: "nut_easy_3",
            question: "How many glasses of water should you drink daily?",
            options: ["2-3", "4-5", "8-10", "12-14"],
            correct: 2,
            points: 10
          },
          {
            id: "nut_easy_4",
            question: "Which food group provides the most energy?",
            options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
            correct: 1,
            points: 10
          }
        ]
      },
      moderate: {
        name: "Moderate",
        questions: [
          {
            id: "nut_mod_1",
            question: "Which mineral is essential for bone health?",
            options: ["Iron", "Calcium", "Sodium", "Potassium"],
            correct: 1,
            points: 20
          },
          {
            id: "nut_mod_2",
            question: "What is the recommended daily calorie intake for an average adult?",
            options: ["1000-1500", "1500-2000", "2000-2500", "2500-3000"],
            correct: 2,
            points: 20
          },
          {
            id: "nut_mod_3",
            question: "Which nutrient helps in blood clotting?",
            options: ["Vitamin K", "Vitamin B12", "Zinc", "Magnesium"],
            correct: 0,
            points: 20
          },
          {
            id: "nut_mod_4",
            question: "What percentage of our body is water?",
            options: ["40-50%", "50-60%", "60-70%", "70-80%"],
            correct: 2,
            points: 20
          }
        ]
      },
      hard: {
        name: "Hard",
        questions: [
          {
            id: "nut_hard_1",
            question: "Which amino acid is not produced by the human body?",
            options: ["Lysine", "Alanine", "Essential amino acids", "Non-essential amino acids"],
            correct: 2,
            points: 30
          },
          {
            id: "nut_hard_2",
            question: "What is the function of prebiotics?",
            options: [
              "Kill harmful bacteria",
              "Feed beneficial bacteria",
              "Produce vitamins",
              "Break down proteins"
            ],
            correct: 1,
            points: 30
          },
          {
            id: "nut_hard_3",
            question: "Which vitamin is synthesized by gut bacteria?",
            options: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin E"],
            correct: 2,
            points: 30
          },
          {
            id: "nut_hard_4",
            question: "What is the glycemic index?",
            options: [
              "Sugar content in food",
              "How quickly food raises blood sugar",
              "Amount of carbohydrates",
              "Fiber content in food"
            ],
            correct: 1,
            points: 30
          }
        ]
      }
    }
  },
  physical_health: {
    name: "Physical Health",
    icon: "💪",
    levels: {
      easy: {
        name: "Easy",
        questions: [
          {
            id: "phy_easy_1",
            question: "How many minutes of exercise is recommended daily?",
            options: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
            correct: 1,
            points: 10
          },
          {
            id: "phy_easy_2",
            question: "What is a normal resting heart rate?",
            options: ["40-50 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
            correct: 1,
            points: 10
          },
          {
            id: "phy_easy_3",
            question: "Which exercise is best for cardiovascular health?",
            options: ["Weight lifting", "Running", "Yoga", "Stretching"],
            correct: 1,
            points: 10
          },
          {
            id: "phy_easy_4",
            question: "How many hours of sleep do adults need?",
            options: ["4-5 hours", "6-7 hours", "7-9 hours", "10-12 hours"],
            correct: 2,
            points: 10
          }
        ]
      },
      moderate: {
        name: "Moderate",
        questions: [
          {
            id: "phy_mod_1",
            question: "What is BMI?",
            options: [
              "Body Mass Index",
              "Body Measurement Index",
              "Basic Medical Information",
              "Body Mass Information"
            ],
            correct: 0,
            points: 20
          },
          {
            id: "phy_mod_2",
            question: "Which type of exercise builds muscle strength?",
            options: ["Aerobic", "Resistance", "Flexibility", "Balance"],
            correct: 1,
            points: 20
          },
          {
            id: "phy_mod_3",
            question: "What is the normal blood pressure range?",
            options: [
              "90/60 - 120/80",
              "120/80 - 140/90",
              "140/90 - 160/100",
              "160/100 - 180/110"
            ],
            correct: 0,
            points: 20
          },
          {
            id: "phy_mod_4",
            question: "What is the purpose of warming up before exercise?",
            options: [
              "Burn calories",
              "Build muscle",
              "Prevent injury",
              "Improve flexibility"
            ],
            correct: 2,
            points: 20
          }
        ]
      },
      hard: {
        name: "Hard",
        questions: [
          {
            id: "phy_hard_1",
            question: "What is VO2 max?",
            options: [
              "Maximum heart rate",
              "Maximum oxygen consumption",
              "Maximum ventilation",
              "Maximum blood pressure"
            ],
            correct: 1,
            points: 30
          },
          {
            id: "phy_hard_2",
            question: "Which energy system is used in short, intense bursts of exercise?",
            options: [
              "Aerobic system",
              "ATP-PC system",
              "Glycolytic system",
              "Oxidative system"
            ],
            correct: 1,
            points: 30
          },
          {
            id: "phy_hard_3",
            question: "What is the role of mitochondria in exercise?",
            options: [
              "Store energy",
              "Produce energy",
              "Transport oxygen",
              "Build muscle"
            ],
            correct: 1,
            points: 30
          },
          {
            id: "phy_hard_4",
            question: "What is muscle hypertrophy?",
            options: [
              "Muscle weakness",
              "Muscle growth",
              "Muscle fatigue",
              "Muscle recovery"
            ],
            correct: 1,
            points: 30
          }
        ]
      }
    }
  },
  mental_health: {
    name: "Mental Health",
    icon: "🧠",
    levels: {
      easy: {
        name: "Easy",
        questions: [
          {
            id: "men_easy_1",
            question: "What is stress?",
            options: [
              "Physical illness",
              "Emotional response",
              "Mental disorder",
              "Personality trait"
            ],
            correct: 1,
            points: 10
          },
          {
            id: "men_easy_2",
            question: "Which activity can help reduce stress?",
            options: ["Meditation", "Caffeine", "Social media", "Video games"],
            correct: 0,
            points: 10
          },
          {
            id: "men_easy_3",
            question: "What is anxiety?",
            options: [
              "Feeling of worry",
              "Physical illness",
              "Personality type",
              "Learning disability"
            ],
            correct: 0,
            points: 10
          },
          {
            id: "men_easy_4",
            question: "How can exercise affect mental health?",
            options: [
              "No effect",
              "Improves mood",
              "Increases stress",
              "Decreases focus"
            ],
            correct: 1,
            points: 10
          }
        ]
      },
      moderate: {
        name: "Moderate",
        questions: [
          {
            id: "men_mod_1",
            question: "What is mindfulness?",
            options: [
              "Future planning",
              "Present awareness",
              "Past reflection",
              "Dream analysis"
            ],
            correct: 1,
            points: 20
          },
          {
            id: "men_mod_2",
            question: "What is cognitive behavioral therapy?",
            options: [
              "Medication treatment",
              "Thought pattern therapy",
              "Physical therapy",
              "Group therapy"
            ],
            correct: 1,
            points: 20
          },
          {
            id: "men_mod_3",
            question: "What is the stress hormone?",
            options: ["Insulin", "Cortisol", "Melatonin", "Thyroxine"],
            correct: 1,
            points: 20
          },
          {
            id: "men_mod_4",
            question: "What is emotional intelligence?",
            options: [
              "IQ level",
              "Understanding emotions",
              "Academic performance",
              "Social status"
            ],
            correct: 1,
            points: 20
          }
        ]
      },
      hard: {
        name: "Hard",
        questions: [
          {
            id: "men_hard_1",
            question: "What is neuroplasticity?",
            options: [
              "Brain aging",
              "Brain development",
              "Brain's ability to change",
              "Brain structure"
            ],
            correct: 2,
            points: 30
          },
          {
            id: "men_hard_2",
            question: "What is the role of serotonin?",
            options: [
              "Pain relief",
              "Mood regulation",
              "Blood pressure",
              "Digestion"
            ],
            correct: 1,
            points: 30
          },
          {
            id: "men_hard_3",
            question: "What is cognitive dissonance?",
            options: [
              "Memory loss",
              "Conflicting beliefs",
              "Learning disability",
              "Mental focus"
            ],
            correct: 1,
            points: 30
          },
          {
            id: "men_hard_4",
            question: "What is the default mode network?",
            options: [
              "Brain's resting state",
              "Fight or flight response",
              "Memory system",
              "Reward system"
            ],
            correct: 0,
            points: 30
          }
        ]
      }
    }
  },
  hygiene: {
    name: "Hygiene",
    icon: "🧼",
    levels: {
      easy: {
        name: "Easy",
        questions: [
          {
            id: "hyg_easy_1",
            question: "How long should you wash your hands?",
            options: [
              "5 seconds",
              "10 seconds",
              "20 seconds",
              "30 seconds"
            ],
            correct: 2,
            points: 10
          },
          {
            id: "hyg_easy_2",
            question: "How often should you brush your teeth?",
            options: [
              "Once daily",
              "Twice daily",
              "After every meal",
              "Before bed only"
            ],
            correct: 1,
            points: 10
          },
          {
            id: "hyg_easy_3",
            question: "What is the best way to prevent germ spread?",
            options: [
              "Hand washing",
              "Face mask",
              "Sanitizer",
              "Gloves"
            ],
            correct: 0,
            points: 10
          },
          {
            id: "hyg_easy_4",
            question: "How often should you shower?",
            options: [
              "Daily",
              "Weekly",
              "Twice daily",
              "Every other day"
            ],
            correct: 0,
            points: 10
          }
        ]
      },
      moderate: {
        name: "Moderate",
        questions: [
          {
            id: "hyg_mod_1",
            question: "What is cross-contamination?",
            options: [
              "Cleaning method",
              "Spreading germs between items",
              "Type of sanitizer",
              "Washing technique"
            ],
            correct: 1,
            points: 20
          },
          {
            id: "hyg_mod_2",
            question: "How often should you change your toothbrush?",
            options: [
              "Every month",
              "Every 3-4 months",
              "Every 6 months",
              "Every year"
            ],
            correct: 1,
            points: 20
          },
          {
            id: "hyg_mod_3",
            question: "What temperature water kills most germs?",
            options: [
              "Room temperature",
              "Warm",
              "Hot (60°C/140°F)",
              "Cold"
            ],
            correct: 2,
            points: 20
          },
          {
            id: "hyg_mod_4",
            question: "How often should bed sheets be washed?",
            options: [
              "Daily",
              "Weekly",
              "Monthly",
              "Every 3 months"
            ],
            correct: 1,
            points: 20
          }
        ]
      },
      hard: {
        name: "Hard",
        questions: [
          {
            id: "hyg_hard_1",
            question: "What is the difference between cleaning and disinfecting?",
            options: [
              "Same thing",
              "Removing vs killing germs",
              "Wet vs dry methods",
              "Time duration"
            ],
            correct: 1,
            points: 30
          },
          {
            id: "hyg_hard_2",
            question: "What is the proper order of cleaning?",
            options: [
              "Top to bottom",
              "Bottom to top",
              "Clean to dirty",
              "Dirty to clean"
            ],
            correct: 0,
            points: 30
          },
          {
            id: "hyg_hard_3",
            question: "What is the contact time for most disinfectants?",
            options: [
              "30 seconds",
              "1 minute",
              "5-10 minutes",
              "15 minutes"
            ],
            correct: 2,
            points: 30
          },
          {
            id: "hyg_hard_4",
            question: "What is the pH level of most hand soaps?",
            options: [
              "3-4",
              "5-6",
              "7-8",
              "9-10"
            ],
            correct: 2,
            points: 30
          }
        ]
      }
    }
  }
};
