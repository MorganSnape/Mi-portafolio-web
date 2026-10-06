import BrowserCodeBlock from './BrowserCodeBlock.astro'
import DataTable from './DataTable.astro'
import PageDivider from './PageDivider.astro'
import PhotoFrame from './PhotoFrame.astro'
import PhotoNote from './PhotoNote.astro'
import SubtitleBlog from './SubtitleBlog.astro'
import TwoColumns from './TwoColumns.astro'
 
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
 
  // Disponibles por nombre dentro del .mdx, sin importar el componente
  SubtitleBlog,
  PhotoFrame,
  PhotoNote,
  TwoColumns,
}
