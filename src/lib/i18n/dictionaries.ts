export type Locale = "es" | "en";

export interface Dictionary {
  nav: {
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    label: string;
    headline: string;
    subheadline: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    body: string[];
    agencyLine: {
      prefix: string;
      highlight: string;
      suffix: string;
    };
  };
  projects: {
    title: string;
    viewProject: string;
    followUpdates: string;
    privateLabel: string;
    items: {
      restaurante: {
        title: string;
        description: string;
        tags: string[];
      };
      miyo: {
        title: string;
        description: string;
      };
      bots: {
        title: string;
        description: string;
      };
    };
    testimonial: {
      quote: string;
      author: string;
      translatedNote: string;
    };
  };
  footer: {
    description: string;
    navigationTitle: string;
    contactTitle: string;
  };
  contactModal: {
    title: string;
    whatsapp: string;
    email: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: {
      projects: "Proyectos",
      about: "Perfil",
      contact: "Contacto",
    },
    hero: {
      label: "Full Stack Engineer · Medellín, Colombia · Disponible para nuevas oportunidades",
      headline: "Convierto operaciones desordenadas en sistemas que un negocio puede confiar",
      subheadline:
        "6 años programando, el último entregando productos reales a clientes — desde sistemas de gestión que reemplazan el papel hasta automatización con IA. TypeScript de punta a punta.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Hablemos",
    },
    about: {
      title: "Cómo trabajo",
      body: [
        "Llevo 6 años programando, pero el último año ha sido el que realmente importa: es cuando empecé a entregar software que resuelve problemas de negocio reales, no solo ejercicios de código.",
        "El caso que mejor lo resume: un cliente con un restaurante que no tenía ningún control de su operación — ni en papel, ni en sistema. No sabía qué tan rentable era cada producto, ni cómo iba su caja día a día. Le construí un sistema a medida de inventario y flujo de caja, con métricas claras de rentabilidad por producto, además de bots de automatización para agendamiento y mensajería. Pasó de sentirse perdido a tener visibilidad total de su negocio.",
        "Eso es lo que busco en cada proyecto: no solo escribir código que funcione, sino entender el problema de negocio detrás y tomar las decisiones técnicas correctas para resolverlo de forma sostenible.",
      ],
      agencyLine: {
        prefix: "Fuera de proyectos para clientes, también soy fundador de",
        highlight: "JALM Agency",
        suffix:
          ", donde construyo soluciones de automatización con IA — bots de mensajería, agendamiento y publicación automática.",
      },
    },
    projects: {
      title: "Proyectos",
      viewProject: "Ver Proyecto",
      followUpdates: "Seguir Actualizaciones",
      privateLabel: "Proyecto privado del cliente",
      items: {
        restaurante: {
          title: "Restaurante Local",
          description:
            "Un restaurante que operaba sin ningún control — ni papel, ni sistema. Le construí una plataforma a medida de inventario, flujo de caja y rentabilidad por producto, más bots de agendamiento y mensajería.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Automatización"],
        },
        miyo: {
          title: "MIYO",
          description:
            "App personal de finanzas pensada para que llevar tus cuentas se sienta simple e intuitivo — casi como un juego, no como una obligación.",
        },
        bots: {
          title: "JALM Agency · Bot Services",
          description:
            "Ecosistema de bots de automatización (mensajería, agendamiento y publicación) en desarrollo continuo. Sigue el canal de Telegram para nuevas herramientas.",
        },
      },
      testimonial: {
        quote:
          "Parce, mira Juancho, que desde que me diste el sistema ya todo lo llevo más controlado. Me hace falta aprender a moverme más e ir cogiendo la habilidad, pero esto me resuelve muchas cosas.",
        author: "Cliente, Restaurante Local",
        translatedNote: "",
      },
    },
    footer: {
      description:
        "Full Stack Developer enfocado en sistemas escalables, arquitectura estructurada e ingeniería orientada a producto.",
      navigationTitle: "Navegación",
      contactTitle: "Contacto",
    },
    contactModal: {
      title: "Contacto",
      whatsapp: "WhatsApp",
      email: "Email",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      label: "Full Stack Engineer · Medellín, Colombia · Open to new opportunities",
      headline: "I turn messy operations into systems a business can trust",
      subheadline:
        "6 years coding, the last one delivering real products to clients — from management systems that replace paper to AI automation. TypeScript end to end.",
      ctaProjects: "View Projects",
      ctaContact: "Let's Talk",
    },
    about: {
      title: "How I Work",
      body: [
        "I've been coding for 6 years, but the last one is the one that actually matters: that's when I started shipping software that solves real business problems, not just code exercises.",
        "The case that sums it up best: a restaurant client who had zero control over their operation — no paper, no system. They had no idea how profitable each product was, or how their cash flow looked day to day. I built them a custom inventory and cash flow platform, with clear profitability metrics per product, plus automation bots for scheduling and messaging. They went from feeling lost to having full visibility over their business.",
        "That's what I look for in every project: not just writing code that works, but understanding the business problem behind it and making the right technical decisions to solve it sustainably.",
      ],
      agencyLine: {
        prefix: "Outside of client projects, I'm also the founder of",
        highlight: "JALM Agency",
        suffix:
          ", where I build AI automation solutions — messaging bots, scheduling and automatic publishing.",
      },
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      followUpdates: "Follow Updates",
      privateLabel: "Private client project",
      items: {
        restaurante: {
          title: "Local Restaurant",
          description:
            "A restaurant operating with zero control — no paper, no system. I built them a custom platform for inventory, cash flow and per-product profitability, plus scheduling and messaging bots.",
          tags: ["Next.js", "TypeScript", "PostgreSQL", "Automation"],
        },
        miyo: {
          title: "MIYO",
          description:
            "A personal finance app designed to make tracking your money feel simple and intuitive — almost like a game, not a chore.",
        },
        bots: {
          title: "JALM Agency · Bot Services",
          description:
            "An automation bot ecosystem (messaging, scheduling and publishing) in continuous development. Follow the Telegram channel for new tools.",
        },
      },
      testimonial: {
        quote:
          "Man, since you gave me the system, I have everything much more under control. I still need to learn to navigate it better and build up the skill, but it solves a lot of problems for me.",
        author: "Client, Local Restaurant",
        translatedNote: "(translated from Spanish)",
      },
    },
    footer: {
      description:
        "Full Stack Developer focused on scalable systems, structured architecture and product-driven engineering.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
    },
    contactModal: {
      title: "Contact",
      whatsapp: "WhatsApp",
      email: "Email",
    },
  },
};
