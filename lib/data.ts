export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  gradient: string;
  featured?: boolean;
};

// Add your real projects here once you have some to showcase.
export const projects: Project[] = [];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "RESTful APIs", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Architecture",
    skills: ["Git & GitHub", "Docker", "CI/CD"],
  },
];

export const socialLinks = {
  email: "matheusfideles.stack@gmail.com",
  github: "https://github.com/matheusfideles-stack",
  linkedin: "https://www.linkedin.com/in/matheusfideles-dev",
  resume: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type JourneyItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
};

// Replace with your real work history.
export const journey: JourneyItem[] = [
  {
    company: "Flexcon (Vivo Partner)",
    role: "Commercial Intelligence",
    period: "2026 — Present",
    description:
      "Turning sales and customer data into actionable insights — building reports and dashboards that support commercial decision-making for a Vivo partner operation.",
    current: true,
  },
];

export type Certification = {
  title: string;
  issuer: string;
  url: string;
};

// Replace with your real certifications and verification links.
export const certifications: Certification[] = [
  {
    title: "Back End Developer",
    issuer: "Alura",
    url: "#",
  },
];
