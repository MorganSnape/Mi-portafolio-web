import type { ImageMetadata } from "astro";

export interface Proyect {
  type: ProyectType[];
  slug: string;
  specialTag?: string;
  nameProject: string;
  date: string;
  projectImagesList?: { src: ImageMetadata; alt: string }[];
  details?: ProyectDetail[];
  shortDescription: string;
  projectType?: string;
  brandDescription?: string;
  descriptionProject: string;
  objectiveBusiness?: string | string[];
  objectiveUser?: string | string[];
  research?: ProyectResearch;
  problemDefinition?: ProyectProblemDefinition;
  ideation?: ProyectIdeation;
  testing?: ProyectTesting;
  visualDesign?: ProyectVisualDesign;
  tags?: string[];
  coverImage: ImageMetadata;
  coverFit?: "cover" | "contain";
  coverPosition?: string;
  linkFigma?: string;
  linkGit?: string;
  linkWebsite?: string;

  // ── Caso de estudio (todos opcionales) ──
  /** Colores de la marca del proyecto. Se usan con moderación como acento. */
  brand?: ProyectBrand;
  /** Tu rol en una frase corta, por ejemplo "Diseñadora de marca y empaque". */
  role?: string;
  /** Detalle del rol: qué hiciste. */
  roleSummary?: string;
  /** Programas que usaste. */
  tools?: string[];
  /** El problema o reto del proyecto, en un párrafo. */
  challenge?: string;
  /** Los capítulos del caso. Si no hay, se muestran research, ideation, etc. */
  chapters?: CaseChapter[];
  /** Lo que aprendiste. Se muestra en el epílogo. */
  learnings?: string | string[];
  /** Próximos pasos del proyecto. Se muestran en el epílogo. */
  nextSteps?: string | string[];
}

/**
 * Colores de la marca del proyecto.
 * - primary: el color más reconocible de la marca.
 * - surface (opcional): un tono claro para el fondo de la portada.
 * El color del texto encima de la marca se calcula solo para que siempre sea legible.
 */
export interface ProyectBrand {
  primary: string;
  surface?: string;
  headingFont?: string;
  fontHref?: string;
}

/** Un capítulo del caso: agrupa varios bloques bajo un mismo tema. */
export interface CaseChapter {
  title: string;
  intro?: string;
  id?: string;
  blocks: CaseBlock[];
}

export interface CaseImage {
  /** Una imagen importada (src/assets) o una ruta de la carpeta public, por ejemplo "/images/mapa.png". */
  src: ImageMetadata | string;
  alt: string;
  caption?: string;
}

interface CaseBlockBase {
  /** Si el bloque tiene título, aparece como subtema en el índice de capítulos. */
  title?: string;
  /** Texto corto debajo del título. */
  intro?: string;
  /** Id manual para el ancla. */
  id?: string;
}

/** Bloques para armar cada capítulo, en el orden que quieras. */
export type CaseBlock =
  /** Párrafos de texto: un string o una lista de párrafos. */
  | (CaseBlockBase & { type: "text"; body: string | string[] })
  /** Frase destacada: el concepto, el hallazgo clave, una cita. */
  | (CaseBlockBase & { type: "highlight"; label?: string; text: string })
  /** Una imagen. */
  | (CaseBlockBase & { type: "image"; image: CaseImage })
  /** Varias imágenes en cuadrícula, cada una con su pie de foto opcional. */
  | (CaseBlockBase & { type: "gallery"; images: CaseImage[]; columns?: 1 | 2 | 3 })
  /** Tarjetas: etapas, hallazgos, user personas, competidores, tareas de prueba. */
  | (CaseBlockBase & {
      type: "cards";
      columns?: 2 | 3 | 4;
      /** Muestra un número en cada tarjeta, útil para etapas o pasos. */
      numbered?: boolean;
      items: { title: string; meta?: string; text?: string; image?: CaseImage }[];
    })
  /** Columnas de listas, por ejemplo: Lo que funcionó / Lo que no / Sugerencias. */
  | (CaseBlockBase & { type: "columns"; items: { title: string; items: string[] }[] })
  /** Dos imágenes que se alternan con botones: troquel/diseño, antes/después. */
  | (CaseBlockBase & {
      type: "compare";
      items: [CaseImage & { label: string }, CaseImage & { label: string }];
    })
  /** Paleta de color. Al hacer clic en un color se copia su código. */
  | (CaseBlockBase & {
      type: "palette";
      colors: { name?: string; hex: string; rgb?: string; cmyk?: string }[];
    })
  /** Tipografías de la marca. */
  | (CaseBlockBase & {
      type: "typography";
      fonts: { role: string; family: string; weight?: number; sample?: string }[];
    })
  /** Especificaciones técnicas: medidas, material, técnica de impresión. */
  | (CaseBlockBase & {
      type: "specs";
      items: { label: string; value: string }[];
      image?: CaseImage;
    })
  /** Lista de puntos. */
  | (CaseBlockBase & { type: "list"; items: string[] })
  /** Cifras de resultado. */
  | (CaseBlockBase & { type: "stats"; items: { value: string; label: string }[] })
  /** Video guardado en la carpeta public, por ejemplo "/videos/prototipo.mp4". */
  | (CaseBlockBase & { type: "video"; src: string; poster?: ImageMetadata; caption?: string });

export interface ProyectDetail {
  label: string;
  value: string;
  icon: string;
}

export interface ProyectBenchmarkItem {
  title: string;
  competitionType: string;
  description: string;
  image?: string;
}

export interface UserPersona {
  decription: string;
  image: string;
}

export interface ProyectResearch {
  overview?: string;
  benchmark?: ProyectBenchmarkItem[];
  strengths?: string;
  opportunity?: string;
  image?: string;
  userPersona?: UserPersona;
}

export interface ProyectProblemDefinition {
  description?: string;
  userPersona?: string;
  personaImage?: string;
  businessObjective?: string;
  painPoints?: string[];
  insight?: string;
  summaryTitle?: string;
  summary?: string;
}

export interface ProyectIdeation {
  overview?: string;
  sitemapImage?: string;
  userFlowImage?: string;
  sketchImage?: string;
  wireframeImage?: string;
}

export interface ProyectTesting {
  summary?: string;
}

export interface ProyectVisualDesign {
  kitUiImage?: string;
  mockupImage?: string;
  video?: string;
}

export type ProyectChallenge = {
  name: string;
  description: string;
  solution: string;
};

export type ProyectDesignPrinciple = {
  name: string;
  description: string;
};

export type ProyectType = "UX" | "Front" | "Diseño";



// export enum ProyectTypes {
//   UX = "UX",
//   Front = "Front",
//   undefined = "undefined",
// }

// export type ProyectTypesValues = `${ProyectTypes}`;

export interface Studies {
  title: string;
  institution?: string;
  descriptions: string[];
  link?: string;
  tags?: string[];
  duration?: string;
  logo?: string;
}

export type { PersonalInfo } from '../data/personal';

export type NavLinksType = {
  name: string;
  href: string;
};

export interface SectionBlogType {
  title: string;
  description: string;
  image: string;
  slug: 'javascript' | 'diseñoGrafico' | 'react';
}