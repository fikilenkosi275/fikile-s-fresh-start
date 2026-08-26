export const profile = {
  name: "Fikile Nkosi",
  location: "Soweto, South Africa",
  email: "fikilenkosi275@gmail.com",
  linkedinLabel: "FIKILE NKOSI",
  // Placeholder — replace with your real LinkedIn profile URL when you have it.
  linkedinUrl: "https://www.linkedin.com/search/results/people/?keywords=Fikile%20Nkosi",
  // No GitHub account yet — leave empty and the link stays hidden everywhere.
  githubUrl: "",
  tagline: "Matric graduate. Organiser. Building digital skills toward a tech career.",
  intro:
    "I'm an ambitious and organised matric graduate from Soweto looking for my first internship or entry-level opportunity. I completed my National Senior Certificate in 2024, and since then I've been teaching myself the digital skills that employers actually use every day.",
  cvUrl: "/cv/Fikile-Nkosi-CV.pdf",
};

export const about = [
  "I matriculated in 2024 at a public school in Soweto. I don't have formal work experience yet, and I'd rather be honest about that than dress it up — what I do have is a habit of taking initiative and finishing what I start.",
  "During my final year I organised and led a peer study group for my classmates. I set up the WhatsApp group, built a shared Google Docs library of notes and past papers, and kept a weekly schedule so people actually showed up. It taught me how to coordinate people who all have different pressures at home.",
  "Right now I'm a self-driven learner working through free online courses in digital literacy and the basics of web development. My goal is an internship where I can learn from a real team, contribute properly, and grow into a career in tech.",
];

export const technicalSkills = [
  { name: "Google Docs & Google Drive", level: "Confident" },
  { name: "WhatsApp group coordination", level: "Confident" },
  { name: "Microsoft Word", level: "Basic" },
  { name: "Microsoft Excel", level: "Basic" },
  { name: "Internet research", level: "Confident" },
  { name: "Typing & digital literacy", level: "Confident" },
];

export const softSkills = [
  "Leadership",
  "Organisation",
  "Teamwork",
  "Communication",
  "Reliability",
  "Problem solving",
  "Time management",
];

export type Project = {
  title: string;
  year: string;
  summary: string;
  details: string[];
  tools: string[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "Matric Peer Study Group",
    year: "2024",
    summary:
      "Organised and led a peer study group that helped my classmates prepare for the final matric exams and share learning resources.",
    details: [
      "Started and moderated a WhatsApp group of fellow matric learners, setting ground rules and a weekly study timetable.",
      "Built a shared Google Docs and Drive folder holding summaries, past papers and memos so nobody had to hunt for materials.",
      "Ran weekly check-ins where each member presented one topic, which pushed everyone to prepare rather than just read.",
      "Kept the group active through the full exam season — attendance held steady right up to the last paper.",
    ],
    tools: ["WhatsApp", "Google Docs", "Google Drive"],
  },
  {
    title: "Project title goes here",
    year: "Coming soon",
    summary:
      "This slot is reserved for my next project — most likely a small personal website or a course project I complete online.",
    details: [
      "Replace this text with what the project does and why you built it.",
      "Add two or three lines describing your specific contribution.",
    ],
    tools: ["Tool", "Tool"],
    placeholder: true,
  },
  {
    title: "Project title goes here",
    year: "Coming soon",
    summary:
      "A second reserved slot for future work, so this page grows with me as I learn.",
    details: [
      "Replace this text with the project description.",
      "List the real tools and technologies you used.",
    ],
    tools: ["Tool", "Tool"],
    placeholder: true,
  },
];

export const education = [
  {
    qualification: "National Senior Certificate (Matric)",
    year: "2024",
    institution: "Soweto, South Africa",
    // Placeholder — fill in your actual subjects.
    subjects: "Subjects: add your matric subjects here (e.g. English, Mathematical Literacy, Life Sciences, Business Studies).",
  },
];

export const certifications = {
  note: "Placeholder — these are in progress or planned, not completed qualifications. I'll update this list as I finish each one.",
  items: [
    { name: "Google Digital Skills for Africa — Fundamentals of Digital Marketing", status: "Planned" },
    { name: "freeCodeCamp — Responsive Web Design", status: "In progress" },
    { name: "Microsoft Digital Literacy", status: "Planned" },
  ],
};

export const involvement = [
  {
    role: "Founder & Coordinator — Matric Peer Study Group",
    period: "2024",
    points: [
      "Led a group of matric learners through the exam season, handling scheduling, resources and follow-ups.",
      "Acted as the point of contact when members fell behind, adjusting the timetable so they could catch up.",
    ],
  },
  {
    role: "Volunteer support — school events",
    period: "2023 – 2024",
    points: [
      "Helped set up and run school events, working with teachers and other learners under time pressure.",
    ],
  },
];
