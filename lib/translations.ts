export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      stack: "Stack",
      journey: "Trajetória",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      title: "Engenheiro de Software Backend",
      subtitle:
        "Eu design e construo sistemas backend escaláveis e confiáveis — APIs, serviços e pipelines de dados — usando Java, Spring Boot e sólidas práticas de engenharia.",
      cta: {
        projects: "Ver Projetos",
        contact: "Entre em Contato",
        resume: "Currículo",
        github: "GitHub",
      },
    },
    about: {
      eyebrow: "Sobre",
      title: "Eu construo software do jeito que gostaria de usar.",
      description1:
        "Sou um Engenheiro de Software Backend focado em Java e Spring Boot — construindo APIs, serviços e modelos de dados que se mantêm confiáveis conforme escalam. Me importo em acertar os fundamentos: limites claros, estruturas de dados sólidas e código que é fácil de raciocinar.",
      description2:
        "Construo sistemas pensando em durabilidade: arquitetura limpa, decisões bem fundamentadas e código que continua confiável meses depois de ir para produção.",
      description3:
        "Estou sempre refinando meu fluxo de trabalho, estudando como grandes sistemas backend são estruturados, e buscando novas formas de escrever código melhor.",
      principles: {
        principle1: "Código legível é código mantível",
        description1:
          "Código que qualquer um entende rapidamente — ou que eu mesmo compreendo em 6 meses.",
        principle2: "Arquitetura que escala",
        description2:
          "Cada decisão de design pensa em crescimento: performance, confiabilidade e manutenção no longo prazo.",
        principle3: "Qualidade antes de tudo",
        description3:
          "Testes rigorosos, tratamento de erros robusto e documentação clara — a diferença entre código que funciona e código pronto para produção.",
      },
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Ferramentas que uso para levar ideias para produção.",
      description:
        "Um kit de ferramentas pragmático e moderno focado em type safety, experiência do desenvolvedor e envio de software confiável rapidamente.",
    },
    projects: {
      eyebrow: "Trabalho Selecionado",
      title: "Projetos que construí e lancei.",
      description:
        "Um mix de sistemas backend e serviços — cada um construído com ênfase em performance, manutenibilidade e uma ótima experiência do desenvolvedor.",
      empty: "Novos projetos em breve.",
      emptyDescription:
        "Atualmente estou trabalhando em coisas que valem a pena compartilhar aqui. Volte logo, ou dê uma olhada no meu GitHub enquanto isso.",
    },
    journey: {
      eyebrow: "Trajetória",
      title: "Minha história profissional.",
      description: "Onde trabalhei e o que aprendi.",
    },
    certifications: {
      eyebrow: "Certificações",
      title: "Educação e certificações.",
      description: "Formação contínua em desenvolvimento backend.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos trabalhar juntos.",
      description: "Entre em contato para discutir projetos ou oportunidades.",
      email: "Enviar Email",
      resume: "Baixar Currículo",
    },
    footer: {
      attribution: "Construído com Next.js e Tailwind CSS.",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      journey: "Journey",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Software Engineer · Backend",
      subtitle:
        "I design and build scalable, reliable backend systems — APIs, services, and data pipelines — using Java, Spring Boot, and solid engineering practices.",
      cta: {
        projects: "View Projects",
        contact: "Get in Touch",
        resume: "Resume",
        github: "GitHub",
      },
    },
    about: {
      eyebrow: "About",
      title: "I build software the way I'd want to use it.",
      description1:
        "I'm a Backend Software Engineer focused on Java and Spring Boot — building APIs, services, and data models that stay reliable as they scale. I care about getting the fundamentals right: clear boundaries, solid data structures, and code that's easy to reason about.",
      description2:
        "I build systems with durability in mind: clean architecture, well-reasoned decisions, and code that stays reliable long after shipping to production.",
      description3:
        "I'm constantly refining my workflow, studying how great backend systems are built, and finding new ways to write better code.",
      principles: {
        principle1: "Readable code is maintainable code",
        description1:
          "Code anyone can understand at first glance — or that I can grasp 6 months from now.",
        principle2: "Architecture that scales",
        description2:
          "Every design decision anticipates growth: performance, reliability, and long-term maintainability.",
        principle3: "Quality above all",
        description3:
          "Rigorous testing, robust error handling, and clear docs — the difference between working code and production-ready code.",
      },
    },
    stack: {
      eyebrow: "Tech Stack",
      title: "Tools I use to bring ideas to production.",
      description:
        "A pragmatic, modern toolkit focused on type safety, developer experience, and shipping reliable software fast.",
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Projects I've built and shipped.",
      description:
        "A mix of backend systems and services — each built with an emphasis on performance, maintainability, and a great developer experience.",
      empty: "New projects coming soon.",
      emptyDescription:
        "I'm currently working on things worth sharing here. Check back soon, or take a look at my GitHub in the meantime.",
    },
    journey: {
      eyebrow: "Journey",
      title: "My professional timeline.",
      description: "Where I've worked and what I've learned.",
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Education and certifications.",
      description: "Continuous learning in backend development.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together.",
      description: "Get in touch to discuss projects or opportunities.",
      email: "Send Email",
      resume: "Download Resume",
    },
    footer: {
      attribution: "Built with Next.js and Tailwind CSS.",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];
