import type { CaseBlock, CaseChapter, Proyect } from '@/models'

/**
 * Convierte los campos antiguos (research, problemDefinition, ideation, testing,
 * visualDesign y projectImagesList) en capítulos con la nueva estructura.
 * Así los proyectos que aún no migras se ven con el diseño nuevo sin tocar sus datos.
 */
export function legacyToChapters(p: Proyect): CaseChapter[] {
  const chapters: CaseChapter[] = []
  const compact = (blocks: (CaseBlock | false | undefined | '')[]) =>
    blocks.filter(Boolean) as CaseBlock[]

  const r = p.research
  if (r) {
    chapters.push({
      title: 'Investigación',
      blocks: compact([
        r.overview && { type: 'text', body: r.overview },
        r.image && { type: 'image', image: { src: r.image, alt: 'Resultados de la investigación' } },
        !!r.benchmark?.length && {
          type: 'cards',
          title: 'Análisis de la competencia',
          items: r.benchmark.map(b => ({
            title: b.title,
            meta: b.competitionType,
            text: b.description,
            image: b.image ? { src: b.image, alt: b.title } : undefined,
          })),
        },
        r.strengths && { type: 'text', title: 'Fortalezas', body: r.strengths },
        r.opportunity && { type: 'highlight', label: 'Oportunidad', text: r.opportunity },
        r.userPersona && {
          type: 'cards',
          title: 'User persona',
          columns: 2,
          items: [
            {
              title: 'User persona',
              text: r.userPersona.decription,
              image: r.userPersona.image ? { src: r.userPersona.image, alt: 'User persona' } : undefined,
            },
          ],
        },
      ]),
    })
  }

  const d = p.problemDefinition
  if (d) {
    chapters.push({
      title: 'Definición del problema',
      blocks: compact([
        d.description && { type: 'text', body: d.description },
        d.userPersona && {
          type: 'cards',
          title: 'User persona',
          columns: 2,
          items: [
            {
              title: 'User persona',
              text: d.userPersona,
              image: d.personaImage ? { src: d.personaImage, alt: 'User persona' } : undefined,
            },
          ],
        },
        !!d.painPoints?.length && { type: 'list', title: 'Puntos de dolor', items: d.painPoints },
        d.insight && { type: 'highlight', label: 'Hallazgo clave', text: d.insight },
        d.summary && { type: 'text', title: d.summaryTitle ?? 'El problema', body: d.summary },
      ]),
    })
  }

  const i = p.ideation
  if (i) {
    const img = (src: string | undefined, title: string) =>
      src && ({ type: 'image', title, image: { src, alt: title } } as CaseBlock)
    chapters.push({
      title: 'Ideación',
      blocks: compact([
        i.overview && { type: 'text', body: i.overview },
        img(i.sitemapImage, 'Mapa del sitio'),
        img(i.userFlowImage, 'Flujo de usuario'),
        img(i.sketchImage, 'Bocetos'),
        img(i.wireframeImage, 'Wireframes'),
      ]),
    })
  }

  if (p.testing?.summary) {
    chapters.push({
      title: 'Pruebas con usuarios',
      blocks: [{ type: 'text', body: p.testing.summary }],
    })
  }

  const v = p.visualDesign
  if (v) {
    chapters.push({
      title: 'Diseño visual',
      blocks: compact([
        v.kitUiImage && { type: 'image', title: 'Kit de UI', image: { src: v.kitUiImage, alt: 'Kit de UI del proyecto' } },
        v.mockupImage && { type: 'image', title: 'Pantallas finales', image: { src: v.mockupImage, alt: 'Pantallas finales del proyecto' } },
        v.video && { type: 'video', title: 'Prototipo', src: v.video },
      ]),
    })
  }

  if (p.projectImagesList?.length) {
    chapters.push({
      title: 'Galería',
      blocks: [{ type: 'gallery', columns: 1, images: p.projectImagesList }],
    })
  }

  return chapters.filter(chapter => chapter.blocks.length > 0)
}
