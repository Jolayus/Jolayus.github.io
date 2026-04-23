import type { Project } from "../types/portfolio";
import projectOneImage from "../assets/portfolio/project1.png";
import projectTwoImage from "../assets/portfolio/project2.png";

export const projects: Project[] = [
  {
    slug: "philsilat-web-application",
    title: "Philsilat Sports Management Web Application",
    headline: "Production-level event and matchmaking management platform.",
    description:
      "A sports event management system focused on organizing events, teams, players, officials, and matchmaking workflows. Built in Agile collaboration with frontend, backend, and project management teammates.",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Axios",
      "Spring Boot REST API",
    ],
    status: "In Development",
  },
  {
    slug: "trucking-management-system",
    title: "Trucking Management System for Ro-ed Logistics and Services",
    headline: "Operations and logistics workflow support platform.",
    description:
      "A team-built system focused on logistics operations. This project strengthened my experience in frontend collaboration, reusable UI structures, and project-based delivery.",
    techStack: ["Vue.js", "Quasar", "JavaScript", "SCSS"],
    github: "https://github.com/Jolayus/softeng-group-10",
    image: projectOneImage,
  },
  {
    slug: "ro-ed-landing-page",
    title: "Landing Page for Ro-ed Logistics and Services",
    headline: "Marketing-focused landing page for company web presence.",
    description:
      "A responsive landing page project with a strong focus on clear messaging, layout polish, and device compatibility for business-facing content.",
    techStack: ["Vue.js", "Quasar", "JavaScript", "SCSS"],
    github: "https://github.com/eyedent1ty/tms-roed-landing-page",
    image: projectTwoImage,
  },
];
