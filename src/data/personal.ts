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
  reference: string;
};

export const personalInfo: PersonalInfo = {
  name: "Gabriela Ferrer",
  title: "GRAPHIC DESIGN  |  UX / UI DESIGNER  |  FRONTEND DEVELOPER ",
  email: "gabriellangelesferrer@gmail.com",
  phone: "+57 321 3266303",
  location: "Pereira, Colombia",
  linkedin: "https://www.linkedin.com/in/gabriela-de-los-angeles-ferrer-martinez-8a45771a4/",
  github: "https://github.com/MorganSnape",
  website: "https://gabrielaferrer.vercel.app/",
  behance: "https://www.behance.net/gabriellangeles",
  birthDate: "2000",
  summary: "Soy una diseñadora en formación con un perfil multidisciplinario que integra Diseño Gráfico, UX/UI y Desarrollo Frontend. Mi experiencia previa en atención al cliente me enseñó a escuchar, empatizar y comprender las necesidades de las personas, habilidades que hoy aplico en cada proyecto que desarrollo.\n\n Disfruto convertir ideas en experiencias digitales completas: desde la identidad visual y la comunicación gráfica, hasta el diseño de interfaces centradas en el usuario y su implementación en la web. Me interesa especialmente el punto de encuentro entre creatividad y tecnología, donde el diseño no solo se ve bien, sino que también resuelve problemas y genera valor.\n\n Mi objetivo es seguir creciendo como profesional digital, participando en proyectos innovadores y aportando una visión integral que combina estrategia, diseño y desarrollo.",
  experiences: [
    {
      company: "KunturWing",
      position: "UI/UX Developer",
      date: "Nov 2024 - Oct 2025",
      description: [
        "Creación y mantenimiento del sistema de diseño alineado a la marca y escalable.",
        "Diseño del flujo de navegación enfocado en usabilidad y coherencia.",
        "Desarrollo de wireframes, mockups y prototipos de alta fidelidad junto al equipo de desarrollo.",
        "Diseño y desarrollo de la landing page del producto orientada a conversión.",
        "Diseño de la interfaz visual asegurando accesibilidad y consistencia visual.",
        "Aplicación de Design Thinking para crear soluciones centradas en el usuario."
      ],
      reference: "Eduardo Sanchez - CO del proyecto +57 318 3400992"
    },
  ],
  skills: [
    "UX/UI: Figma, Design Systems, UX Research, Wireframing y Prototipado",
    "Frontend: React, JavaScript, Astro, Tailwind CSS, HTML5/CSS3",
    "Herramientas Dev: Git, TypeScript (Básico), Optimización y Performance Web",
    "Diseño Visual: Adobe Creative Suite (Ai, Ps, Id), Branding, Teoría del Color y Tipografía"
  ],
  softSkills: [
    "Trabajo en equipo y comunicación asertiva",
    "Resolución analítica de problemas",
    "Empatía enfocada en el usuario",
    "Aprendizaje continuo y autodidacta"
  ],
  languages: ["Español (Nativo)", "Inglés (A2)"],
};