export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  behance?: string;
  github?: string;
  website?: string;
  birthDate?: string;
  summary: string;
  experiences?: Experience[];
  skills: string[];
  softSkills?: string[];
  languages?: string[];
}

type Experience = {
  company: string;
  position: string;
  date: string;
  description: string[];
};

export const personalInfo: PersonalInfo = {
  name: "Gabriela Ferrer",
  title: "GRAPHIC DESIGN  |  UX / UI DESIGNER  |  FRONTEND DEVELOPER ",
  email: "gabriellangelesferrer@gmail.com",
  phone: "+57 321 3266303",
  location: "Pereira, Colombia",
  linkedin: "https://www.linkedin.com/in/gabrielaferrer-diseno-ux",
  github: "https://github.com/MorganSnape",
  website: "https://gabrielaferrer.vercel.app",
  behance: "https://www.behance.net/gabriellangeles",
  birthDate: "2000",
  summary: "Diseñadora multidisciplinaria con experiencia en UX/UI, diseño gráfico y desarrollo frontend. Combina pensamiento centrado en el usuario con capacidad de implementación técnica — desde la conceptualización visual hasta el desarrollo web. Ha liderado el diseño de sistemas y productos digitales en entornos reales, aportando una visión que integra estrategia, diseño y tecnología.",
  experiences: [
    {
      company: "KunturWing",
      position: "UI/UX Developer",
      date: "Nov 2024 - Oct 2025",
      description: [
        "Creé la identidad visual de la marca, definiendo paleta de color, tipografía, logotipo y lineamientos de uso.",
        "Diseñé y mantuve el sistema de diseño de la marca, garantizando escalabilidad y consistencia visual en todos los productos.",
        "Definí el flujo de navegación del producto priorizando usabilidad y coherencia en cada punto de contacto.",
        "Desarrollé wireframes, mockups y prototipos de alta fidelidad en colaboración directa con el equipo de desarrollo.",
        "Apliqué metodologías de Design Thinking para traducir necesidades del usuario en interfaces accesibles y funcionales.",
      ],
    },
  ],
  skills: [
    "UX/UI: Figma, Design Systems, UX Research, Wireframing y Prototipado",
    "Frontend: React, JavaScript, Astro, Tailwind CSS, HTML5/CSS3",
    "Herramientas Dev: Git, TypeScript (Básico), Optimización y Performance Web",
    "Diseño Visual: Adobe Creative Suite (Ai, Ps, Id), Branding, Teoría del Color y Tipografía"
  ],
  // languages: ["Español (Nativo)", "Inglés (B1)"],
};