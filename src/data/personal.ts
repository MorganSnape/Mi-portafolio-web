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
  title: "GRAPHIC DESIGN | UX / UI DESIGNER | FRONTEND DEVELOPER ",
  email: "gabriellangelesferrer@gmail.com",
  phone: "+57 321 3266303",
  location: "Pereira, Colombia",
  linkedin: "https://www.linkedin.com/in/gabriela-de-los-angeles-ferrer-martinez-8a45771a4/",
  github: "https://github.com/MorganSnape",
  website: "https://gabrielaferrer.vercel.app/",
  behance: "https://www.behance.net/gabriellangeles",
  birthDate: "2000",
  summary: "Vengo del mundo de la atención al cliente, donde aprendí que la empatía es la herramienta más poderosa para resolver problemas. Hoy, esa misma empatía es la que guía mi proceso como Diseñadora UX/UI y Desarrolladora Frontend. \n\n Me apasiona el reto de transformar una necesidad de negocio en un flujo de navegación fluido y, posteriormente, en una interfaz funcional y estética. Mi formación autodidacta y académica (SENA, Google, Oracle) me ha dado la versatilidad necesaria para adaptarme a equipos ágiles y proyectos de alto impacto, como mi reciente trabajo en el sistema de diseño para Mvp KunturWing. Estoy lista para dar mi siguiente paso profesional a través de mis pasantías de Diseño Gráfico mediante a un contrato de aprendizaje, aportando un valor agregado en diseño digital y tecnología",
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
  languages: ["Español (Nativo)", "Inglés (A2)"]
};