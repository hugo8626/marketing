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
      " De One Page básica a web que genera reservas",
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
      "La estructura estaba frenando el crecimiento del negocio, no era un problema de diseño sino de estrategia.",
    problemItems: [
      "Una One Page no permitía desarrollar bien los contenidos ",
      "No posicionaba en Google para búsquedas clave ",
      "No transmitía la calidad real del espacio ",
      "No guiaba al usuario hacia la reserva ",
    ],

    // ENFOQUE
    approachText:
      "Pasamos de una One Page a una web pensada para crecer, rediseñando completamente la web y, sobre todo, replanteando su estructura.",
    approachItems: [
      "Creamos una web multipágina para mejorar el SEO",
      "Organizamos los contenidos para explicar mejor el negocio",
      "Priorizamos la experiencia visual para transmitir el espacio",
      "Diseñamos un recorrido claro enfocado en la reserva",
    ],

    // RESULTADO
    resultText:
      "Una web preparada para posicionar y generar reservas, que no solo refleja la experiencia del lugar sino que también está optimizada para atraer tráfico y convertirlo en clientes  ",
    resultItems: [
      "Imagen más profesional",
      "Mayor confianza del usuario",
      "Experiencia más clara",
      "Base sólida para crecer",
    ],
    finimg:"",
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
      " De no tener presencia online a una web que vende.",
    pageIntro:
      "Ecommerce de regalos comestibles diseñado para facilitar la decisión y mejorar la conversión.",
    websiteUrl: "https://www.bontoc.com",
    websiteLabel: "www.bontoc.com",

    // CONTEXTO
    context:
      "Bon Toc es un producto emocional donde el valor está en la experiencia de regalar, no solo en el producto, y necesitaba una web a la altura. El reto no era solo vender cajas, sino ayudar al usuario a elegir, conectar y tomar una decisión",
    pageDescription:
      "",

    // PROBLEMA
    objective:
      "No era solo no tener web, sino no tener un sistema que guiará al cliente y convirtiera el interés en ventas",
    problemItems: [
      "Cuando hay demasiadas opciones, elegir se vuelve difícil",
      "Sin una guía clara, el usuario duda o abandona",
      "El producto no conectaba a nivel emocional",
      "La decisión requería más esfuerzo del necesario",
    ],

    // ENFOQUE
    approachText:
      "Creamos una web pensada para facilitar la decisión de compra, no solo diseñando una página sino estructurando todo el proceso para guiar al cliente desde el interés hasta la conversión ",
    approachItems: [
      "Simplificamos el proceso de compra",
      "Organizamos el contenido por momentos",
      "Priorizamos claridad sobre saturación",
      "Eliminamos fricción en cada paso",
    ],

    // RESULTADO
    resultText:
      "Es una web que guía al usuario y facilita la compra, con una experiencia clara, cuidada y alineada con la marca, donde cada elemento —diseño, fotografía y mensaje— trabaja para transmitir valor, generar confianza y convertir visitas en clientes. ",
    resultItems: [
      "Experiencia de compra más clara",
      "Mayor facilidad de compra",
      "Mejor percepción del producto",
      "Web preparada para convertir",
    ],
    finimg:" ",
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