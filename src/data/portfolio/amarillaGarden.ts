import type { Proyect } from "@/models";

import Portada from "@/assets/proyectos/portada-amarilla.webp";

export const amarillaGardenProyect: Proyect = {
  type: ["UX"],
  slug: "amarilla-garden",
  date: "3 de Marzo del 2026",
  nameProject: "Amarilla Garden e-commerce",
  shortDescription: "Crear una tienda E-commerce para una empresa de decoraciones.",
  projectType: "E-commerce",
  details: [
    { label: "Empresa", value: "Amarilla Garden", icon: "bxs:briefcase" },
    { label: "My rol", value: "Diseñador UX/UI", icon: "bxs:user" },
    { label: "Duración", value: "En proceso", icon: "bxs:time" },
    { label: "Tipo de proyecto", value: "E-commerce", icon: "bxs:briefcase" },
    { label: "Cliente", value: "Proyecto pro-bono", icon: "bxs:briefcase" },
  ],
  brandDescription: "Amarilla Garden es una marca artesanal con 5 años de evolución, que inició vendiendo suculentas y expandió su oferta a piezas de concreto y velas hechas a mano. Se destaca por ofrecer productos 100% artesanales y experiencias a través de talleres creativos.",
  descriptionProject: "Proyecto pro-bono enfocado en crear un e-commerce para digitalizar el catálogo de la marca y abrir un nuevo canal de ventas. El objetivo fue mantener su esencia artesanal mediante una experiencia moderna, accesible e intuitiva, facilitando la compra, atrayendo nuevos clientes y promoviendo sus talleres.\n\n Como única diseñadora UX/UI, participé en investigación con stakeholders, ideación, iteración de propuestas y validación con usuarios.",
  objectiveBusiness: "Digitalizar el catálogo artesanal y abrir un canal de venta online que preserve la experiencia de marca.",
  objectiveUser: "Facilitar a los clientes la compra de productos hechos a mano mediante un recorrido claro, visual y seguro.",
  research: {
    overview: "Se realizó una investigación cualitativa y cuantitativa a través de encuestas con el objetivo de comprender la percepción de la clientela de Amarilla Garden tanto sobre la marca como sobre el uso de una página web como canal de compra. A partir de esta investigación, se identificaron puntos de dolor, oportunidades de mejora, necesidades de contenido y los principales usos esperados de la plataforma.\n\n De forma complementaria, se desarrolló un análisis competitivo que permitió evaluar la competencia directa e indirecta, identificar sus fortalezas y debilidades, y reconocer oportunidades estratégicas para el posicionamiento de la marca en el entorno digital.",
    benchmark: [
      {
        title: "Simetriadeco",
        competitionType: "Competencia directa",
        description: "Fabrica de velas con mensajes personalizados con aroma",
        image: "/images/proyectos/amarilla/simetria.jpg",
      },
      {
        title: "Ornamental",
        competitionType: "Competencia directa",
        description: "Fabrica de velas de cera vegetal , wax ment y ambientadores.",
        image: "/images/proyectos/amarilla/ornamental.jpg",
      },
      {
        title: "Meiso",
        competitionType: "Competencia indirecta",
        description: "Fabrica de decoraciones de concreto ;materas, mobiliario, jarrones",
        image: "/images/proyectos/amarilla/meiso.jpg",
      },
    ],
    strengths: "Valor artesanal claro, productos únicos y taller creativo como diferenciador.",
    opportunity: "Mejorar la claridad del catálogo y el proceso de compra para reducir la fricción en compradores indecisos.",
    userPersona: {
      decription: "Basándome en los resultados de la encuenta, creé nuestra persona de usuario, Elena Giraldo.",
      image: "/images/proyectos/amarilla/userPersonaAmarilla.png",
    },
    image: "/images/proyectos/amarilla/investigacionAmarilla.png",
  },
  problemDefinition: {
    description: "Los visitantes no encuentran un camino de compra claro ni información completa de materiales, lo que dificulta la decisión y reduce la conversión.",
    userPersona: "Compradora creativa que busca piezas artesanales únicas para su hogar.",
    businessObjective: "Diseñar un e-commerce que refleje la identidad artesanal de Amarilla Garden y acompañe al usuario en una experiencia de compra clara y confiable.",
    painPoints: [
      "Los visitantes no encuentran un camino de compra claro.",
      "Falta información detallada de materiales y dimensiones en los productos.",
      "La experiencia actual no transmite la calidad artesanal de la marca.",
      "El proceso de navegación no ayuda a diferenciar categorías y colecciones.",
      "El checkout no comunica seguridad ni las opciones de envío disponibles."
    ],
    insight: "El e-commerce debe conectar emocionalmente con el usuario mostrando la historia artesanal y la transparencia del producto para generar confianza en la compra online.",
    summaryTitle: "Oportunidad estratégica",
    summary: "Mejorar la claridad del catálogo y la comunicación de materiales permitirá que los visitantes comprendan rápidamente el valor del producto y se sientan seguros para completar la compra.",
  },
  // ideation: {
  //   overview: "Generamos una estructura con categorías concretas, fichas visuales y un checkout accesible para un público menos técnico.",
  //   sitemapImage: "/src/assets/proyectos/amarilla/sideMapAmarilla.png",
  //   userFlowImage: "/images/BaseImagen.jpg",
  //   sketchImage: "/images/BaseImagen.jpg",
  //   wireframeImage: "/images/BaseImagen.jpg",
  // },
  // testing: {
  //   summary: "Evaluamos la navegación con usuarios para asegurar que encuentren productos en menos de 3 pasos y comprendan fácilmente las opciones de envío.",
  // },
  // visualDesign: {
  //   kitUiImage: "/images/BaseImagen.jpg",
  //   mockupImage: "/images/BaseImagen.jpg",
  //   video: "/videos/videoEjemplo.mp4",
  // },
  coverImage: Portada,
  linkWebsite: "https://www.amarillagarden.com",
  linkGit: "https://github.com/user/portfolio",
  tags: ["UX/UI", "Figma", "FigJam", "Astro", "TypeScript", "Tailwind"],
};
