export interface Proyect {
  title: string;
  description: string;
  imageUrl: string;
  linkUX?: string;
  linkGit?: string;
  linkSite?: string;
  tags?: string[];
  type?: ProyectTypesValues;
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