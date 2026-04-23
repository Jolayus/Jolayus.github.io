import type { EducationEntry } from "../types/portfolio";

export const profile = {
  shortName: "JSC",
  fullName: "Julius Odref Czar S. Cabangon",
  title: "Frontend Developer",
  subtitle: "Web Developer / Game Developer",
  location: "Binan, Laguna, Philippines",
  email: "cabangonjulius86@gmail.com",
  phone: "+63 947 462 6020",
  linkedin: "https://www.linkedin.com/in/julius-odref-czar-cabangon-5475002a9/",
  github: "https://github.com/Jolayus",
  resumeFile: "/Julius_Odref_Czar_Cabangon_Resume.pdf",
  legacyCvFile: "/JuliusCabangon_CV.pdf",
  summary:
    "Frontend Developer with experience building scalable and responsive web applications using React, Vue.js, and TypeScript. I translate UI/UX designs into maintainable interfaces and collaborate with backend teams through REST API integration.",
};

export const aboutHighlights: string[] = [
  "Production-level sports management system contributor (React, TypeScript, Tailwind, Redux).",
  "Internship experience delivering responsive Vue.js + Quasar interfaces in Agile teams.",
  "Strong foundation in frontend performance, reusable component design, and cross-team collaboration.",
];

export const education: EducationEntry[] = [
  {
    institution: "Pamantasan ng Cabuyao",
    degree: "Bachelor of Science in Computer Science",
    period: "June 2025",
    location: "Cabuyao, Laguna, Philippines",
    notes: [
      'Thesis: "Implementing an Augmentative and Alternative Communication Board in Filipino Using Hidden Markov Model and Text-to-Speech."',
      "Vice President for Academic Affairs' Lister, 2nd Semester 2023-2024.",
      "Organization Member, Association of Computer Science Students - PNC.",
    ],
  },
  {
    institution: "Informatics Computer Institute Festival Mall",
    degree: "Technical-Vocational-Livelihood (TVL) - ICT",
    period: "June 2020",
    location: "Muntinlupa City, Metro Manila, Philippines",
  },
];
