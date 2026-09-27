export type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  gradient: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Auth JWT API",
    description:
      "Sistema de autenticação e autorização com JWT em Spring Boot. Implementa fluxo seguro de login, refresh tokens e validação de permissões.",
    tags: ["Java", "Spring Boot", "JWT", "MySQL", "Security"],
    demoUrl: "https://github.com/matheusfideles-stack/auth-jwt-api",
    githubUrl: "https://github.com/matheusfideles-stack/auth-jwt-api",
    gradient: "from-blue-600 to-blue-400",
    featured: true,
  },
  {
    title: "Med Voll API",
    description:
      "API REST para gerenciamento de médicos e agendamentos. Utiliza Flyway para versionamento de banco de dados e Spring Data JPA.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Flyway", "REST API"],
    demoUrl: "https://github.com/matheusfideles-stack/med-voll-api",
    githubUrl: "https://github.com/matheusfideles-stack/med-voll-api",
    gradient: "from-emerald-600 to-emerald-400",
    featured: true,
  },
  {
    title: "OS Manager",
    description:
      "Sistema de Ordem de Serviço com API REST em Spring Boot e frontend em PHP. Gerenciamento completo de serviços com persistência em banco de dados.",
    tags: ["Java", "Spring Boot", "PHP", "HTML/CSS/JS", "REST"],
    demoUrl: "https://github.com/matheusfideles-stack/os-manager",
    githubUrl: "https://github.com/matheusfideles-stack/os-manager",
    gradient: "from-purple-600 to-purple-400",
    featured: true,
  },
  {
    title: "QR Code Generator API",
    description:
      "API para geração dinâmica de QR Codes. Suporta customização de tamanho, formato e codificação de dados em tempo real.",
    tags: ["Java", "Spring Boot", "REST API", "QR Code"],
    demoUrl: "https://github.com/matheusfideles-stack/qr-code-generator",
    githubUrl: "https://github.com/matheusfideles-stack/qr-code-generator",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    title: "Screenmatch",
    description:
      "Catálogo de séries com persistência de dados. Aplicação que busca informações de séries em APIs externas e armazena localmente com Spring Data.",
    tags: ["Java", "Spring Boot", "H2", "REST", "Database"],
    demoUrl: "https://github.com/matheusfideles-stack/screenmatch",
    githubUrl: "https://github.com/matheusfideles-stack/screenmatch",
    gradient: "from-pink-600 to-pink-400",
  },
  {
    title: "Desafio Itaú Spring Boot",
    description:
      "Desafio técnico do Itaú implementado com Spring Boot. Demonstra padrões de desenvolvimento, testes e boas práticas de engenharia.",
    tags: ["Java", "Spring Boot", "Challenge", "Testing"],
    demoUrl: "https://github.com/matheusfideles-stack/desafio.itau.springboot",
    githubUrl: "https://github.com/matheusfideles-stack/desafio.itau.springboot",
    gradient: "from-red-600 to-red-400",
  },
];

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
