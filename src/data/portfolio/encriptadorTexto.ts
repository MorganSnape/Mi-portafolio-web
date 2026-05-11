import type { Proyect } from "@/models";
import Portada from "@/assets/proyectos/portada-encriptador-texto.webp";


export const encriptadorTextoProyect: Proyect = {
  type: ["Front"],
  slug: "encriptador-texto",
  nameProject: "Encriptador de Texto",
  date: "Diciembre del 2024",
  projectType: "Web App",
  details: [
    { label: "Empresa", value: "Encriptador de Texto", icon: "bxs:briefcase" },
    { label: "My rol", value: "Desarrollador Front End", icon: "bxs:user" },
    { label: "Duración", value: "1 mes", icon: "bxs:time" },
    { label: "Tipo de proyecto", value: "Web App", icon: "bxs:briefcase" },
    { label: "Cliente", value: "Gabriela Ferrer", icon: "bxs:briefcase" },
  ],
  shortDescription: "Desarrollo de un encriptador y desencriptador del mismo texto",
  descriptionProject: "Proyecto desarrollado como parte del Diplomado en Programación Frontend con JavaScript, en el cual se aplicaron principios fundamentales de desarrollo web moderno como Mobile First, junto con tecnologías clave: HTML5, CSS3, JavaScript, y herramientas de diseño como Figma.",
  objectiveBusiness: "Demostrar habilidades de Front End con una herramienta interactiva de cifrado y descifrado.",
  objectiveUser: "Ofrecer una interfaz sencilla para encriptar y desencriptar texto sin pasos técnicos complejos.",
  coverImage: Portada,
  linkGit: "https://github.com/MorganSnape/Encriptador-Texto.git",
  linkWebsite: "https://encriptador-texto-liard.vercel.app/",
  tags: ["HTML", "CSS", "JavaScript"],
};
