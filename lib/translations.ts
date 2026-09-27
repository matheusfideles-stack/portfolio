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
        "O que me motiva é construir coisas que funcionam bem sob uso real. Me importo com arquitetura limpa, trade-offs de engenharia bem pensados e software que continua funcionando muito depois de ser lançado.",
      description3:
        "Fora de escrever código, geralmente estou refinando meu fluxo de trabalho, explorando novas ferramentas, ou estudando como sistemas backend sólidos são projetados — sempre procurando maneiras de elevar a qualidade do meu próprio trabalho.",
      principles: {
        principle1: "Código legível é código mantível",
        description1:
          "Estruturo projetos para que terceiros — ou eu mesmo em 6 meses — entendam rapidamente o que cada componente faz.",
        principle2: "Arquitetura que escala",
        description2:
          "Desde o schema do banco até a orquestração de serviços, cada decisão considera crescimento: performance, confiabilidade e manutenção futura.",
        principle3: "Qualidade antes de tudo",
        description3:
          "Testes rigorosos, tratamento de erros robusto e documentação clara — o que separa código de produção de código que apenas funciona hoje.",
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
        "What drives me is building things that hold up under real-world use. I care about clean architecture, thoughtful engineering trade-offs, and shipping software that keeps working long after it ships.",
      description3:
        "Outside of writing code, I'm usually refining my workflow, exploring new tools, or studying how solid backend systems are designed — always looking for ways to raise the bar on my own work.",
      principles: {
        principle1: "Readable code is maintainable code",
        description1:
          "I structure projects so that anyone — or my future self in 6 months — can quickly understand what each component does.",
        principle2: "Architecture that scales",
        description2:
          "From database schema to service orchestration, every decision considers growth: performance, reliability, and future maintenance.",
        principle3: "Quality above all",
        description3:
          "Rigorous testing, robust error handling, and clear documentation — the difference between production code and code that merely works today.",
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
