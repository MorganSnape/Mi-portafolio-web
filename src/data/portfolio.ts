import type { Proyect, Studies } from "@/models";

export const proyectosUX: Proyect[] = [
  {
    title: "Este Portafolio",
    description: "Diseñé y desarrollé este proyecto personal como una plataforma para presentar mis proyectos, formación académica y habilidades técnicas, con el objetivo de transmitir no solo mi perfil profesional, sino también mi personalidad, estilo y enfoque creativo",
    imageUrl: "/images/portada-este-portafolio.webp",
    linkUX: "/images/Amarilla.webp",
    linkGit: "https://github.com/user/portfolio",
    linkSite: "https://miportfolio.dev",
    tags: ["Figma", "Figjam"],
    type: "UX"
  },
  {
    title: "Amarilla Garden",
    description: "Estoy desarrollando un proyecto pro bono para una tienda en línea especializada en la fabricación y venta de piezas decorativas en cemento. El objetivo fue ayudar a la marca a digitalizar su catálogo artesanal y abrir un nuevo canal de ventas a través de una plataforma intuitiva, moderna y accesible. ",
    imageUrl: "/images/Amarilla.webp",
    linkUX: "",
    linkGit: "",
    linkSite: "https://www.amarillagarden.com",
    tags: ["Astro", "TypeScript", "Tailwind"],
    type: "UX"
  },
  {
    title: "Commet.App",
    description: "Proyecto realizado como parte del curso Fundamentos de UX/UI, en el cual se aplicaron metodologías clave del diseño centrado en el usuario, incluyendo investigación de usuarios, design thinking, y prototipado en Figma.",
    imageUrl: "/images/Portada-Commet.webp",
    linkUX: "",
    linkGit: "https://github.com/user/portfolio",
    linkSite: "https://miportfolio.dev",
    tags: ["Astro", "TypeScript", "Tailwind"],
    type: "UX"
  },
];
export const proyectosFront: Proyect[] = [
  {
    title: "Amarilla Garden",
    description: "Estoy desarrollando un proyecto pro bono para una tienda en línea especializada en la fabricación y venta de piezas decorativas en cemento. El objetivo fue ayudar a la marca a digitalizar su catálogo artesanal y abrir un nuevo canal de ventas a través de una plataforma intuitiva, moderna y accesible. ",
    imageUrl: "/images/Amarilla.webp",
    linkUX: "/images/Amarilla.webp",
    linkGit: "https://github.com/user/portfolio",
    linkSite: "https://miportfolio.dev",
    tags: ["Astro", "TypeScript", "Tailwind"],
    type: "Front"
  },
  {
    title: "Encriptador de Texto",
    description: "Proyecto desarrollado como parte del Diplomado en Programación Frontend con JavaScript, en el cual se aplicaron principios fundamentales de desarrollo web moderno como Mobile First, junto con tecnologías clave: HTML5, CSS3, JavaScript, y herramientas de diseño como Figma.",
    imageUrl: "/images/portada-encriptador-texto.webp",
    linkUX: "",
    linkGit: "https://github.com/MorganSnape/Encriptador-Texto.git",
    linkSite: "https://encriptador-texto-liard.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Front"
  },
];

export const estudios: Studies[] = [
  {
  title: "Diseño de experiencia del usuario (UX) de Google",
  institution: "Certificado profesional de Google + Coursera",
  descriptions: [
    "Fundamentos del diseño de experiencia de usuario. ",
    "Procesos de diseño, tipos de frameworks",
    "Construir esquemas de página y prototipos. "
  ],
  link: "",
  tags: ["Figma", "Investigación", "Usabilidad", "UI", "Prototipado"],
  duration: "En curso"
},
{
  title: "Programa especializado: Diseño gráfico",
  institution: "Programa de Calarts + Coursera",
  descriptions: [
    "Aprendí teoría del color y composición visual.",
    "Comunicación mediante tipografías e imágenes.",
    "Trabajo en diseño de interfaces, gráficos en movimiento y diseño editorial."
  ],
  link: "",
  tags: ["Teoría color", "Identidad marca", "Branding esencial", "Jerarquía visual"],
  duration: "En curso"
},
{
  title: "Programación en Javascript Frontend",
  institution: "Diplomado de Oracle + Alura Latam",
  descriptions: [
    "Implementé componentes interactivos con JavaScript Vanilla",
    "Apliqué principios de Mobile First en proyectos web",
    "Maqueté interfaces con HTML5 y CSS3",
    "Desarrollé prácticas con enfoque en accesibilidad"
  ],
  link: "https://drive.google.com/file/d/1KhzrS3UDrZL9FtRwEp27Hkt29dVMxF_q/view?usp=sharing",
  tags: ["HTML", "CSS", "JavaScript", "React",],
  duration: "Finalizado 01/2025"
},
{
  title: "Fundamentos de UX / UI",
  institution: "Universidad Católica de Pereira",
  descriptions: [
    "Comprendí principios básicos de diseño centrado en el usuario",
    "Utilicé Figma para prototipar interfaces funcionales",
    "Apliqué metodologías de Design Thinking en casos reales",
    "Diseñé flujos de navegación enfocados en usabilidad"
  ],
  link: "https://drive.google.com/file/d/1-QLGSproo1hez7vZuZ6IewhymdjwRwHW/view?usp=sharing",
  tags: ["UX", "UI", "Figma", "Design Thinking"],
  duration: "Finalizado 03/2024"
},
{
  title: "Introducción al UX Research y UX Writing",
  institution: "Universidad Católica de Pereira",
  descriptions: [
    "Planifique investigaciones centradas en el usuario",
    "Análisis e Interpretación de Datos",
    "Aprendí a definir tono y voz de marca",
    "Apliqué métodos de investigación como encuestas y testeo",
    "Construí mapas de empatía para entender al usuario"
  ],
  link: "https://drive.google.com/file/d/1Hz7hTiqsr4FSG0q3E1AWKK6Fx50LFpdu/view?usp=drive_link",
  tags: ["UX Research", "UX Writing", "Investigación", "Mapas de empatía","User persons","Storytelling"],
  duration: "Finalizado 05/2024"
}
];