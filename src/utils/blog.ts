import { getCollection, type CollectionEntry } from 'astro:content'
import { dataSeccionesBlog } from '@/data/blog/dataSeccionesBlog'

export type Post = CollectionEntry<'blog'>

export interface GrupoCurso {
  curso: string
  ancla: string
  posts: Post[]
}

const CURSO_POR_DEFECTO = 'Apuntes generales'

/** "Curso de React: Hooks" -> "curso-de-react-hooks" (para anclas #id) */
export const slugify = (texto: string) =>
  texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

/*
 * Estructura de carpetas:
 *   src/content/blog/<seccion>/<entrada>/index.mdx
 * Astro genera el id "<seccion>/<entrada>" (quita /index y pasa a minúsculas),
 * así que la sección y la entrada salen de la carpeta, no del frontmatter.
 */

/** "diseñoGrafico/intro" -> "diseno-grafico" */
export const seccionDe = (post: Post) =>
  slugify(post.id.split('/')[0]).replace(/-grafico$/, '-grafico')

/** "javascript/use-state" -> "use-state" */
export const entradaDe = (post: Post) => post.id.split('/').slice(1).join('/')

/** Apuntes guardados dentro de la carpeta de una sección */
export const postsDeSeccion = (posts: Post[], slug: string) =>
  posts.filter(post => seccionDe(post) === slug && entradaDe(post) !== '')

/** URL de un artículo: /blog/<seccion>/<entrada> */
export const urlPost = (post: Post) => `/blog/${post.id}`

export const formatearFecha = (fecha: Date) =>
  fecha.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

/** Todos los apuntes con sección registrada, del más reciente al más antiguo */
export async function getPostsRecientes(cantidad?: number) {
  const slugs = dataSeccionesBlog.map(seccion => seccion.slug)
  const posts = (await getCollection('blog'))
    .filter(post => slugs.includes(seccionDe(post)) && entradaDe(post) !== '')
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
  return cantidad ? posts.slice(0, cantidad) : posts
}

/**
 * Agrupa los apuntes de una sección por curso/módulo, respetando
 * el orden en que aparece cada curso por primera vez.
 * Dentro de cada curso ordena por `orden` y, si no hay, por fecha.
 */
export function agruparPorCurso(posts: Post[]): GrupoCurso[] {
  const ordenados = [...posts].sort(
    (a, b) =>
      ((a.data as { orden?: number }).orden ?? Number.MAX_SAFE_INTEGER) -
        ((b.data as { orden?: number }).orden ?? Number.MAX_SAFE_INTEGER) ||
      a.data.pubDate.getTime() - b.data.pubDate.getTime(),
  )

  const grupos = new Map<string, Post[]>()
  for (const post of ordenados) {
    const curso = (post.data as { curso?: string }).curso ?? CURSO_POR_DEFECTO
    grupos.set(curso, [...(grupos.get(curso) ?? []), post])
  }

  return [...grupos].map(([curso, posts]) => ({
    curso,
    ancla: slugify(curso),
    posts,
  }))
}
