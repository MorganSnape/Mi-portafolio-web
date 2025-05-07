export interface Proyect {
  slug: string;
  name: string;
  proyectType?: string;
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
  challenges?: ProyectChallenge[]|undefined;
  designPrinciples?:ProyectDesignPrinciple[];
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