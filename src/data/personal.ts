export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
  birthDate?: string;
  summary: string;
  skills: string[];
  languages?: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Gabriela Ferrer",
  title: "GRAPHIC DESING | UX / UI DESIGNER | FRONTEND DEVELOPER ",
  email: "tu-email@example.com",
  phone: "+57 123 456 7890",
  location: "Pereira, Colombia",
  linkedin: "https://linkedin.com/in/tu-perfil",
  github: "https://github.com/tu-usuario",
  website: "https://tu-portafolio.com",
  birthDate: "1998",
  summary: "Vengo del mundo de la atención al cliente, donde aprendí que la empatía es la herramienta más poderosa para resolver problemas. Hoy, esa misma empatía es la que guía mi proceso como Diseñadora UX/UI y Desarrolladora Frontend. \n\n Me apasiona el reto de transformar una necesidad de negocio en un flujo de navegación fluido y, posteriormente, en una interfaz funcional y estética. Mi formación autodidacta y académica (SENA, Google, Oracle) me ha dado la versatilidad necesaria para adaptarme a equipos ágiles y proyectos de alto impacto, como mi reciente trabajo en el sistema de diseño para Mvp KunturWing. Estoy lista para dar mi siguiente paso profesional a través de mis pasantías de Diseño Gráfico mediante a un contrado de aprendizaje, aportando un valor agregado en diseño digital y tecnología",
  skills: [
    "UX/UI Design",
    "Figma",
    "Adobe Creative Suite",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Astro",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Investigación de Usuarios",
    "Prototipado",
    "Usabilidad"
  ],
  languages: ["Español (Nativo)", "Inglés (Intermedio)"]
};