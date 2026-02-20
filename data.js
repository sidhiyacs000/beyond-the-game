// ============================================================
// BEYOND THE GAME — COMPLETE DATASET
// data.js — Load this BEFORE script.js in index.html
// ============================================================

const BTGData = {

  // ══════════════════════════════════════════
  // 1. MENTAL SUPPORT
  // ══════════════════════════════════════════
  mentalSupport: {

    journalPrompts: [
      {
        id: "jp001", category: "Identity", week: 1, day: 1,
        title: "Who Were You Before the Sport?",
        prompt: "Before you became an athlete, who were you? List 5 qualities about yourself that had nothing to do with your sport. How many of those qualities do you still have today?",
        followUp: "Circle the quality you are most proud of. Write 3 sentences about how that quality can serve you in your next chapter.",
        therapyFramework: "ACT — Values Clarification",
        estimatedTime: "15 minutes", icon: "🪞",
        tags: ["identity", "self-worth", "week1"]
      },
      {
        id: "jp002", category: "Grief", week: 1, day: 2,
        title: "The Letter You Never Sent",
        prompt: "Write an unsent letter to your injury. Tell it how angry you are, what it took from you, and what you refuse to let it take. Be completely honest — nobody will read this except you.",
        followUp: "After writing, read it back. Underline one sentence that surprised you. What does that sentence tell you about what you value most?",
        therapyFramework: "CPT — Expressive Writing",
        estimatedTime: "20 minutes", icon: "✉️",
        tags: ["grief", "anger", "expression", "week1"]
      },
      {
        id: "jp003", category: "Gratitude", week: 1, day: 3,
        title: "Three Things Still Standing",
        prompt: "Not toxic positivity — real gratitude. Look around your life right now. What are 3 things that the injury could not take from you? They can be small. They can be people. They can be places or feelings.",
        followUp: "For each thing you listed, write one sentence about how you can actively nurture it this week.",
        therapyFramework: "CBT — Gratitude Practice",
        estimatedTime: "10 minutes", icon: "🌱",
        tags: ["gratitude", "hope", "week1"]
      },
      {
        id: "jp004", category: "Identity", week: 1, day: 4,
        title: "The Athlete Was Part of You — Not All of You",
        prompt: "Imagine your life as a house with many rooms. Sport was one room — maybe the biggest room. But what are the other rooms? Write about at least 4 other rooms in your life: relationships, passions, humor, creativity, memory, values.",
        followUp: "Which room have you neglected most while sport was your focus? What would it look like to open that door again?",
        therapyFramework: "ACT — Defusion & Self-Concept",
        estimatedTime: "15 minutes", icon: "🏠",
        tags: ["identity", "self-concept", "week1"]
      },
      {
        id: "jp005", category: "Future Self", week: 2, day: 1,
        title: "A Letter From Your Future Self",
        prompt: "It is 3 years from now. You have rebuilt your life in a way that feels meaningful and full. Your future self is writing to you — right now, today. What do they say? What do they want you to know? What did the road look like?",
        followUp: "Highlight one piece of advice your future self gave you. Commit to one small action this week that moves toward that future.",
        therapyFramework: "Solution-Focused Therapy — Future Orientation",
        estimatedTime: "20 minutes", icon: "🔮",
        tags: ["future", "hope", "purpose", "week2"]
      },
      {
        id: "jp006", category: "Self-Compassion", week: 2, day: 2,
        title: "Talk to Yourself Like a Teammate",
        prompt: "Write down 5 things you have said to yourself since your injury — thoughts that were harsh, unfair, or cruel. Now rewrite each one as if you were speaking to your best teammate going through the exact same thing.",
        followUp: "Read the rewritten versions out loud. How does it feel to receive that kind of support? You deserve it too.",
        therapyFramework: "Self-Compassion — Kristin Neff Framework",
        estimatedTime: "15 minutes", icon: "💙",
        tags: ["self-compassion", "inner-critic", "week2"]
      },
      {
        id: "jp007", category: "Purpose", week: 2, day: 3,
        title: "What Made You Fall in Love With Sport?",
        prompt: "Go back to the very beginning. What was it about your sport that made you feel alive? Was it the competition? The team? The training? The crowd? The discipline? Write about the feeling — not the achievement.",
        followUp: "Now ask yourself: where else in life could that feeling live? What activities might give you even a fraction of that feeling?",
        therapyFramework: "ACT — Values Identification",
        estimatedTime: "15 minutes", icon: "❤️‍🔥",
        tags: ["purpose", "values", "passion", "week2"]
      },
      {
        id: "jp008", category: "Strength", week: 3, day: 1,
        title: "The Hardest Thing You Ever Did",
        prompt: "Before this injury, what was the hardest thing you ever pushed through in your athletic career? Describe it in detail — what it felt like, what you wanted to do, what you actually did. What made you keep going?",
        followUp: "That same capacity is still inside you. It did not get injured. How can you apply it to where you are right now?",
        therapyFramework: "Narrative Therapy — Strength Recall",
        estimatedTime: "20 minutes", icon: "💪",
        tags: ["resilience", "strength", "week3"]
      },
      {
        id: "jp009", category: "Relationships", week: 3, day: 2,
        title: "Who Has Stayed?",
        prompt: "Since your injury, who has shown up for you without being asked? Who checked in? Who sat with you? Write about them. What does their presence tell you about the relationships that are real in your life?",
        followUp: "Have you told any of these people what their support has meant to you? If not — could you this week?",
        therapyFramework: "Interpersonal Therapy — Social Support Mapping",
        estimatedTime: "15 minutes", icon: "🤝",
        tags: ["relationships", "connection", "gratitude", "week3"]
      },
      {
        id: "jp010", category: "Acceptance", week: 4, day: 1,
        title: "The Thing I Am Learning to Accept",
        prompt: "Write about one aspect of your new reality that you are still struggling to accept. Do not force acceptance — just describe what it feels like to resist it. What are you afraid will happen if you stop fighting it?",
        followUp: "Acceptance does not mean you are okay with what happened. It means you stop letting the fight with reality drain your energy. What would you do with that energy instead?",
        therapyFramework: "ACT — Acceptance & Willingness",
        estimatedTime: "20 minutes", icon: "🌊",
        tags: ["acceptance", "grief", "week4"]
      }
    ],

    motivationalStories: [
      {
        id: "ms001",
        name: "Marcus Thompson",
        sport: "Professional Football (Soccer)",
        injury: "Triple ACL Tear — Career Ended at Age 26",
        country: "England",
        currentRole: "Founder of a Sports Academy & Youth Coach",
        yearsInRecovery: 4,
        shortQuote: "The pitch taught me everything I needed to know to build a business. I just did not know it yet.",
        fullStory: "Marcus was on the verge of his first Premier League contract when a tackle in a pre-season friendly tore his ACL for the third time. Surgeons told him his knee could not withstand professional football anymore. At 26, he felt his identity collapse. For 8 months he barely left his flat. He found Beyond The Game, began journaling, and connected with a mentor who had walked the same road. Today Marcus runs an academy for underprivileged youth in Manchester, using everything sport taught him — discipline, leadership, structure — to transform young lives. He coaches 300 kids and says coaching has given him a purpose he never found even on the pitch.",
        keyTurningPoint: "The day I stopped asking why me and started asking what now — everything shifted.",
        adviceToOthers: "Do not wait until you feel ready. Take one small step while you still feel broken. The feeling follows the action, not the other way around.",
        timeline: [
          { month: 1, event: "Injury confirmed — career over" },
          { month: 3, event: "Joined Beyond The Game community" },
          { month: 6, event: "Connected with first mentor" },
          { month: 10, event: "Started coaching local youth team" },
          { month: 18, event: "Registered academy as official business" },
          { month: 36, event: "Academy serving 300 students" }
        ],
        tags: ["football", "ACL", "entrepreneurship", "academy", "youth"]
      },
      {
        id: "ms002",
        name: "Priya Nair",
        sport: "Competitive Swimming",
        injury: "Rotator Cuff Rupture — Multiple Surgeries",
        country: "India",
        currentRole: "Sports Journalist & Podcast Host",
        yearsInRecovery: 3,
        shortQuote: "I thought my voice only mattered when I was winning races. Turns out it mattered most when I started talking about losing.",
        fullStory: "Priya was a national-level swimmer ranked in the top 10 in India when a rotator cuff rupture ended three years of Olympic-level preparation. Two surgeries later, she was told to stop competitive swimming permanently. The hardest part was not the pain — it was the silence. Nobody knew what to say. She began writing anonymously on the Beyond The Game community platform. Her posts attracted hundreds of responses from athletes who felt exactly the same way. Today Priya hosts Beyond The Lanes, a podcast downloaded over 200,000 times, and writes for a major sports publication.",
        keyTurningPoint: "When I realized that my story was not just mine — it belonged to every athlete who ever felt invisible after injury.",
        adviceToOthers: "Share your experience. Even anonymously. Even imperfectly. Someone out there needs to hear exactly what you are going through.",
        timeline: [
          { month: 1, event: "Final surgery — told to stop swimming" },
          { month: 2, event: "Started anonymous posting in community" },
          { month: 5, event: "Posts went viral in athlete community" },
          { month: 8, event: "First article published" },
          { month: 14, event: "Launched podcast" },
          { month: 24, event: "200,000+ podcast downloads" }
        ],
        tags: ["swimming", "shoulder", "journalism", "podcast", "media"]
      },
      {
        id: "ms003",
        name: "David Osei",
        sport: "Track & Field — 400m Sprinter",
        injury: "Spinal Stress Fracture — Permanent Restriction",
        country: "Ghana",
        currentRole: "Sportswear Brand Founder",
        yearsInRecovery: 5,
        shortQuote: "Every athlete needs gear. I just decided that mine should be built by someone who actually knows what it feels like to need it.",
        fullStory: "David was preparing for the African Championships when persistent back pain turned out to be a spinal stress fracture misdiagnosed for over a year. He was 24. The financial pressure was enormous — his family had invested heavily in his athletic career. For two years he struggled with severe depression and financial anxiety. Through Beyond The Game's career mentorship program, he launched Stryde — a performance sportswear brand designed by an athlete for athletes — now stocked in 12 countries.",
        keyTurningPoint: "I stopped seeing my athletic knowledge as worthless and started seeing it as the product itself.",
        adviceToOthers: "Your expertise in your sport is a business asset. Do not throw it away — package it.",
        timeline: [
          { month: 1, event: "Diagnosis confirmed — career over" },
          { month: 6, event: "Severe depression — sought mental health support" },
          { month: 10, event: "Matched with business mentor on platform" },
          { month: 14, event: "First product prototype created" },
          { month: 20, event: "Stryde brand launched" },
          { month: 48, event: "Brand available in 12 countries" }
        ],
        tags: ["track", "spinal", "entrepreneurship", "sportswear", "brand"]
      },
      {
        id: "ms004",
        name: "Elena Vasquez",
        sport: "Professional Tennis",
        injury: "Chronic Tennis Elbow & Wrist Fracture",
        country: "Spain",
        currentRole: "Corporate Wellness Consultant & Motivational Speaker",
        yearsInRecovery: 3,
        shortQuote: "I used to think resilience was about getting back up. Now I know it is about deciding what to get up for.",
        fullStory: "Elena reached WTA ranking 87 before a combination of chronic tennis elbow and a wrist fracture during a match ended her career at 29. She tried rehabilitation three times before accepting the medical advice to stop. Through therapy on the platform and a career mentor who had transitioned into corporate work, Elena discovered that companies were desperate for her experience: someone who understood mental performance, resilience, and team dynamics from the inside. She now speaks at Fortune 500 companies across Europe.",
        keyTurningPoint: "A mentor told me: the boardroom is just another arena. Your skills translate perfectly — you just need a new vocabulary.",
        adviceToOthers: "Do not undersell yourself to employers. You have trained harder, managed more pressure, and recovered from more failure than 99% of the people in any room you walk into.",
        timeline: [
          { month: 1, event: "Final medical opinion — retire from tennis" },
          { month: 3, event: "Began therapy sessions on platform" },
          { month: 7, event: "Connected with corporate transition mentor" },
          { month: 11, event: "First keynote speech delivered" },
          { month: 18, event: "Full-time speaking and consulting career" },
          { month: 30, event: "Speaking across Europe to Fortune 500 companies" }
        ],
        tags: ["tennis", "elbow", "speaking", "corporate", "wellness"]
      }
    ],

    dailyTasks: [
      {
        id: "dt001", week: 1, day: 1,
        title: "5-Minute Breathing Reset",
        category: "Mindfulness", difficulty: "Easy", duration: "5 minutes",
        description: "Start your day with a simple 4-7-8 breathing exercise. Inhale for 4 counts, hold for 7, exhale for 8. Repeat 4 times. This activates your parasympathetic nervous system and reduces anxiety.",
        why: "Trauma keeps your nervous system in fight-or-flight. This breathing pattern signals safety to your brain.",
        icon: "🌬️", tags: ["breathing", "anxiety", "morning", "beginner"]
      },
      {
        id: "dt002", week: 1, day: 2,
        title: "Reach Out to One Person",
        category: "Social Connection", difficulty: "Medium", duration: "10 minutes",
        description: "Send a genuine message to one person you have not spoken to in a while. It does not have to be about your injury. Just reconnect.",
        why: "Social isolation is one of the fastest routes to depression after a career-ending injury. Small connections rebuild your world.",
        icon: "📱", tags: ["connection", "isolation", "social", "week1"]
      },
      {
        id: "dt003", week: 1, day: 3,
        title: "Watch One Recovery Story",
        category: "Inspiration", difficulty: "Easy", duration: "20 minutes",
        description: "Browse the motivational stories section and read one full story from an athlete who has been where you are. Take notes on one thing that resonates with you.",
        why: "Seeing that others have walked this road and found meaning on the other side is one of the most powerful anti-depression tools available.",
        icon: "🎥", tags: ["inspiration", "stories", "week1"]
      },
      {
        id: "dt004", week: 1, day: 4,
        title: "Go Outside for 15 Minutes",
        category: "Physical Wellbeing", difficulty: "Easy", duration: "15 minutes",
        description: "Leave your home for at least 15 minutes. Walk, sit in a park, stand in sunlight. No destination required. No performance required. Just exist outside your four walls.",
        why: "Natural light regulates cortisol and serotonin. Even short outdoor exposure has measurable effects on mood within 20 minutes.",
        icon: "🌤️", tags: ["outdoors", "mood", "physical", "week1"]
      },
      {
        id: "dt005", week: 1, day: 5,
        title: "Try One New Recipe",
        category: "Life Skills", difficulty: "Medium", duration: "45 minutes",
        description: "Cook one new recipe from scratch — ideally something nutritious. It does not have to be perfect. The goal is engagement, creativity, and nourishment.",
        why: "Learning a new skill activates the reward pathways in your brain. Cooking connects you with nourishment at a time when self-care can feel forced.",
        icon: "🍳", tags: ["cooking", "creativity", "self-care", "week1"]
      },
      {
        id: "dt006", week: 2, day: 1,
        title: "Create a Simple Daily Routine",
        category: "Structure", difficulty: "Medium", duration: "20 minutes",
        description: "Write out a simple daily schedule — wake time, meals, one productive task, one rest period, one social engagement. Pin it somewhere visible.",
        why: "Athletic careers provide relentless structure. Losing that structure is deeply disorienting. A simple routine rebuilds a sense of agency and control.",
        icon: "📋", tags: ["routine", "structure", "agency", "week2"]
      },
      {
        id: "dt007", week: 2, day: 2,
        title: "Post in the Community Forum",
        category: "Social Connection", difficulty: "Medium", duration: "15 minutes",
        description: "Write one honest post in the athlete community — it can be a question, a frustration, a win however small, or just a check-in. Leave a supportive reply to at least one other post.",
        why: "Giving support to others actually accelerates your own recovery. It rebuilds a sense of purpose and usefulness that injury strips away.",
        icon: "💬", tags: ["community", "connection", "purpose", "week2"]
      },
      {
        id: "dt008", week: 2, day: 3,
        title: "List 10 Things You Are Curious About",
        category: "Discovery", difficulty: "Easy", duration: "15 minutes",
        description: "Write 10 things you have always been curious about but never had time to explore during your athletic career. They can be topics, skills, places, people, subjects — anything.",
        why: "Curiosity is the engine of reinvention. This exercise maps the terrain of your post-sport identity without pressure.",
        icon: "🔍", tags: ["curiosity", "identity", "discovery", "week2"]
      },
      {
        id: "dt009", week: 3, day: 1,
        title: "Attend a Community Q&A Session",
        category: "Mentorship", difficulty: "Medium", duration: "60 minutes",
        description: "Join one of the live Q&A sessions with a former athlete mentor. Prepare at least one question in advance. Even if you do not speak, listening to others will resonate.",
        why: "Hearing a mentor speak in real time — someone who has genuinely been where you are — provides a form of hope that no article or video fully replicates.",
        icon: "🎤", tags: ["mentor", "community", "hope", "week3"]
      },
      {
        id: "dt010", week: 3, day: 2,
        title: "Explore One Career Path in Detail",
        category: "Career Exploration", difficulty: "Medium", duration: "30 minutes",
        description: "Go to the Career Opportunities section and read fully about one alternative career path that interests you. Research it online for 15 additional minutes. Note 3 things that intrigue you.",
        why: "Career exploration feels overwhelming when done in the abstract. Narrowing it to just one option for one session makes it feel manageable and real.",
        icon: "🚀", tags: ["career", "exploration", "research", "week3"]
      }
    ],

    moodTips: [
      {
        id: "mt001", moodScore: 1, moodLabel: "Very Low", emoji: "😢", color: "#ef4444",
        immediateActions: [
          "You do not have to do anything big today. Stay safe and be gentle with yourself.",
          "Try the 5-4-3-2-1 grounding exercise: name 5 things you see, 4 you can touch, 3 you hear.",
          "Send one message to someone you trust — even just 'I am having a hard day.'",
          "If feelings become overwhelming, reach out to our crisis support or a mental health line."
        ],
        affirmation: "This is the lowest you will feel. It does not stay here forever. You have survived every hard day so far.",
        suggestedTask: "dt001",
        crisisNote: true,
        crisisText: "If you are feeling like you may harm yourself, please contact a crisis line immediately. You matter deeply."
      },
      {
        id: "mt002", moodScore: 2, moodLabel: "Low", emoji: "😟", color: "#f97316",
        immediateActions: [
          "Acknowledge that today is hard without judging yourself for it.",
          "Do one very small task — make your bed, drink a glass of water, open a window.",
          "Read one entry from the motivational stories section.",
          "Try the breathing exercise for 5 minutes before doing anything else."
        ],
        affirmation: "Rough days are part of the road. They do not erase your progress. Tomorrow is a new check-in.",
        suggestedTask: "dt003",
        crisisNote: false
      },
      {
        id: "mt003", moodScore: 3, moodLabel: "Neutral", emoji: "😐", color: "#f59e0b",
        immediateActions: [
          "Neutral is actually a meaningful place — it means you are not at the bottom.",
          "Use this steady energy to complete one small productive task from your list.",
          "Check in with the community — read a few posts and leave one reply.",
          "Try your journal prompt for today."
        ],
        affirmation: "Steady is progress. Not every day needs to be a breakthrough. Consistency beats intensity in recovery.",
        suggestedTask: "dt007",
        crisisNote: false
      },
      {
        id: "mt004", moodScore: 4, moodLabel: "Good", emoji: "🙂", color: "#22c55e",
        immediateActions: [
          "Use this good energy well — it is precious. Do not waste it on scrolling.",
          "Tackle one task you have been avoiding — reach out, research a career, book a session.",
          "Share how you are feeling in the community. Your good day will lift someone else.",
          "Write a journal entry capturing what made today feel better."
        ],
        affirmation: "You earned this feeling. Notice it. Let it remind you what is possible.",
        suggestedTask: "dt008",
        crisisNote: false
      },
      {
        id: "mt005", moodScore: 5, moodLabel: "Great", emoji: "😊", color: "#3b82f6",
        immediateActions: [
          "This is a great day to take a meaningful step forward — book that mentor session, send that email.",
          "Write down in detail what contributed to feeling this way — you will want this record on harder days.",
          "Reach out to someone in the community who is struggling. Pay it forward.",
          "Celebrate this. You did not get here by accident."
        ],
        affirmation: "This is who you are becoming. This version of you is not a guest — it is moving in.",
        suggestedTask: "dt010",
        crisisNote: false
      }
    ]
  },

  // ══════════════════════════════════════════
  // 2. PHYSICAL SUPPORT
  // ══════════════════════════════════════════
  physicalSupport: {

    therapistProfiles: [
      {
        id: "pt001",
        name: "Dr. Sarah Mitchell",
        title: "Chartered Physiotherapist — Sports Rehabilitation Specialist",
        country: "United Kingdom", languages: ["English"],
        experience: 14,
        specializations: ["ACL & Knee Rehabilitation", "Post-surgical Recovery", "Return-to-Sport Assessment", "Chronic Pain Management"],
        qualifications: ["BSc Physiotherapy — University of Leeds", "MSc Sports Medicine — Loughborough University", "MCSP Chartered Member"],
        rating: 4.9, reviewCount: 312,
        sessionTypes: ["Video Consultation", "Asynchronous Plan Review", "Weekly Check-in Calls"],
        sessionPrice: 65, currency: "GBP",
        availability: "Mon–Fri, 9am–6pm GMT",
        shortBio: "14 years working with elite and amateur athletes across football, rugby, and athletics. Specializes in helping athletes navigate the emotional and physical complexity of career-ending knee injuries.",
        patientQuote: "Dr. Mitchell understood what I was going through before I even finished explaining. Her rehab plan was the first thing that actually made sense to my body.",
        tags: ["knee", "ACL", "surgery", "UK", "football", "rugby"]
      },
      {
        id: "pt002",
        name: "Dr. Arjun Mehta",
        title: "Sports Physiotherapist & Strength and Conditioning Coach",
        country: "India", languages: ["English", "Hindi", "Gujarati"],
        experience: 10,
        specializations: ["Spinal Injury Rehabilitation", "Shoulder & Rotator Cuff Recovery", "Neuromuscular Reconditioning", "Injury-Specific Nutrition Integration"],
        qualifications: ["BPT Physiotherapy — AIIMS Delhi", "Certified Strength & Conditioning Specialist (CSCS)", "NSCA Certified"],
        rating: 4.8, reviewCount: 248,
        sessionTypes: ["Video Consultation", "Program Design", "Monthly Progress Review"],
        sessionPrice: 1800, currency: "INR",
        availability: "Mon–Sat, 8am–8pm IST",
        shortBio: "Combines traditional physiotherapy with strength and conditioning methodology to help athletes rebuild functional capacity after career-altering injuries.",
        patientQuote: "He built my program around what I could do, not what I could no longer do. That mindset shift was everything.",
        tags: ["spine", "shoulder", "India", "strength", "conditioning"]
      },
      {
        id: "pt003",
        name: "Maria Santos",
        title: "Sports Rehabilitation Physiotherapist — Chronic Pain Specialist",
        country: "Brazil", languages: ["English", "Portuguese", "Spanish"],
        experience: 11,
        specializations: ["Chronic Pain Management", "Neurological Injury Recovery", "Aquatic Physiotherapy", "Psychological Aspects of Pain"],
        qualifications: ["Bachelor in Physiotherapy — USP São Paulo", "Postgraduate in Sports Physiotherapy", "Pain Science Certification — NOI Group"],
        rating: 4.9, reviewCount: 189,
        sessionTypes: ["Video Consultation", "Aquatic Therapy Guidance", "Pain Diary Review"],
        sessionPrice: 150, currency: "BRL",
        availability: "Tue–Sat, 7am–5pm BRT",
        shortBio: "Specialist in the intersection of chronic pain and the athlete's psychological experience of injury. Works holistically with the whole athlete — mind and body together.",
        patientQuote: "Maria helped me understand that my pain was real and valid, and gave me tools to manage it without feeling like a failure.",
        tags: ["chronic-pain", "neurology", "Brazil", "aquatic", "psychology"]
      },
      {
        id: "pt004",
        name: "James Okafor",
        title: "Elite Sports Physiotherapist — Orthopaedic Specialist",
        country: "Nigeria", languages: ["English", "Yoruba"],
        experience: 8,
        specializations: ["Orthopaedic Post-surgical Rehab", "Ankle & Foot Injuries", "Combat Sports Injuries", "Return-to-Activity Planning"],
        qualifications: ["BSc Physiotherapy — UNILAG", "MSc Orthopaedic Physiotherapy — University of Cape Town", "SASP Member"],
        rating: 4.7, reviewCount: 156,
        sessionTypes: ["Video Consultation", "Detailed Programme Design", "Fortnightly Reviews"],
        sessionPrice: 45, currency: "USD",
        availability: "Mon–Fri, 8am–5pm WAT",
        shortBio: "Works across West and South Africa with elite and grassroots athletes. Passionate about making quality rehabilitation accessible to athletes from all economic backgrounds.",
        patientQuote: "He gave me the same level of care I imagine professional athletes get, and I could actually afford it.",
        tags: ["orthopaedic", "ankle", "foot", "Africa", "combat", "accessible"]
      }
    ],

    exercisePrograms: [
      {
        id: "ep001",
        programName: "ACL Recovery — Phase 1: Acute Protection",
        targetInjury: "ACL Tear (Post-Surgery)",
        phase: 1, phaseName: "Acute Protection Phase",
        durationWeeks: 4, weeklyFrequency: "5 days per week",
        goal: "Reduce swelling, restore basic range of motion, prevent muscle atrophy",
        physioReviewRequired: true,
        exercises: [
          {
            id: "ex001", name: "Quad Sets",
            sets: 3, reps: 15, holdSeconds: 5, restSeconds: 30,
            description: "Lie flat on your back with your leg straight. Tighten your quadriceps muscle by pressing the back of your knee down toward the floor. Hold for 5 seconds, then release.",
            purpose: "Prevents quadriceps atrophy and maintains neural activation of the quad muscle.",
            warnings: ["Do not force through sharp pain", "Keep movement gentle and controlled"],
            icon: "🦵", difficulty: "Beginner"
          },
          {
            id: "ex002", name: "Heel Slides",
            sets: 3, reps: 15, holdSeconds: 0, restSeconds: 30,
            description: "Lie flat on your back. Slowly slide your heel toward your buttocks by bending your knee, then slide it back out. Keep the movement smooth and stop before pain begins.",
            purpose: "Restores knee flexion range of motion gently in the acute phase.",
            warnings: ["Stop at point of resistance — do not push through", "Keep the movement slow and controlled"],
            icon: "🦶", difficulty: "Beginner"
          },
          {
            id: "ex003", name: "Ankle Pumps",
            sets: 3, reps: 20, holdSeconds: 0, restSeconds: 20,
            description: "Lying or sitting, pump your foot up and down — toes toward you, then away. Can be done continuously throughout the day.",
            purpose: "Promotes circulation, reduces swelling, prevents blood clots post-surgery.",
            warnings: ["Can be done frequently — up to hourly"],
            icon: "🦶", difficulty: "Beginner"
          },
          {
            id: "ex004", name: "Straight Leg Raises",
            sets: 3, reps: 12, holdSeconds: 2, restSeconds: 45,
            description: "Lie flat on your back. Tighten your quad, then lift your straight leg to about 45 degrees. Hold briefly, then lower slowly.",
            purpose: "Strengthens quadriceps and hip flexors without stressing the knee joint.",
            warnings: ["Only begin when you can fully tighten the quad during a quad set"],
            icon: "🏋️", difficulty: "Beginner"
          }
        ],
        progressionCriteria: "Advance to Phase 2 when: swelling is minimal, full passive knee extension achieved, can perform SLR with quad control, and physio approval obtained."
      },
      {
        id: "ep002",
        programName: "Shoulder Recovery — Rotator Cuff Protocol Phase 1",
        targetInjury: "Rotator Cuff Tear / Post-Surgical Repair",
        phase: 1, phaseName: "Passive & Active-Assisted Range of Motion",
        durationWeeks: 6, weeklyFrequency: "Daily",
        goal: "Protect repaired tissue, restore pain-free passive movement, reduce inflammation",
        physioReviewRequired: true,
        exercises: [
          {
            id: "ex005", name: "Pendulum Swings",
            sets: 3, reps: 20, holdSeconds: 0, restSeconds: 30,
            description: "Lean forward and support yourself with your non-affected arm. Let the affected arm hang freely. Use gentle body movement to create small circular swings — clockwise and counter-clockwise.",
            purpose: "Uses gravity to gently mobilize the shoulder joint without muscle activation of the repair site.",
            warnings: ["Do not actively use the shoulder muscles — passive only", "Keep circles small initially"],
            icon: "🔄", difficulty: "Beginner"
          },
          {
            id: "ex006", name: "External Rotation with Towel Roll",
            sets: 3, reps: 10, holdSeconds: 3, restSeconds: 45,
            description: "Place a small rolled towel between your elbow and your side. With your elbow bent at 90 degrees, rotate your forearm outward. Return slowly.",
            purpose: "Begins gentle activation of the external rotators within a safe range.",
            warnings: ["Keep elbow tucked to your side throughout", "Stop at point of resistance"],
            icon: "💪", difficulty: "Beginner-Intermediate"
          }
        ],
        progressionCriteria: "Advance to Phase 2 when: pain-free passive range of motion achieved in all planes, minimal swelling, surgeon clearance for active movement."
      },
      {
        id: "ep003",
        programName: "Spinal Injury — Gentle Core Stabilization Phase 1",
        targetInjury: "Lumbar Stress Fracture / Disc Injury (Conservative Management)",
        phase: 1, phaseName: "Pain Management & Gentle Activation",
        durationWeeks: 6, weeklyFrequency: "5 days per week",
        goal: "Reduce pain, activate deep spinal stabilizers, restore pain-free daily function",
        physioReviewRequired: true,
        exercises: [
          {
            id: "ex007", name: "Diaphragmatic Breathing",
            sets: 3, reps: 10, holdSeconds: 5, restSeconds: 30,
            description: "Lie on your back with knees bent. Place one hand on your chest, one on your belly. Breathe deeply so only your belly hand rises. Hold at full breath for 5 counts, exhale slowly.",
            purpose: "Activates the diaphragm and deep core system. Forms the foundation of all spinal stability.",
            warnings: ["Never hold breath to the point of discomfort", "Stop if dizziness occurs"],
            icon: "🌬️", difficulty: "Beginner"
          },
          {
            id: "ex008", name: "Pelvic Tilts",
            sets: 3, reps: 15, holdSeconds: 3, restSeconds: 30,
            description: "Lie on your back with knees bent. Gently flatten your lower back against the floor by tightening your abdominals. Hold 3 seconds. Release to neutral.",
            purpose: "Teaches neutral spine awareness and gently activates the lumbar stabilizers.",
            warnings: ["Never force the movement", "Stop if lower back pain increases"],
            icon: "⬇️", difficulty: "Beginner"
          }
        ],
        progressionCriteria: "Advance to Phase 2 when: daily activities pain-free, able to maintain neutral spine during all Phase 1 exercises, physiotherapist clearance."
      }
    ],

    nutritionPlans: [
      {
        id: "np001",
        planName: "Post-Surgery Anti-Inflammatory Recovery Plan",
        targetPhase: "Acute Post-Surgical (Weeks 1–6)",
        targetInjuries: ["ACL", "Rotator Cuff", "Any post-operative recovery"],
        nutritionistName: "Asha Patel",
        qualifications: ["MSc Sports Nutrition — Loughborough University", "Registered Dietitian (RD)"],
        caloricGuidance: "Reduce overall caloric intake by approximately 20–25% from athletic baseline due to reduced activity, but do not aggressively restrict — healing tissue requires energy.",
        keyNutrients: [
          { nutrient: "Protein", dailyTarget: "1.6–2.0g per kg of bodyweight", purpose: "Tissue repair and prevention of muscle atrophy during immobilization", sources: ["Chicken breast", "Greek yoghurt", "Eggs", "Lentils", "Salmon", "Whey protein"] },
          { nutrient: "Omega-3 Fatty Acids", dailyTarget: "3–4g EPA/DHA daily", purpose: "Potent anti-inflammatory effect — reduces swelling and speeds healing", sources: ["Fatty fish (salmon, mackerel, sardines)", "Walnuts", "Flaxseeds", "High-quality fish oil supplement"] },
          { nutrient: "Vitamin C", dailyTarget: "500–1000mg daily", purpose: "Essential for collagen synthesis — the primary structural protein in tendons, ligaments, and cartilage", sources: ["Bell peppers", "Kiwi", "Citrus fruits", "Broccoli", "Strawberries"] },
          { nutrient: "Zinc", dailyTarget: "15–25mg daily", purpose: "Supports immune function and wound healing post-surgery", sources: ["Pumpkin seeds", "Beef", "Lentils", "Chickpeas", "Cashews"] },
          { nutrient: "Collagen Peptides", dailyTarget: "10–15g daily (taken 30–60 min before therapy)", purpose: "Supports tendon and ligament healing when combined with Vitamin C", sources: ["Collagen supplement powder", "Bone broth"] }
        ],
        sampleDayMealPlan: [
          { meal: "Breakfast", time: "7:30am", example: "3 scrambled eggs with spinach and tomatoes on wholegrain toast. Glass of orange juice.", proteinG: 28, notes: "Take collagen supplement with orange juice 30 min before any physiotherapy session." },
          { meal: "Mid-Morning Snack", time: "10:30am", example: "Greek yoghurt (200g) with a handful of walnuts and mixed berries.", proteinG: 18, notes: "High protein, omega-3s from walnuts, antioxidants from berries." },
          { meal: "Lunch", time: "1:00pm", example: "Salmon fillet with sweet potato and steamed broccoli. Drizzle of olive oil.", proteinG: 35, notes: "Salmon is the single best food for recovery — omega-3s, protein, and Vitamin D in one serving." },
          { meal: "Afternoon Snack", time: "4:00pm", example: "Handful of mixed nuts and seeds with a kiwi.", proteinG: 10, notes: "Zinc from pumpkin seeds, Vitamin C from kiwi — powerful healing combination." },
          { meal: "Dinner", time: "7:00pm", example: "Chicken breast with lentil curry and brown rice. Side salad with olive oil dressing.", proteinG: 40, notes: "Lentils provide zinc, iron, and plant protein. Turmeric in curry has anti-inflammatory properties." }
        ],
        foodsToAvoid: [
          { food: "Processed sugar", reason: "Pro-inflammatory — actively slows healing and increases swelling" },
          { food: "Alcohol", reason: "Significantly impairs healing, disrupts sleep, interferes with medication" },
          { food: "Trans fats (fast food, packaged snacks)", reason: "Pro-inflammatory and counteracts omega-3 benefits" },
          { food: "Refined carbohydrates", reason: "Spike blood sugar and promote inflammation" }
        ],
        hydrationGuidance: "Aim for 2.5–3 litres of water daily. Dehydration impairs nutrient delivery to healing tissue and slows recovery.",
        supplementSummary: ["Fish oil 3–4g EPA/DHA", "Vitamin D3 2000–4000 IU", "Vitamin C 500mg with collagen", "Collagen peptides 10–15g pre-therapy"]
      }
    ]
  },

  // ══════════════════════════════════════════
  // 3. CAREER OPPORTUNITIES
  // ══════════════════════════════════════════
  careerOpportunities: {

    careerPaths: [
      {
        id: "cp001", title: "Sports Academy Founder", emoji: "🏫",
        category: "Entrepreneurship", difficulty: "High",
        timeToLaunch: "12–24 months",
        potentialIncome: "$20,000–$200,000+ annually depending on scale",
        shortDescription: "Build and run a training academy in your sport for youth or adult athletes. Combine your expertise with entrepreneurship.",
        fullDescription: "As a former athlete, your knowledge of your sport is your most valuable business asset. A sports academy allows you to codify that knowledge into a structured learning environment, employ other coaches, and create a legacy in your community.",
        athleteStrengthsUsed: ["Deep technical sport knowledge", "Understanding of coaching methodology", "Credibility with athletes and parents", "Discipline and structured thinking", "Network within the sport"],
        stepByStepRoadmap: [
          { step: 1, action: "Get certified as a coach through your national governing body", timeline: "Months 1–3" },
          { step: 2, action: "Run a small informal training group (5–10 athletes) to test your coaching", timeline: "Months 3–6" },
          { step: 3, action: "Register your business and open a basic bank account", timeline: "Month 6" },
          { step: 4, action: "Partner with a local school or sports club for venue access", timeline: "Months 6–9" },
          { step: 5, action: "Build a simple website and social media presence", timeline: "Month 8" },
          { step: 6, action: "Launch officially with a defined program structure and pricing", timeline: "Month 12" },
          { step: 7, action: "Hire first additional coach and expand program offerings", timeline: "Month 18–24" }
        ],
        tags: ["academy", "coaching", "entrepreneurship", "youth", "sport"]
      },
      {
        id: "cp002", title: "Podcast Host & Content Creator", emoji: "🎙️",
        category: "Media", difficulty: "Medium",
        timeToLaunch: "1–3 months",
        potentialIncome: "$0–$100,000+ annually (highly variable, dependent on audience)",
        shortDescription: "Use your authentic athlete voice and insider knowledge to build a media platform that resonates with athletes, fans, and sports professionals.",
        fullDescription: "The most compelling sports content comes from people who have actually lived it. Your experience as an athlete — including the injury and the comeback — is compelling content. Podcasting is low-cost to start and can generate income through sponsorships and brand partnerships.",
        athleteStrengthsUsed: ["Authentic lived experience", "Network of athlete contacts for guests", "Deep sport knowledge", "Credibility with athlete audiences", "Storytelling ability"],
        stepByStepRoadmap: [
          { step: 1, action: "Define your niche — athlete mental health? sport transition? injury recovery?", timeline: "Week 1" },
          { step: 2, action: "Buy basic equipment: USB microphone ($50–$100), use free Audacity software", timeline: "Week 2" },
          { step: 3, action: "Record your first 3 episodes before launching — have a backlog ready", timeline: "Weeks 2–4" },
          { step: 4, action: "Upload to a podcast host (Anchor/Spotify is free)", timeline: "Month 1" },
          { step: 5, action: "Promote consistently on Instagram or TikTok using short clips", timeline: "Month 1 onwards" },
          { step: 6, action: "Reach out to 3 former athlete contacts to be early guests", timeline: "Month 2" },
          { step: 7, action: "Apply for sponsorships once you reach 1,000 consistent listeners per episode", timeline: "Month 6–12" }
        ],
        tags: ["podcast", "media", "content", "audio", "storytelling"]
      },
      {
        id: "cp003", title: "Sportswear & Equipment Entrepreneur", emoji: "👟",
        category: "Entrepreneurship", difficulty: "High",
        timeToLaunch: "12–18 months",
        potentialIncome: "Variable — $0 to multi-million depending on scale and funding",
        shortDescription: "Launch a sport-specific product brand — apparel, gear, or accessories — built on your authentic athlete knowledge and personal credibility.",
        fullDescription: "Athletes understand what gear and equipment actually needs to do — because they have worn, used, and depended on it at the highest level. That insider knowledge is incredibly valuable and largely absent from most product companies.",
        athleteStrengthsUsed: ["Deep product knowledge from years of use", "Personal credibility and public profile", "Understanding of athlete needs and pain points", "Network for early adopters and feedback"],
        stepByStepRoadmap: [
          { step: 1, action: "Identify the specific product gap your athletic experience reveals", timeline: "Month 1" },
          { step: 2, action: "Research manufacturers and suppliers via Alibaba or local producers", timeline: "Months 1–3" },
          { step: 3, action: "Build your brand identity — name, logo, values, story. Your athlete story IS the brand.", timeline: "Month 2–3" },
          { step: 4, action: "Create a simple Shopify or WooCommerce store", timeline: "Month 3–4" },
          { step: 5, action: "Order a small initial batch (50–200 units) to test demand", timeline: "Month 4–6" },
          { step: 6, action: "Give product to athlete contacts for authentic review and social proof", timeline: "Month 6" },
          { step: 7, action: "Launch with a pre-order campaign to your network and on social media", timeline: "Month 8–12" }
        ],
        tags: ["sportswear", "brand", "product", "ecommerce", "entrepreneurship"]
      },
      {
        id: "cp004", title: "Sports Journalist & Writer", emoji: "📰",
        category: "Media", difficulty: "Medium",
        timeToLaunch: "3–12 months",
        potentialIncome: "$25,000–$80,000 annually (freelance to staff)",
        shortDescription: "Translate your insider knowledge of sport into compelling journalism, commentary, analysis, and storytelling for publications or your own platform.",
        fullDescription: "Sports journalism is one of the most natural transitions for former athletes because the raw material — deep sport knowledge, authentic perspective — is already there. What usually needs development is the writing craft and understanding of editorial processes.",
        athleteStrengthsUsed: ["Technical sport understanding far beyond what most journalists have", "Insider access to athlete networks", "Ability to write from lived experience", "Credibility with sport audiences"],
        stepByStepRoadmap: [
          { step: 1, action: "Start writing — launch a free Substack newsletter or Medium blog about your sport", timeline: "Month 1" },
          { step: 2, action: "Write consistently — 2–3 pieces per week. Build a portfolio of at least 15 pieces before pitching", timeline: "Months 1–3" },
          { step: 3, action: "Identify 5 sports publications that accept freelance contributions and study their style", timeline: "Month 2" },
          { step: 4, action: "Pitch your first article — lead with your athlete credentials and unique angle", timeline: "Month 3" },
          { step: 5, action: "Build relationships with editors — respond promptly, meet all deadlines", timeline: "Ongoing" },
          { step: 6, action: "Grow your social media following around your sports writing", timeline: "Month 3 onwards" },
          { step: 7, action: "Apply for staff roles or build a large enough freelance client base", timeline: "Month 9–18" }
        ],
        tags: ["journalism", "writing", "media", "broadcasting", "analysis"]
      },
      {
        id: "cp005", title: "Motivational Speaker & Corporate Wellness Consultant", emoji: "🎤",
        category: "Professional Services", difficulty: "Medium-High",
        timeToLaunch: "6–12 months",
        potentialIncome: "$1,000–$20,000 per speaking engagement depending on profile",
        shortDescription: "Bring the athlete's mindset — resilience, high performance, team dynamics — to the corporate world through keynote speaking and consulting.",
        fullDescription: "Companies are increasingly seeking speakers who can inspire their teams with authentic stories of real-world high performance and adversity. Athletes who have navigated career-ending injuries have something rare: a genuine story of loss, reinvention, and resilience.",
        athleteStrengthsUsed: ["Authentic high-stakes performance experience", "Credibility as a former professional or elite athlete", "Public performance experience", "Genuine adversity narrative", "Understanding of team dynamics and leadership"],
        stepByStepRoadmap: [
          { step: 1, action: "Write and rehearse your core keynote story — 20–30 minutes covering your career, injury, and reinvention", timeline: "Month 1–2" },
          { step: 2, action: "Deliver your talk for free at schools, charities, and sports clubs to get video footage", timeline: "Month 2–4" },
          { step: 3, action: "Create a professional speaker one-pager with your bio, talk topics, and audience benefits", timeline: "Month 3" },
          { step: 4, action: "Build a simple website or page showcasing your speaking reel and testimonials", timeline: "Month 4" },
          { step: 5, action: "Reach out directly to HR managers and event organizers at companies — small companies first", timeline: "Month 5 onwards" },
          { step: 6, action: "Join a speakers bureau once you have 5+ paid engagements and strong video testimonials", timeline: "Month 12–18" }
        ],
        tags: ["speaking", "corporate", "resilience", "keynote", "wellness"]
      },
      {
        id: "cp006", title: "Professional Coach or Team Manager", emoji: "🏆",
        category: "Sport-Adjacent", difficulty: "Medium",
        timeToLaunch: "6–18 months",
        potentialIncome: "$30,000–$300,000+ depending on level and sport",
        shortDescription: "Stay connected to the sport you love from a leadership seat — developing and inspiring the next generation of athletes.",
        fullDescription: "Coaching is perhaps the most natural extension of an athletic career. Your technical knowledge, experience of competition pressure, and understanding of team dynamics give you a head start that most coaching courses cannot teach.",
        athleteStrengthsUsed: ["Technical sport expertise", "Understanding of performance under pressure", "Ability to relate to athletes at a personal level", "Team dynamics and leadership experience", "Competitive experience and tactical knowledge"],
        stepByStepRoadmap: [
          { step: 1, action: "Register for your sport's national Level 1 coaching qualification", timeline: "Month 1" },
          { step: 2, action: "Volunteer as an assistant coach at a local club while you certify", timeline: "Month 1–3" },
          { step: 3, action: "Complete Level 1 and begin applying for paid assistant coaching roles", timeline: "Month 3–6" },
          { step: 4, action: "Enrol in Level 2 to qualify for head coaching positions", timeline: "Month 6–12" },
          { step: 5, action: "Build your coaching CV with documented outcomes", timeline: "Ongoing" },
          { step: 6, action: "Apply for head coach or team manager roles at progressively higher levels", timeline: "Month 12–18" }
        ],
        tags: ["coaching", "management", "sport", "leadership", "technical"]
      }
    ],

    mentorProfiles: [
      {
        id: "cm001", name: "Terrence Blake",
        formerSport: "Professional Basketball (NBA)",
        injury: "Achilles Tendon Rupture — Retired at 31",
        currentRole: "Serial Entrepreneur — 3 successful businesses",
        yearsPostCareer: 7,
        mentorSpecialties: ["Entrepreneurship", "Brand Building", "Mindset Shift from Athlete to Business Owner", "Financial Planning Post-Career"],
        shortBio: "Played 8 seasons in the NBA before a catastrophic Achilles rupture ended his career at 31. After two years of struggle, he launched three businesses including a sports nutrition brand and a chain of sports performance centers.",
        sessionTypes: ["1-on-1 Career Strategy Sessions", "Group Q&A (Monthly)", "Email Mentorship (async)"],
        sessionDuration: 60, sessionPrice: 120, currency: "USD",
        availability: "Tuesday & Thursday, 10am–4pm EST",
        languages: ["English"],
        rating: 4.95, reviewCount: 87,
        menteeQuote: "Terrence helped me see that I had been running a high-performance machine for a decade — I just needed to redirect it.",
        tags: ["basketball", "entrepreneurship", "brand", "business", "NBA"]
      },
      {
        id: "cm002", name: "Fatima Al-Hassan",
        formerSport: "Professional Athletics — 800m & 1500m",
        injury: "Stress Fractures — Multiple Recurrences",
        currentRole: "Sports Journalist — Major International Broadcaster",
        yearsPostCareer: 5,
        mentorSpecialties: ["Sports Journalism", "Broadcast Media", "Storytelling", "Building Media Profile", "Writing Development"],
        shortBio: "Ranked in the world's top 20 in the 1500m when recurring stress fractures forced her retirement at 27. She began writing about her recovery, which led to a column, then a broadcast role at an international sports broadcaster.",
        sessionTypes: ["1-on-1 Writing & Pitch Reviews", "Portfolio Development Mentorship", "Career Strategy Sessions"],
        sessionDuration: 45, sessionPrice: 80, currency: "USD",
        availability: "Mon, Wed, Fri — 9am–1pm GMT",
        languages: ["English", "Arabic"],
        rating: 4.9, reviewCount: 63,
        menteeQuote: "She read my first piece and told me exactly what was wrong and exactly how to fix it. Within 6 months I had my first byline.",
        tags: ["athletics", "journalism", "media", "writing", "broadcasting"]
      },
      {
        id: "cm003", name: "Carlos Mendes",
        formerSport: "Professional Football (Brazil)",
        injury: "Cruciate Ligament & Cartilage Damage — Career Ended at 28",
        currentRole: "Licensed Football Coach — Managing national youth team",
        yearsPostCareer: 9,
        mentorSpecialties: ["Transition to Coaching", "Coaching Methodology", "Dealing with Identity Loss", "Building Coaching Career from Scratch"],
        shortBio: "Played professionally in Brazil and Portugal before bilateral knee damage forced his retirement at 28. Within 5 years he was managing youth national team programs.",
        sessionTypes: ["1-on-1 Coaching Career Planning", "Coaching Methodology Sessions", "Group Mentorship for Former Athletes"],
        sessionDuration: 60, sessionPrice: 90, currency: "USD",
        availability: "Mon–Fri, 8am–12pm BRT",
        languages: ["English", "Portuguese", "Spanish"],
        rating: 4.88, reviewCount: 104,
        menteeQuote: "Carlos understood my grief before he talked about careers. That mattered. He was not rushing me — he was helping me grieve first.",
        tags: ["football", "coaching", "management", "identity", "Brazil"]
      },
      {
        id: "cm004", name: "Dr. Lin Wei",
        formerSport: "Professional Badminton — International Level",
        injury: "Severe Wrist Fracture & Ligament Damage — Retired at 25",
        currentRole: "Corporate Wellness Director & Keynote Speaker",
        yearsPostCareer: 6,
        mentorSpecialties: ["Corporate World Transition", "Keynote Speaking Development", "Personal Branding", "Wellness Industry"],
        shortBio: "Represented her country in international badminton before wrist injuries ended her career suddenly at 25. Now directs wellness programs for Fortune 500 companies in Asia and speaks globally.",
        sessionTypes: ["Personal Branding Strategy Sessions", "Speaker Development Coaching", "Corporate Transition Planning"],
        sessionDuration: 60, sessionPrice: 110, currency: "USD",
        availability: "Mon–Thu, 9am–5pm SGT",
        languages: ["English", "Mandarin", "Cantonese"],
        rating: 4.92, reviewCount: 71,
        menteeQuote: "Lin transformed how I saw myself — from a retired athlete to a high-performance professional. The skills were always there. She helped me package them.",
        tags: ["badminton", "corporate", "speaking", "wellness", "Asia"]
      }
    ],

    skillsMapping: [
      { id: "sm001", athleticSkill: "Years of Disciplined Daily Training", professionalTranslation: "Project Management & Self-Directed Work Ethic", description: "Athletes execute complex, multi-year training programs with daily consistency. This translates directly to managing long-term projects and performing without constant supervision.", industries: ["Business Operations", "Consulting", "Technology", "Finance"], icon: "⏰" },
      { id: "sm002", athleticSkill: "Competition Under Extreme Pressure", professionalTranslation: "High-Stakes Decision Making & Performance Under Stress", description: "Athletes have performed in front of crowds with enormous stakes. This translates to the ability to make clear decisions, present confidently, and perform during business-critical moments.", industries: ["Sales", "Law", "Finance", "Executive Leadership", "Public Relations"], icon: "🎯" },
      { id: "sm003", athleticSkill: "Team Cohesion & Communication", professionalTranslation: "Team Leadership, Collaboration & Interpersonal Communication", description: "Team sports athletes have navigated complex group dynamics, conflict resolution, and communication under pressure.", industries: ["Human Resources", "Management", "Team Leadership", "Consulting"], icon: "👥" },
      { id: "sm004", athleticSkill: "Tactical Analysis & Strategy", professionalTranslation: "Strategic Thinking, Data Analysis & Competitive Intelligence", description: "Athletes analyze opponents, study performance data, and adjust strategy in real time. This maps directly to competitive market analysis and business strategy.", industries: ["Strategy Consulting", "Data Analysis", "Marketing", "Business Development"], icon: "♟️" },
      { id: "sm005", athleticSkill: "Recovery from Setbacks & Failure", professionalTranslation: "Resilience, Change Management & Leadership Through Adversity", description: "Every athlete has experienced injury, defeat, and rejection. The ability to process failure and return stronger is one of the most sought-after qualities in organizational leadership.", industries: ["Executive Leadership", "Entrepreneurship", "Change Management", "Crisis Management"], icon: "💪" },
      { id: "sm006", athleticSkill: "Public Performance & Media Experience", professionalTranslation: "Public Speaking, Media Relations & Personal Branding", description: "Athletes who have competed publicly have dealt with interviews, press conferences, and public scrutiny. This translates directly to executive communication and brand representation.", industries: ["Communications", "PR", "Speaking", "Media", "Marketing"], icon: "🎤" }
    ]
  },

  // ══════════════════════════════════════════
  // 4. COMMUNITY
  // ══════════════════════════════════════════
  community: {

    testimonials: [
      {
        id: "tm001", name: "James M.", initials: "JM",
        sport: "Professional Football", injury: "ACL Tear (3rd recurrence)",
        country: "England", age: 28,
        platformFeatureUsed: "Mentor Matching + Community",
        shortQuote: "I thought my life was over when I tore my ACL for the third time. Beyond The Game connected me with a former footballer who had been through the same thing. That conversation changed everything.",
        fullTestimonial: "I found Beyond The Game at 2am on the worst night of my recovery. I started with the anonymous chat because I could not bear to put my name to what I was feeling. Within a week I was in the community. Within a month I had my first mentor session with a former Premier League player who had lived the exact same thing. He did not rush me. He just sat in it with me for a while. That mattered more than anything.",
        outcome: "Now coaching a local youth team and studying for his UEFA B coaching license",
        rating: 5,
        tags: ["football", "ACL", "mentor", "community", "England"]
      },
      {
        id: "tm002", name: "Sara P.", initials: "SP",
        sport: "Competitive Swimming", injury: "Rotator Cuff Rupture",
        country: "Australia", age: 24,
        platformFeatureUsed: "Daily Mood Tracking + Therapist Connection",
        shortQuote: "The mood tracker showed me I was actually getting better — even on days it did not feel like it. Seeing that weekly chart was more motivating than anything anyone said to me.",
        fullTestimonial: "The mood tracker felt like a gimmick at first. But after 3 weeks of logging I looked at my chart and realized — objectively — that I was trending upward. My therapist used that chart in our sessions. It became proof that I was healing even when I could not feel it. That objective evidence was more powerful than anything subjective anyone told me.",
        outcome: "Now working in sports psychology and completing her psychology degree",
        rating: 5,
        tags: ["swimming", "shoulder", "mood-tracking", "therapy", "Australia"]
      },
      {
        id: "tm003", name: "Ravi K.", initials: "RK",
        sport: "Track Athletics", injury: "Spinal Stress Fracture",
        country: "India", age: 31,
        platformFeatureUsed: "Career Mentorship + Journal Prompts",
        shortQuote: "I launched my sports academy 18 months after my career ended. Beyond The Game's career mentor showed me how to turn my knowledge into a business. I now coach 200 kids.",
        fullTestimonial: "The journal prompt that asked 'what is your athletic knowledge worth as a business?' stopped me completely. I had never thought about it that way. I had been thinking about what I lost, not what I still had. My career mentor helped me map out the academy idea step by step. Without Beyond The Game, I would have taken any job just to survive. Instead I built something that is actually mine.",
        outcome: "Founder of an athletics training academy in Bangalore serving 200+ youth athletes",
        rating: 5,
        tags: ["athletics", "spinal", "career", "entrepreneurship", "India"]
      },
      {
        id: "tm004", name: "Nia W.", initials: "NW",
        sport: "Professional Netball", injury: "Knee Reconstruction + Nerve Damage",
        country: "New Zealand", age: 26,
        platformFeatureUsed: "Injury Sports Circle + Daily Tasks",
        shortQuote: "The Injury Sports Circle was the first time I felt like someone actually understood. Not just people saying the right things — people who had genuinely lived it.",
        fullTestimonial: "What Beyond The Game gave me that nothing else could was a specific community. Not a general mental health forum where I had to explain what an elite athlete's life looks like. A circle of people who had been competitive athletes, who had experienced injury, who understood the specific grief. The daily tasks felt small but they added up. Six months later I barely recognise the person I was at month one.",
        outcome: "Pursuing a career in sport management and volunteer coaching at a local netball club",
        rating: 5,
        tags: ["netball", "knee", "community", "daily-tasks", "New Zealand"]
      },
      {
        id: "tm005", name: "Daniel F.", initials: "DF",
        sport: "Professional Cycling", injury: "Traumatic Brain Injury from Race Crash",
        country: "France", age: 33,
        platformFeatureUsed: "Therapist Connection + Anonymous Chat",
        shortQuote: "My injury left me with cognitive symptoms that made me feel like I was losing myself, not just my career. The therapist on this platform was the first person who truly understood both dimensions.",
        fullTestimonial: "My injury was not visible like a knee brace — which made it harder for others to understand. The therapist I was matched with specialized in neurological trauma and sport identity. That combination barely exists. The anonymous chat was vital in the early days when I was too proud and too confused to speak to anyone with my name attached.",
        outcome: "Now working in cycling technology development and advocacy for athlete brain injury awareness",
        rating: 5,
        tags: ["cycling", "brain-injury", "therapy", "anonymous-chat", "France"]
      }
    ],

    sportsCircles: [
      { id: "sc001", name: "Football Injury Recovery Circle", emoji: "⚽", sport: "Football (Soccer)", memberCount: 2847, focusAreas: ["ACL & Knee Injuries", "Ankle Ligament Damage", "Hamstring & Muscle Tears", "Career Transition from Football"], description: "The largest sports-specific circle on Beyond The Game. A community of current and former footballers navigating injury recovery and life beyond the pitch.", weeklyEvents: ["Monday: Motivational Story Share", "Wednesday: Ask a Former Pro (live Q&A)", "Friday: Weekly Check-In & Progress Share"], tags: ["football", "ACL", "knee", "career"] },
      { id: "sc002", name: "Swimming & Aquatic Sports Recovery", emoji: "🏊", sport: "Swimming / Water Polo / Diving", memberCount: 1203, focusAreas: ["Shoulder & Rotator Cuff Injuries", "Overuse Syndromes", "Spine & Back Injuries", "Identity after Swimming Career"], description: "For swimmers, water polo players, and divers navigating the unique psychological challenge of a sport whose physical demands almost guarantee overuse injuries.", weeklyEvents: ["Tuesday: Shoulder Recovery Tips Shared", "Thursday: Career Paths for Former Swimmers", "Sunday: Weekly Emotional Check-In"], tags: ["swimming", "shoulder", "overuse", "aquatic"] },
      { id: "sc003", name: "Track & Field Athletes Circle", emoji: "🏃", sport: "Athletics", memberCount: 987, focusAreas: ["Stress Fractures", "Achilles & Tendon Injuries", "Hamstring Tears", "Post-Career Identity for Solo Sport Athletes"], description: "Individual sport athletes face a unique psychological challenge — the absence of a team to grieve with. This circle provides that community explicitly.", weeklyEvents: ["Monday: Injury Type Discussion Thread", "Friday: Career Opportunities for Former Athletes"], tags: ["athletics", "track", "field", "stress-fracture"] },
      { id: "sc004", name: "Combat Sports Recovery Circle", emoji: "🥊", sport: "Boxing / MMA / Wrestling / Judo", memberCount: 754, focusAreas: ["Head & Brain Injuries", "Joint & Ligament Damage", "Chronic Pain", "Transitioning out of Combat Sport Culture"], description: "Combat sport athletes carry specific psychological burdens — a culture of extreme toughness, stigma around vulnerability, and often invisible injuries.", weeklyEvents: ["Wednesday: Open Mental Health Discussion", "Saturday: Career Alternative Showcase"], tags: ["boxing", "MMA", "wrestling", "judo", "combat"] },
      { id: "sc005", name: "Basketball & Court Sports Recovery", emoji: "🏀", sport: "Basketball / Volleyball / Handball", memberCount: 1456, focusAreas: ["ACL & Knee Injuries", "Achilles Ruptures", "Ankle Injuries", "Financial Recovery Post-Contract End"], description: "For court sport athletes who face some of the highest rates of career-ending knee and ankle injuries. Practical and emotionally supportive.", weeklyEvents: ["Tuesday: Financial Planning for Former Athletes", "Thursday: Mentor Spotlight Session"], tags: ["basketball", "volleyball", "handball", "ACL"] },
      { id: "sc006", name: "Youth & Student Athlete Circle", emoji: "🎓", sport: "All Sports", memberCount: 2134, focusAreas: ["Balancing Recovery with Education", "Scholarship Loss After Injury", "Identity When Sport Ends Young", "Career Pathways for Young Former Athletes"], description: "For athletes under 25 whose careers ended early — before they had built significant financial resources or alternative qualifications.", weeklyEvents: ["Monday: Education & Scholarship Resources Thread", "Wednesday: Young Former Athlete Career Stories", "Friday: Peer Support Open Forum"], tags: ["youth", "student", "scholarship", "education"] },
      { id: "sc007", name: "Tennis & Racket Sports Circle", emoji: "🎾", sport: "Tennis / Badminton / Squash", memberCount: 632, focusAreas: ["Wrist & Elbow Injuries", "Shoulder Injuries", "Mental Burnout in Individual Sports", "Solo Athlete Career Transition"], description: "Racket sport athletes face some of the highest rates of chronic wrist, elbow, and shoulder injuries. This circle combines physical recovery with psychological support.", weeklyEvents: ["Tuesday: Injury Management Discussion", "Thursday: Media & Business Paths for Former Racket Sport Athletes"], tags: ["tennis", "badminton", "squash", "wrist", "elbow"] },
      { id: "sc008", name: "Cycling & Endurance Sports Recovery", emoji: "🚴", sport: "Cycling / Triathlon / Marathon Running", memberCount: 891, focusAreas: ["Traumatic Crash Injuries", "Overuse & Endurance-Related Injuries", "Brain & Head Trauma", "Transitioning from Extreme Endurance Lifestyle"], description: "Endurance athletes live extreme lifestyles — their training volumes and crash risks are among the highest in sport. This circle supports recovery from both physical injuries and identity disruption.", weeklyEvents: ["Monday: Recovery Progress Share", "Friday: Career & Lifestyle After Endurance Sport"], tags: ["cycling", "triathlon", "marathon", "running", "crash"] }
    ],

    forumPosts: [
      { id: "fp001", circleId: "sc001", authorInitials: "JM", authorSport: "Football", authorCountry: "England", timestamp: "2 hours ago", title: "6 months post-ACL — finally had a good week", content: "I know this sounds small but I want to share it because I know how many of you are in the early stages. This week I: went outside every day, cooked two proper meals, went to one community Q&A, and booked my first mentor session. Six months ago I could not get off the sofa. Progress is real. It is slow. But it is real.", likes: 87, replies: 23, tags: ["ACL", "progress", "milestone", "hope"], isPinned: false },
      { id: "fp002", circleId: "sc002", authorInitials: "SP", authorSport: "Swimming", authorCountry: "Australia", timestamp: "Yesterday", title: "For anyone who feels like they do not have a personality outside their sport", content: "I have been thinking about this a lot. My sport consumed me from age 8 to 24. 16 years. I genuinely did not know who I was without it. What I discovered — slowly, painfully — is that the person I am was always there. I was just too busy training to meet them. If you feel like you have no identity right now: that is not true. You just have not had time to discover it yet. Be patient.", likes: 142, replies: 38, tags: ["identity", "recovery", "hope", "swimming"], isPinned: true },
      { id: "fp003", circleId: "sc006", authorInitials: "NW", authorSport: "Netball", authorCountry: "New Zealand", timestamp: "3 days ago", title: "Lost my sports scholarship because of my injury — does anyone have advice?", content: "I am 22 and my scholarship was my only path to university. Now that I am injured my college has withdrawn it. I feel completely lost — academically and athletically. Has anyone else navigated this? What are the options?", likes: 31, replies: 19, tags: ["scholarship", "student", "financial", "help-needed"], isPinned: false },
      { id: "fp004", circleId: "sc004", authorInitials: "DF", authorSport: "MMA", authorCountry: "USA", timestamp: "5 days ago", title: "How do you tell people in combat sports that you are struggling mentally?", content: "The culture I come from does not allow for this conversation. Weakness is career death in my sport. Even now that my career is over, the people around me still see mental health talk as something to be ashamed of. Has anyone figured out how to navigate this? How did you start talking?", likes: 98, replies: 44, tags: ["combat-sports", "mental-health", "stigma", "culture"], isPinned: false },
      { id: "fp005", circleId: "sc001", authorInitials: "RK", authorSport: "Athletics", authorCountry: "India", timestamp: "1 week ago", title: "I opened my sports academy — here is exactly how I did it", content: "12 months ago I was on this forum asking for help. Today I want to give it. I opened my athletics academy last month. It is small — 30 kids — but it is mine. I want to document every step I took so that others can follow the same path. Step 1 was the hardest: accepting that my knowledge still had value even if my body did not. Ask me anything.", likes: 203, replies: 67, tags: ["success-story", "academy", "entrepreneurship", "inspiration"], isPinned: true }
    ]
  }

}; // end BTGData
