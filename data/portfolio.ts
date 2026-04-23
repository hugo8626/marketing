// FILE: data/portfolio.ts
//
// DATA: PORTFOLIO
//
// Define la estructura de los proyectos
// y contiene los datos reales del portfolio.

export type PortfolioImage = {
  src: string;
  alt: string;
};

export type PortfolioProject = {
  slug: string;

  // CARD
  cardTitle: string;
  cardCategory: string;
  cardExcerpt: string;
  coverImage: string;

  // HERO
  pageTitle: string;
  pageIntro: string;
  websiteUrl: string;
  websiteLabel: string;

  // CONTEXTO
  context: string;
  pageDescription: string;

  // PROBLEMA
  objective: string;
  problemItems: string[];

  // ENFOQUE
  approachText: string;
  approachItems: string[];

  // RESULTADO
  resultText: string;
  resultItems: string[];

  // MEDIA
  featuredImage: string;
  featuredImageAlt: string;
  gallery: PortfolioImage[];
  finimg:string;
  // FINAL
  finalTitle: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "taverna-la-sal",

    // CARD
    cardTitle: "Taverna de la Sal",
    cardCategory: "Hotel boutique con restaurante     ",
    cardExcerpt:
      "Mejoramos su experiencia digital para reflejar la esencia del espacio, aumentar las reservas y conectar con quienes buscan algo auténtico.",
    coverImage: "/sal.png",

    // HERO
    pageTitle:
      " De una One Page que se quedaba corta a una web completa pensada para generar reservas",
    pageIntro:
      "Hotel boutique y restaurante en la Costa Brava (Girona)",
    websiteUrl: "https://www.tavernadelasal.com",
    websiteLabel: "www.tavernadelasal.com",

    // CONTEXTO
    context:
      " Un negocio que había crecido, pero su web no acompañaba",
    pageDescription:
      " Taverna de la Sal es un hotel boutique con restaurante en la Costa Brava, donde la experiencia del cliente es clave. Durante años funcionaron con una One Page limitada.",

    // PROBLEMA
    objective:
      "La estructura limitaba el crecimiento del negocio. No era solo un problema de diseño. Era un problema de estructura.",
    problemItems: [
      "Una One Page no permitía desarrollar bien los contenidos ",
      "No posicionaba en Google para búsquedas clave ",
      "No transmitía la calidad real del espacio ",
      "No guiaba al usuario hacia la reserva ",
    ],

    // ENFOQUE
    approachText:
      "Pasamos de una One Page a una web pensada para crecer.. Rediseñamos completamente la web, pero sobre todo, replanteamos su estructura.",
    approachItems: [
      "Creamos una web multipágina para mejorar el SEO en Girona y Costa Brava",
      "Organizamos los contenidos para explicar mejor el negocio",
      "Priorizamos la experiencia visual para transmitir el espacio",
      "Diseñamos un recorrido claro enfocado en la reserva",
    ],

    // RESULTADO
    resultText:
      "Una web preparada para posicionar y generar reservas Ahora la web no solo refleja la experiencia del lugar. También está preparada para atraer tráfico y convertirlo en clientes.",
    resultItems: [
      "Mejor posicionamiento en Google ",
      "Mayor confianza desde el primer clic",
      "Experiencia más clara y completa",
      "Base sólida para aumentar reservas directas ",
    ],
    finimg:"Ahora la web transmite lo que el cliente espera antes de llegar.",
    // MEDIA
    featuredImage: "/sal.png",
    featuredImageAlt: "Habitación hotel",
    gallery: [
      {
        src: "/sal.png",
        alt: "Habitación",
      },
      {
        src: "/sal.png",
        alt: "Interior hotel",
      },
    ],

    // FINAL
    finalTitle:
      "Tu negocio también puede transmitir lo que realmente es.",
  },
  
  // BON TOC
  {
    slug: "bon-toc",

    // CARD
    cardTitle: "Bon Toc",
    cardCategory: "E-COMMERCE",
    cardExcerpt:
      "Diseñamos una experiencia clara y optimizada para comunicar el valor del producto y facilitar la conversión en un mercado competitivo.",
    coverImage: "/bon.png",

    // HERO
    pageTitle:
      " De no tener presencia online a una web pensada para vender y guiar la compra",
    pageIntro:
      "E-commerce de regalos comestibles en Girona",
    websiteUrl: "https://www.bontoc.com",
    websiteLabel: "www.bontoc.com",

    // CONTEXTO
    context:
      "Una marca de regalos comestibles donde el valor está en la experiencia, no solo en el producto. sdopsefwejfeoqwfjopwejowejpjpwefjopjopwe",
    pageDescription:
      "",

    // PROBLEMA
    objective:
      "El problema no era vender cajas, era ayudar a tomar una decisión emocional.",
    problemItems: [
      "Demasiadas opciones sin estructura clara",
      "Dificultad para decidir rápido",
      "Falta de conexión emocional",
      "Experiencia de compra poco fluida",
    ],

    // ENFOQUE
    approachText:
      "No diseñamos solo una web, diseñamos cómo se toma la decisión de compraadf eklrqwejrjqrlñjqwlñjrqwo`rtjqetgjoltjfqweljtñjqetlñtjeqwj",
    approachItems: [
      "Simplificamos el proceso de compra",
      "Organizamos el contenido por momentos ",
      "Priorizamos claridad sobre saturación",
      "Eliminamos fricción en cada paso",
    ],

    // RESULTADO
    resultText:
      "Una web pensada para facilitar la decisión de compra, con una experiencia clara, cuidada y alineada con la marca. La estética, la fotografía y el lenguaje construyen una experiencia cálida que transmite valor y mejora la conversión.",
    resultItems: [
      "Experiencia de compra más clara",
      "Mayor facilidad de compra",
      "Mejor percepción del producto",
      "Web preparada para convertir",
    ],
    finimg:"Ahora la web acompaña el momento en el que alguien decide regalar.",
    // MEDIA
    featuredImage: "/bon.png",
    featuredImageAlt: "page",
    gallery: [
      {
        src: "/bon.png",
        alt: "cajas",
      },
      {
        src: "/bon.png",
        alt: "regalos",
      },
    ],

    // FINAL
    finalTitle:
      "Si vendes un producto, no necesitas solo una web. Necesitas una experiencia que convierta.",
  },







];