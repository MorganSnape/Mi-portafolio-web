export interface ProyectV2 {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  linkPage?: string;
  linkGit?: string;
  linkSite?: string;
  tags?: string[];
  type?: ProyectTypesValues;
}

export interface Proyect {
  slug: string;
  name: string;
  projectType: string;
  type?: ProyectTypesValues;
  description: string;
  tags?: string[];
  imageUrl: string;
  duration?: string;
  myRole?: string;
  client?: string;
  linkFigma?: string;
  linkGit?: string;
  linkWebsite?: string;
}
export enum ProyectTypes {
  UX = "UX",
  Front = "Front",
  undefined = "undefined",
}
export type ProyectTypesValues = `${ProyectTypes}`;

export interface Studies {
  title: string;
  institution?: string;
  descriptions: string[];
  link?: string;
  tags?: string[];
  duration?: string;
}