export interface Proyect {
  type: ProyectType[];
  slug: string;
  specialTag?: string;
  nameProject: string;
  name: string;
  date: string;
  details?: ProyectDetail[];
  shortDescription: string;
  projectType?: string;
  brandDescription?: string;
  descriptionProject: string;
  objectiveBusiness?: string;
  objectiveUser?: string;
  research?: ProyectResearch;
  problemDefinition?: ProyectProblemDefinition;
  ideation?: ProyectIdeation;
  testing?: ProyectTesting;
  visualDesign?: ProyectVisualDesign;
  tags?: string[];
  frontPage: string;
  linkFigma?: string;
  linkGit?: string;
  linkWebsite?: string;
}

export interface ProyectDetail {
  label: string;
  value: string;
  icon: string;
}

export interface ProyectBenchmarkItem {
  title: string;
  description: string;
  image?: string;
}

export interface ProyectResearch {
  overview?: string;
  benchmark?: ProyectBenchmarkItem[];
  strengths?: string;
  opportunity?: string;
  image?: string;
}

export interface ProyectProblemDefinition {
  description?: string;
  userPersona?: string;
  personaImage?: string;
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
  kitUiImage?:string;
  mockupImage?:string;
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

export type ProyectType = "UX" | "Front";



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
}

export type { PersonalInfo } from '../data/personal';