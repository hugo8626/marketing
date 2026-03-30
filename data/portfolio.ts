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
    cardCategory: "Hotel boutique restaurante",
    cardExcerpt:
      "Mejoramos la experiencia digital para aumentar reservas y transmitir el valor real del espacio.",
    coverImage: "/sal.png",

    // HERO
    pageTitle:
      "De una web que no transmitía a una experiencia que invita a reservar",
    pageIntro:
      "Hotel Boutique restaurante Taverna de la Sal",
    websiteUrl: "https://www.tavernadelasal.com",
    websiteLabel: "www.tavernadelasal.com",

    // CONTEXTO
    context:
      "Un hotel boutique y restaurante donde la experiencia y el entorno lo son todo.",
    pageDescription:
      "El reto no era solo tener una web, sino reflejar esa experiencia antes de que el cliente llegue.",

    // PROBLEMA
    objective:
      "Si la web no refleja lo que el cliente vive en el lugar, pierde impacto desde el primer momento.",
    problemItems: [
      "No transmitía la calidad real del espacio",
      "No generaba confianza en los primeros segundos",
      "No guiaba al usuario",
      "No incentivaba la reserva",
    ],

    // ENFOQUE
    approachText:
      "Replanteamos la estructura de la web para que el usuario entienda rápidamente la propuesta del lugar.",
    approachItems: [
      "Simplificamos la estructura",
      "Priorizamos lo visual",
      "Clarificamos el mensaje",
      "Enfocamos todo a la reserva",
    ],

    // RESULTADO
    resultText:
      "Ahora la web refleja la experiencia real del lugar, con una estética alineada que transmite confianza y facilita la reserva.",
    resultItems: [
      "Imagen más profesional",
      "Mayor confianza del usuario",
      "Experiencia más clara",
      "Base sólida para crecer",
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
      "Diseñamos una experiencia clara y optimizada para comunicar el valor del producto  y facilitar la conversionen un mercado competitivo",
    coverImage: "/bon.png",

    // HERO
    pageTitle:
      "De una web que no ayudaba a decidir, a una experiencia que guía la compra.",
    pageIntro:
      "Ecommerce de regalos comestibles diseñado para facilitar la decisión y mejorar la conversión.",
    websiteUrl: "https://www.bontoc.com",
    websiteLabel: "www.bontoc.com",

    // CONTEXTO
    context:
      "Una marca de regalos comestibles donde el valor está en la experiencia, no solo en el producto.",
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
      "No diseñamos solo una web, diseñamos cómo se toma la decisión de compra",
    approachItems: [
      "Simplificamos el proceso de compra",
      "Organizamos el contenido por momentos (regalos, celebraciones…)",
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
{

    slug: "prueba",

    // CARD
    cardTitle: "pagina prueba",
    cardCategory: "text",
    cardExcerpt:
      "lorem",
    coverImage: "/bon.png",

    // HERO
    pageTitle:
      "De una web que no ayudaba a decidir, a una experiencia que guía la compra.",
    pageIntro:
      "Ecommerce de regalos comestibles diseñado para facilitar la decisión y mejorar la conversión.",
    websiteUrl: "https://www.bontoc.es",
    websiteLabel: "www.prueba.es",

    // CONTEXTO
    context:
      "Una marca de regalos comestibles donde el valor está en la experiencia, no solo en el producto.",
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
      "No diseñamos solo una web, diseñamos cómo se toma la decisión de compra",
    approachItems: [
      "Simplificamos el proceso de compra",
      "Organizamos el contenido por momentos (regalos, celebraciones…)",
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
        src: "/sal.png",
        alt: "regalos",
      },
    ],

    // FINAL
    finalTitle:
      "Si vendes un producto, no necesitas solo una web. Necesitas una experiencia que convierta.",
  }






];