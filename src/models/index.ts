import type { ImageMetadata } from "astro";

export interface Proyect {
  type: ProyectType[];
  slug: string;
  specialTag?: string;
  nameProject: string;
  date: string;
  projectImagesList?: unknown[];
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