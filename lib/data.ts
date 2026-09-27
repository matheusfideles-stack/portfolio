export type Project = {
  title: string;
  descriptionPt: string;
  descriptionEn: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  gradient: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Med Voll",
    descriptionPt:
      "CRUD completo para clínica de médicos em Spring Boot. Gerenciamento de consultas, médicos e pacientes com persistência em banco de dados.",
    descriptionEn:
      "Complete CRUD for medical clinic in Spring Boot. Management of appointments, doctors and patients with database persistence.",
    tags: ["Java", "Spring Boot", "JPA", "Database"],
    demoUrl: "https://github.com/matheusfideles-stack/Med_Voll",
    githubUrl: "https://github.com/matheusfideles-stack/Med_Voll",
    gradient: "from-blue-600 to-blue-400",
    featured: true,
  },
  {
    title: "OS Manager",
    descriptionPt:
      "Sistema de Ordem de Serviço com API REST em Spring Boot + JWT e frontend em PHP. Orquestrado em Docker com Spring Security.",
    descriptionEn:
      "Service Order system with REST API in Spring Boot + JWT and PHP frontend. Orchestrated in Docker with Spring Security.",
    tags: ["Java", "Spring Boot", "PHP", "Docker", "JWT"],
    demoUrl: "https://github.com/matheusfideles-stack/os-manager",
    githubUrl: "https://github.com/matheusfideles-stack/os-manager",
    gradient: "from-emerald-600 to-emerald-400",
    featured: true,
  },
  {
    title: "QR Code Generator",
    descriptionPt:
      "API para geração dinâmica de QR Codes com Spring Boot. Suporta customização de tamanho, formato e codificação em tempo real.",
    descriptionEn:
      "API for dynamic QR Code generation with Spring Boot. Supports customization of size, format and real-time encoding.",
    tags: ["Java", "Spring Boot", "REST API", "QR Code"],
    demoUrl: "https://github.com/matheusfideles-stack/qrcode.generator",
    githubUrl: "https://github.com/matheusfideles-stack/qrcode.generator",
    gradient: "from-purple-600 to-purple-400",
    featured: true,
  },
  {
    title: "Screenmatch",
    descriptionPt:
      "Catálogo de séries com persistência de dados. Busca informações em APIs externas e armazena localmente usando Spring Data e H2.",
    descriptionEn:
      "Series catalog with data persistence. Fetches information from external APIs and stores locally using Spring Data and H2.",
    tags: ["Java", "Spring Boot", "H2", "REST", "API Integration"],
    demoUrl: "https://github.com/matheusfideles-stack/screenmatch",
    githubUrl: "https://github.com/matheusfideles-stack/screenmatch",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    title: "Autenticação e Autorização",
    descriptionPt:
      "Sistema completo de autenticação e autorização com Spring Boot. Implementa JWT, validação de permissões e proteção de endpoints.",
    descriptionEn:
      "Complete authentication and authorization system with Spring Boot. Implements JWT, permission validation and endpoint protection.",
    tags: ["Java", "Spring Boot", "JWT", "Security"],
    demoUrl: "https://github.com/matheusfideles-stack/Autenticacao_Autorizacao",
    githubUrl: "https://github.com/matheusfideles-stack/Autenticacao_Autorizacao",
    gradient: "from-red-600 to-red-400",
  },
  {
    title: "Desafio Itaú",
    descriptionPt:
      "Desafio técnico do Itaú implementado com Spring Boot. Demonstra padrões de desenvolvimento, testes unitários e boas práticas.",
    descriptionEn:
      "Itaú technical challenge implemented with Spring Boot. Demonstrates development patterns, unit tests and best practices.",
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
  rolePt: string;
  roleEn: string;
  period: string;
  descriptionPt: string;
  descriptionEn: string;
  current?: boolean;
  logo?: string;
};

export const journey: JourneyItem[] = [
  {
    company: "Flexcon",
    rolePt: "Inteligência Comercial",
    roleEn: "Commercial Intelligence",
    period: "2026 — agora",
    descriptionPt:
      "Transformar dados de vendas e clientes em insights acionáveis — construindo relatórios e dashboards que apoiam a tomada de decisões comerciais para uma operação parceira da Vivo.",
    descriptionEn:
      "Transforming sales and customer data into actionable insights — building reports and dashboards that support commercial decision-making for a Vivo partner operation.",
    current: true,
    logo: "/flexcon-logo.png",
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
