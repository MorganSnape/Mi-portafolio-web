import type { Proyect } from "@/models";

import { amarillaGardenProyect } from "./amarillaGarden";
import { commetAppProyect } from "./commetApp";
// import { encriptadorTextoProyect } from "./encriptadorTexto";
import { marcaPersonalProyect } from "./marcaPersonal";
import { depelosProyect } from "./dePelos";

export const proyectos: Proyect[] = [
  amarillaGardenProyect,
  marcaPersonalProyect,
  depelosProyect
];