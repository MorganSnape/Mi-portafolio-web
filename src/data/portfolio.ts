import type { Proyect } from "@/models";

export const proyectosUX: Proyect[] = [
  {
    slug: "este-portafolio",
    name: "Este Portafolio",
    description: "Diseñé y desarrollé este proyecto personal como una plataforma para presentar mis proyectos, formación académica y habilidades técnicas, con el objetivo de transmitir no solo mi perfil profesional, sino también mi personalidad, estilo y enfoque creativo",
    imageUrl: "/images/portada-este-portafolio.webp",
    linkGit: "https://github.com/user/portfolio",
    linkWebsite: "https://miportfolio.dev",
    tags: ["Figma", "Figjam"],
    type: "UX"
  },
  {
    slug: "amarilla-garden",
    name: "Amarilla Garden",
    description: "Estoy desarrollando un proyecto pro bono para una tienda en línea especializada en la fabricación y venta de piezas decorativas en cemento. El objetivo fue ayudar a la marca a digitalizar su catálogo artesanal y abrir un nuevo canal de ventas a través de una plataforma intuitiva, moderna y accesible. ",
    imageUrl: "/images/Amarilla.webp",
    linkGit: "",
    linkWebsite: "https://www.amarillagarden.com",
    tags: ["Astro", "TypeScript", "Tailwind"],
    type: "UX"
  },
  {
    slug: "commet-app",
    name: "Commet.App",
    description: "Proyecto realizado como parte del curso Fundamentos de UX/UI, en el cual se aplicaron metodologías clave del diseño centrado en el usuario, incluyendo investigación de usuarios, design thinking, y prototipado en Figma.",
    imageUrl: "/images/Portada-Commet.webp",
    linkGit: "https://github.com/user/portfolio",
    linkWebsite: "https://miportfolio.dev",
    tags: ["Astro", "TypeScript", "Tailwind"],
    type: "UX"
  },
];
export const proyectosFront: Proyect[] = [
  {
    slug: "amarilla-garden",
    name: "Amarilla Garden",
    description: "Estoy desarrollando un proyecto pro bono para una tienda en línea especializada en la fabricación y venta de piezas decorativas en cemento. El objetivo fue ayudar a la marca a digitalizar su catálogo artesanal y abrir un nuevo canal de ventas a través de una plataforma intuitiva, moderna y accesible. ",
    imageUrl: "/images/Amarilla.webp",
    linkGit: "https://github.com/user/portfolio",
    linkWebsite: "https://www.amarillagarden.com/",
    tags: ["Astro", "TypeScript", "Tailwind"],
    type: "Front"
  },
  {
    slug: "encriptador-texto",
    name: "Encriptador de Texto",
    description: "Proyecto desarrollado como parte del Diplomado en Programación Frontend con JavaScript, en el cual se aplicaron principios fundamentales de desarrollo web moderno como Mobile First, junto con tecnologías clave: HTML5, CSS3, JavaScript, y herramientas de diseño como Figma.",
    imageUrl: "/images/portada-encriptador-texto.webp",
    linkPage: "",
    linkGit: "https://github.com/MorganSnape/Encriptador-Texto.git",
    linkWebsite: "https://encriptador-texto-liard.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Front"
  },
];

