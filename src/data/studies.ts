
import type { Studies } from "@/models";

export const estudios: Studies[] = [
  {
    title: "Carrera tecnológica Diseño Gráfico",
    institution: "Servicio Nacional de Aprendizaje (SENA)",
    descriptions: [
      "Color, composición y jerarquía visual",
      "Narrativa visual e ilustración",
      "Diseño para medios digitales e impresos",
      "Adobe Creative Suite para producción gráfica",
      "Desarrollo de identidad y branding",
      "Metodologías creativas para soluciones visuales"
    ],
    link: "",
    tags: ["Diseño Gráfico", "Branding", "Ilustración", "Composición", "Teoría del color"],
    duration: "En curso",
    logo: "/images/logos/sena.webp"
  },
  {
    title: "Certificado Profesional de Diseño UX de Google",
    institution: "Google + Coursera",
    descriptions: [
      "Frameworks UX para productos digitales",
      "Investigación de usuarios y hallazgos",
      "Wireframes, flujos y prototipos",
      "Interfaces accesibles y usables",
      "Pruebas de usabilidad con iteración"
    ],
    link: "",
    tags: ["Figma", "UX Research", "Usabilidad", "Prototipado", "Accesibilidad"],
    duration: "En curso",
    logo: "/images/logos/google.webp"
  },
  {
    title: "Programación JavaScript Frontend",
    institution: "Oracle + Alura Latam",
    descriptions: [
      "Interfaces dinámicas con JavaScript",
      "Maquetación HTML5/CSS3 Mobile First",
      "Lógica de programación para aplicaciones web",
      "Optimización de accesibilidad y rendimiento"
    ],
    tags: ["HTML", "CSS", "JavaScript", "React"],
    duration: "Finalizado 01/2025",
    logo: "/images/logos/alura+oracle.webp"
  },
  {
    title: "Especialización en UX Research y UX Writing",
    institution: "Universidad Católica de Pereira",
    descriptions: [
      "Investigación con usuarios y análisis de datos",
      "Estrategia de tono y voz de marca",
      "Mapas de empatía, personas y journeys",
      "Design Thinking para flujos usables"
    ],
    tags: ["UX Research", "UX Writing", "Design Thinking", "Storytelling"],
    duration: "Finalizado 2024",
    logo: "/images/logos/u-catolica.webp"
  }
];