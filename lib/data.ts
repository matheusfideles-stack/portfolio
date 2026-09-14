export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  gradient: string;
  featured?: boolean;
};

// Replace with your real projects, screenshots, and links.
export const projects: Project[] = [
  {
    title: "Nimbus — Realtime Analytics Dashboard",
    description:
      "A multi-tenant analytics platform with live data pipelines, custom dashboards, and sub-second query performance for teams tracking product metrics at scale.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/matheusfideles",
    gradient: "from-indigo-500/30 via-violet-500/10 to-transparent",
    featured: true,
  },
  {
    title: "Ledgerly — Personal Finance API",
    description:
      "A RESTful API and dashboard for tracking budgets and expenses, with automated categorization, recurring transaction detection, and exportable reports.",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "REST APIs"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/matheusfideles",
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    featured: true,
  },
  {
    title: "Atlas UI — Design System",
    description:
      "A component library and documentation site used across internal products, built with accessibility, theming, and developer ergonomics as first-class concerns.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/matheusfideles",
    gradient: "from-sky-500/25 via-indigo-500/10 to-transparent",
  },
  {
    title: "Pulse — Python Data Pipeline",
    description:
      "A scheduled ETL pipeline that ingests third-party data sources, normalizes them, and feeds a reporting layer used by non-technical stakeholders.",
    tags: ["Python", "PostgreSQL", "Docker", "CI/CD"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/matheusfideles",
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "RESTful APIs", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Architecture",
    skills: ["Git & GitHub", "Vercel", "Docker", "CI/CD", "UI/UX Design Systems"],
  },
];

export const socialLinks = {
  email: "matheusfideles@example.com",
  github: "https://github.com/matheusfideles",
  linkedin: "https://linkedin.com/in/matheusfideles",
  twitter: "https://x.com/matheusfideles",
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
