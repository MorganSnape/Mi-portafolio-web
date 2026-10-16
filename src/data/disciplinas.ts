import type { ImageMetadata } from 'astro'

import papeleriaMarca from '@/assets/proyectos/marca-personal/papeleria.webp'
import cajaDePelos from '@/assets/proyectos/depelos/caja-mockup-1.webp'
import calleLetsTalk from '@/assets/proyectos/lets-talk/mockup-calle.webp'
import portadaAmarilla from '@/assets/proyectos/portada-amarilla.webp'

/**
 * Un servicio de la sección "¿Qué puedo hacer por ti?".
 * Es informativo: no lleva a ningún enlace. La imagen solo ilustra el tipo de trabajo.
 */
export interface Disciplina {
  /** Nombre corto del servicio: "Identidad visual". */
  nombre: string
  /** Frase que aparece sobre la imagen. Cuenta qué gana la marca, no qué haces tú. */
  descripcion: string
  /** Imagen de ejemplo del servicio. */
  imagen: ImageMetadata
  /** Encuadre de la imagen con clases de Tailwind, por ejemplo "object-right". */
  encuadre?: string
  /** Color de la sombra de la vista previa. Usa los colores de tu marca. */
  acento?: string
}

export const disciplinas: Disciplina[] = [
  {
    nombre: 'Identidad visual',
    descripcion: 'Una marca con esencia: logo, paleta, tipografía y manual',
    imagen: papeleriaMarca,
    encuadre: 'object-[60%_center]',
    acento: 'var(--color-primary)',
  },
  {
    nombre: 'Packaging',
    descripcion: 'Empaques que se distinguen en el estante',
    imagen: cajaDePelos,
    encuadre: 'object-[30%_center]',
    acento: 'var(--color-pink)',
  },
  {
    nombre: 'Piezas para redes y campañas',
    descripcion: 'Contenido gráfico que hace que la gente se detenga',
    imagen: calleLetsTalk,
    encuadre: 'object-center',
    acento: 'var(--color-kournikova-500)',
  },
  {
    nombre: 'Diseño UX/UI',
    descripcion: 'Tu marca llevada a una experiencia digital fácil de usar',
    imagen: portadaAmarilla,
    encuadre: 'object-right',
    acento: 'var(--color-plant-green)',
  },
]
