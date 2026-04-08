export interface Proyect {
  type: ProyectType[]
  slug: string;
  specialTag?:string;
  nameProject: string;
  name: string;
  date: string;
  duration: string;
  constraints?: string;
  myRole: string;
  client: string;
  shortDescription: string; //Breve descripción del proyecto
  projectType?: string; // E-commers , app etc
  brandDescription?: string; // Descripción de la marca
  descriptionProject: string;
  tags?: string[];
  frontPage: string;
  linkFigma?: string;
  linkGit?: string;
  linkWebsite?: string;
}

export type ProyectChallenge = {
  name: string;
  description: string;
  solution: string;
};

export type ProyectDesignPrinciple = {
  name: string;
  description: string;
}

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