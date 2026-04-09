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
  skills: string[];
  softSkills?: string[];
  languages?: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Gabriela Ferrer",
  title: "GRAPHIC DESING | UX / UI DESIGNER | FRONTEND DEVELOPER ",
  email: "gabriellangelesferrer@gmail.com",
  phone: "+57 321 3266303",
  location: "Pereira, Colombia",
  linkedin: "https://www.linkedin.com/in/gabriela-de-los-angeles-ferrer-martinez-8a45771a4/",
  github: "https://github.com/MorganSnape",
  website: "https://gabrielaferrer.vercel.app/",
  behance:"https://www.behance.net/gabriellangeles",
  birthDate: "2000",
  summary: "Vengo del mundo de la atención al cliente, donde aprendí que la empatía es la herramienta más poderosa para resolver problemas. Hoy, esa misma empatía es la que guía mi proceso como Diseñadora UX/UI y Desarrolladora Frontend. \n\n Me apasiona el reto de transformar una necesidad de negocio en un flujo de navegación fluido y, posteriormente, en una interfaz funcional y estética. Mi formación autodidacta y académica (SENA, Google, Oracle) me ha dado la versatilidad necesaria para adaptarme a equipos ágiles y proyectos de alto impacto, como mi reciente trabajo en el sistema de diseño para Mvp KunturWing. Estoy lista para dar mi siguiente paso profesional a través de mis pasantías de Diseño Gráfico mediante a un contrado de aprendizaje, aportando un valor agregado en diseño digital y tecnología",
  skills: [
    "Diseño de identidad visual",
    "Branding y marca",
    "Tipografía y jerarquía visual",
    "Teoría del color",
    "Diseño UX/UI",
    "Investigación de usuarios",
    "Creación de user personas",
    "Principios de usabilidad",
    "Wireframing",
    "Prototipado",
    "Creación de design systems",
    "Figma (diseño de interfaces)",
    "Adobe Creative Suite (Illustrator, Photoshop, InDesign)",
    "HTML5",
    "CSS",
    "Diseño responsive",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript básico",
    "React",
    "Astro",
    "Git",
    "Node.js básico",
    "Optimización y performance web"
  ],
  softSkills: [
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Resolución de problemas",
    "Pensamiento crítico",
    "Adaptabilidad al cambio",
    "Creatividad aplicada al diseño",
    "Gestión del tiempo",
    "Organización de tareas",
    "Empatía con el usuario",
    "Atención al detalle",
    "Proactividad",
    "Aprendizaje continuo",
    "Colaboración interdisciplinaria",
    "Liderazgo"
  ],
  languages: ["Español (Nativo)", "Inglés (A2)"]
};