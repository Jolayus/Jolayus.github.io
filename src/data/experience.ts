import type { ExperienceRole, SkillGroup } from "../types/portfolio";

export const experienceRoles: ExperienceRole[] = [
  {
    title: "Freelance Frontend Developer",
    company: "Combatech (Philsilat Web Application - In Development)",
    setup: "Remote",
    period: "February 2025 - Present",
    summary:
      "Building and maintaining a web-based sports event management system for event, team, player, official, and matchmaking workflows.",
    bullets: [
      "Implemented responsive and scalable interfaces using React.js, TypeScript, and Tailwind CSS.",
      "Managed application state using Redux for predictable data flow.",
      "Integrated frontend modules with backend REST APIs using Axios.",
      "Worked in Agile with frontend, backend (Spring Boot), and project management teams.",
      "Followed best practices for Git/GitHub version control, code reviews, and component reuse.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    setup: "Remote",
    period: "February 2024 - April 2024",
    summary:
      "Delivered production-ready Vue.js and Quasar interfaces based on UI/UX requirements while improving maintainability and frontend quality.",
    bullets: [
      "Built responsive web interfaces using HTML5, CSS3, JavaScript, Vue.js, and Quasar Framework.",
      "Translated UI/UX wireframes into functional, cross-browser pages.",
      "Improved application performance by fixing frontend bottlenecks.",
      "Collaborated with designers, QA engineers, and developers in an Agile environment.",
      "Followed coding standards and Git-based team workflows.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Axios",
      "Responsive Design",
      "UI/UX Implementation",
    ],
  },
  {
    category: "Backend Development",
    items: ["Java Spring Boot", "Node.js", "Express.js", "PHP", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Agile Collaboration"],
  },
];
