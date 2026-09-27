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
    title: "Med Voll",
    description:
      "CRUD completo para clínica de médicos em Spring Boot. Gerenciamento de consultas, médicos e pacientes com persistência em banco de dados.",
    tags: ["Java", "Spring Boot", "JPA", "Database"],
    demoUrl: "https://github.com/matheusfideles-stack/Med_Voll",
    githubUrl: "https://github.com/matheusfideles-stack/Med_Voll",
    gradient: "from-blue-600 to-blue-400",
    featured: true,
  },
  {
    title: "OS Manager",
    description:
      "Sistema de Ordem de Serviço com API REST em Spring Boot + JWT e frontend em PHP. Orquestrado em Docker com Spring Security.",
    tags: ["Java", "Spring Boot", "PHP", "Docker", "JWT"],
    demoUrl: "https://github.com/matheusfideles-stack/os-manager",
    githubUrl: "https://github.com/matheusfideles-stack/os-manager",
    gradient: "from-emerald-600 to-emerald-400",
    featured: true,
  },
  {
    title: "QR Code Generator",
    description:
      "API para geração dinâmica de QR Codes com Spring Boot. Suporta customização de tamanho, formato e codificação em tempo real.",
    tags: ["Java", "Spring Boot", "REST API", "QR Code"],
    demoUrl: "https://github.com/matheusfideles-stack/qrcode.generator",
    githubUrl: "https://github.com/matheusfideles-stack/qrcode.generator",
    gradient: "from-purple-600 to-purple-400",
    featured: true,
  },
  {
    title: "Screenmatch",
    description:
      "Catálogo de séries com persistência de dados. Busca informações em APIs externas e armazena localmente usando Spring Data e H2.",
    tags: ["Java", "Spring Boot", "H2", "REST", "API Integration"],
    demoUrl: "https://github.com/matheusfideles-stack/screenmatch",
    githubUrl: "https://github.com/matheusfideles-stack/screenmatch",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    title: "Autenticação e Autorização",
    description:
      "Sistema completo de autenticação e autorização com Spring Boot. Implementa JWT, validação de permissões e proteção de endpoints.",
    tags: ["Java", "Spring Boot", "JWT", "Security"],
    demoUrl: "https://github.com/matheusfideles-stack/Autenticacao_Autorizacao",
    githubUrl: "https://github.com/matheusfideles-stack/Autenticacao_Autorizacao",
    gradient: "from-red-600 to-red-400",
  },
  {
    title: "Desafio Itaú",
    description:
      "Desafio técnico do Itaú implementado com Spring Boot. Demonstra padrões de desenvolvimento, testes unitários e boas práticas.",
    tags: ["Java", "Spring Boot", "Testing", "Challenge"],
    demoUrl: "https://github.com/matheusfideles-stack/desafio.itau.springboot",
    githubUrl: "https://github.com/matheusfideles-stack/desafio.itau.springboot",
    gradient: "from-pink-600 to-pink-400",
  },
];

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Tech Stack",
    skills: [
      "Java",
      "Spring Boot",
      "RESTful APIs",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "Microsserviços",
      "Git & GitHub",
      "CI/CD",
    ],
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
