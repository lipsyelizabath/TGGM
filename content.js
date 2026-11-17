// ============================================================
//  EDIT THIS FILE ONLY. Everything on the website comes from here.
//  Keep the quotes "" and commas , exactly as they are.
//  To add an item: copy one { ... }, block and paste it below.
//  To remove a section: change its list to []  (e.g. faqs: [])
// ============================================================
const SITE = {
  name: "TheGymGirlMovement",
  tagline: "Get stronger without the guesswork.",
  intro: "Specialised women focused personal training, small-group classes and online coaching. A plan built around your body, your schedule and your goals.",
  buttonText: "Book a free trial session",

  // Colours: use any hex code. Change these to rebrand the whole site.
  theme: {
    bg: "#EEF2F6",       // page background
    ink: "#0F2A43",      // text and dark areas
    accent: "#FF6B35",   // buttons and highlights
    muted: "#55657A",    // secondary text
    line: "#D3DCE6"      // thin dividers
  },

  // Section titles (change the wording freely)
  headings: {
    programs: "Training options",
    sessions: "Weekly timetable",
    testimonials: "Client results",
    faq: "Before you start",
    contact: "Book your free trial"
  },

  contact: {
    intro: "Tell me your goal (fat loss, strength, mobility, event prep) and any injuries. I will reply within a day with a suggested plan.",
    email: "hello@example.com",
    phone: "+91 90000 00000",
    whatsapp: "919000000000",   // country code + number, no + or spaces
    formAction: ""              // optional: paste your Formspree URL to enable the form
  },

  programs: [
    { title: "1-to-1 Personal Training", description: "Fully tailored sessions with form coaching, progress tracking and a nutrition plan you can follow.", format: "At the gym or at your home", duration: "60 min, 2–4 sessions a week", price: "From ₹12,000 / month" },
    { title: "Small-Group Strength", description: "Max 6 people. Coached strength and conditioning with the energy of a group and the attention of a trainer.", format: "In person", duration: "50 min, 3 sessions a week", price: "₹4,500 / month" },
    { title: "Online Coaching", description: "A weekly programme in your phone, check-in calls, and form feedback on videos you send me.", format: "Online", duration: "Ongoing, weekly check-ins", price: "₹3,000 / month" },
    { title: "Beginner Starter Pack", description: "Learn the basic lifts safely, build a habit and leave with a 12-week plan.", format: "In person", duration: "8 sessions", price: "₹7,500 one-time" }
  ],

  // Weekly classes. "when" can be any text you like.
  sessions: [
    { when: "Mon · Wed · Fri, 6:00 AM", program: "Small-Group Strength", location: "Indiranagar studio", spots: "3 spots left" },
    { when: "Tue · Thu, 7:30 PM", program: "Mobility & Core", location: "Indiranagar studio", spots: "5 spots left" },
    { when: "Sat, 8:00 AM", program: "Beginner Starter Pack", location: "Cubbon Park", spots: "Open" }
  ],

  about: {
    heading: "Your trainer",
    paragraphs: [
      "I am a certified strength and conditioning coach with 9 years of experience, working with office professionals, new parents and weekend athletes.",
      "I keep training simple: learn good form, progress a little each week, and eat in a way you can keep up. No crash diets and no all-or-nothing plans."
    ]
  },

  testimonials: [
    { quote: "I lost 11 kg in 5 months and my back pain is gone.", name: "Meera K.", role: "Software engineer, 12 months with Ironleaf" },
    { quote: "I walked in unable to do a single push-up. Last week I did 20.", name: "Rahul D.", role: "Small-Group member" },
    { quote: "The online plan fits around my travel. I have not missed a week.", name: "Sana A.", role: "Online client" }
  ],

  faqs: [
    { q: "I am a complete beginner. Is that okay?", a: "Yes. Most of my clients start from zero. Your first session is a free trial where we talk goals and try a few movements." },
    { q: "I have an injury or health condition.", a: "Tell me before we start. I adapt exercises around injuries, and I ask for your doctor's clearance for anything serious." },
    { q: "Do you help with food and diet?", a: "Yes. Personal training and online coaching include a simple nutrition plan based on foods you already eat." },
    { q: "What if I need to cancel a session?", a: "Cancel or reschedule free of charge up to 12 hours before the session." }
  ]
};
