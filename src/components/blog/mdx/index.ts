import BrowserCodeBlock from './BrowserCodeBlock.astro'
import DataTable from './DataTable.astro'
import Formula from './Formula.astro'
import InfoCard from './InfoCard.astro'
import PageDivider from './PageDivider.astro'
import PhotoFrame from './PhotoFrame.astro'
import PhotoNote from './PhotoNote.astro'
import Repaso from './Repaso.astro'
import SubtitleBlog from './SubtitleBlog.astro'
import SubtitleSection from './SubtitleSection.astro'
import TwoColumns from './TwoColumns.astro'
import VideoFrame from './VideoFrame.astro'

/**
 * Se pasa una sola vez a <Content components={componentesMdx} />.
 * Ningún archivo .mdx necesita importar estos componentes.
 */
export const componentesMdx = {
  // Markdown normal -> componente con tu estilo
  pre: BrowserCodeBlock, // ```js ... ```
  table: DataTable, //      | A | B |
  hr: PageDivider, //       ---
  img: PhotoFrame, //       ![alt](./foto.jpg)
  h2: SubtitleBlog, //      ## Título
  h3: SubtitleSection, //   ### Título
 
  // Disponibles por nombre dentro del .mdx, sin importar el componente
  SubtitleBlog,
  SubtitleSection,
  PhotoFrame,
  PhotoNote,
  TwoColumns,
  InfoCard, //              <InfoCard number={1} title="…" description="…" />
  Formula, //              <Formula titulo="…">CT = CF + CV</Formula>
  Repaso, //               <Repaso>- idea clave</Repaso>
  VideoFrame, //            <VideoFrame youtube="..." title="..." />
}
