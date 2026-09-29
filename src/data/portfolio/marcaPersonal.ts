import type { Proyect } from "@/models";
import type { ImageMetadata } from "astro";
import Portada from "@/assets/proyectos/marcaPersonalGaby/portada-proyecto.webp";

const imagesManualMarcaGaby = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    "@/assets/proyectos/marcaPersonalGaby/presentacion/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
    }
  )
).map(([path, module]) => {
  const slideTitle =
    path
      .split("/")
      .pop()
      ?.replace(/^\d+\s*/, "")
      .replace(/\s*@2x\.(png|jpe?g|webp)$/i, "")
      .trim() ?? "Lámina";

  return {
    src: module.default,
    alt: `${slideTitle} del manual de identidad visual de Gabriela Ferrer`,
  };
});

export const marcaPersonalProyect: Proyect = {
  type: ["Diseño"],
  slug: "marca-personal-gabriela",
  nameProject: "Marca Gabriela",
  date: "Mayo 2026",
  projectType: "Identidad visual",
  projectImagesList: imagesManualMarcaGaby,
  details: [
    { label: "Empresa", value: "Encriptador de Texto", icon: "bxs:briefcase" },
    { label: "My rol", value: "Diseñadora Gráfica", icon: "bxs:user" },
    { label: "Duración", value: "1 mes", icon: "bxs:time" },
    { label: "Tipo de proyecto", value: "Identidad de marca", icon: "bxs:briefcase" },
    { label: "Cliente", value: "Gabriela Ferrer", icon: "bxs:briefcase" },
  ],
  shortDescription: "La marca personal de Gabriela Ferrer representa la integración entre diseño gráfico, UX/UI y desarrollo front-end desde un enfoque creativo y funcional. Su identidad visual combina estética neobrutalista, retículas y referencias al código para transmitir una imagen moderna, cercana y en constante evolución.",
  descriptionProject: "Este proyecto consistió en el desarrollo de la identidad visual y manual de marca personal de Gabriela Ferrer. El objetivo fue construir una marca que reflejara sus habilidades multidisciplinarias en diseño y desarrollo digital, manteniendo una comunicación clara, creativa y coherente en diferentes plataformas.",
  objectiveBusiness: [
    "Construir una identidad visual reconocible y profesional.",
    "Comunicar habilidades en diseño gráfico, UX/UI y desarrollo front-end.",
    "Fortalecer la presencia digital y oportunidades profesionales.",
    "Mantener consistencia visual en portafolio y redes sociales.",
  ],
  objectiveUser: [
    "Facilitar la comprensión del perfil profesional y habilidades.",
    "Transmitir una experiencia visual clara y atractiva.",
    "Generar cercanía mediante una comunicación auténtica y creativa.",
    "Crear una experiencia memorable a través de elementos visuales distintivos.",
  ],
  coverImage: Portada,
  tags: ["Diseño gráfico", "Identidad visual", "Manual de marca"],
}
