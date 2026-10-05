import type { Proyect } from '@/models'

import cover from '@/assets/proyectos/depelos/portada.webp'
import logo from '@/assets/proyectos/depelos/logo.webp'
import envaseMedidas from '@/assets/proyectos/depelos/envase-medidas.webp'
import envaseTroquel from '@/assets/proyectos/depelos/envase-troquel.webp'
import envaseDiseno from '@/assets/proyectos/depelos/envase-diseno.webp'
import cajaMedidas from '@/assets/proyectos/depelos/caja-medidas.webp'
import cajaExternaTroquel from '@/assets/proyectos/depelos/caja-externa-troquel.webp'
import cajaExternaDiseno from '@/assets/proyectos/depelos/caja-externa-diseno.webp'
import cajaSoporteTroquel from '@/assets/proyectos/depelos/caja-soporte-troquel.webp'
import cajaSoporteDiseno from '@/assets/proyectos/depelos/caja-soporte-diseno.webp'
import cajaMockup1 from '@/assets/proyectos/depelos/caja-mockup-1.webp'
import cajaMockup2 from '@/assets/proyectos/depelos/caja-mockup-2.webp'

export const depelosProyect: Proyect = {
  type: ['Diseño'],
  slug: 'depelos',

  // ── Portada ──
  nameProject: 'DePelös',
  headline: 'Una marca de premios saludables para mascotas, desde el nombre hasta el empaque',
  shortDescription:
    'Identidad de marca y empaque para un yogur helado saludable para perros y gatos.',
  coverImage: cover,
  date: '2026',
  projectType: 'Proyecto académico, SENA',
  tags: ['Branding', 'Packaging'],
  details: [{ label: 'Tipo de proyecto', value: 'Proyecto académico, SENA', icon: 'bxs:briefcase' }],
  role: 'Diseñadora de marca y empaque',
  roleSummary: 'Naming, identidad visual, diseño de empaque, troqueles y mockups.',
  tools: ['Illustrator', 'Dimension', 'Adobe Stock'],
  // Confirma de dónde salieron las imágenes de los mockups y ajusta esta línea
  credits: ['Recursos para mockups: Adobe Stock'],
  // links: [
  //   { label: 'Ver en Behance', href: 'https://www.behance.net/[tu-usuario]/[proyecto]', kind: 'behance', primary: true },
  // ],

  // Azul: portada y acentos. Rosa: botón principal. Crema: fondo detrás de la portada.
  brand: {
    primary: '#2356A4',
    secondary: '#EB5699',
    surface: '#F1EDE1',
    headingFont: 'Fraunces',
    // También carga Bricolage Grotesque para que el bloque de tipografía se vea con la fuente real
    fontHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Bricolage+Grotesque:wght@400&display=swap',
  },

  // ── Resumen ──
  descriptionProject:
    'DePelös es una marca colombiana de premios saludables para mascotas. Su producto insignia es un yogur helado con probióticos que consiente a perros y gatos mientras cuida su digestión.\n\n' +
    'Creé la marca desde cero: el nombre, la identidad visual, el empaque del helado y una caja especial para entregarlo en un evento a favor de la protección animal.',
  challenge:
    '¿Cómo diseñar un empaque que se sienta divertido y cercano, que comunique con claridad los beneficios del producto y que sea coherente con el compromiso ambiental de la marca?',
  // En branding no hay "negocio" y "usuario": van como objetivos generales
  objectives: [
    'Lanzar una marca que se distinga en el punto de venta y transmita calidad nutricional.',
    'Comunicar con claridad los beneficios del producto, de forma divertida y cercana.',
    'Diseñar empaques coherentes con el compromiso ambiental de la marca.',
  ],

  // ── Capítulos: label = el tema, title = la conclusión ──
  chapters: [
    {
      label: 'La marca',
      title: 'Un nombre que juega con lo que tienen en común perros y gatos',
      intro: 'Antes de diseñar, definí qué quería transmitir la marca y a quién le hablaba.',
      blocks: [
        {
          type: 'highlight',
          title: 'El nombre',
          label: 'Concepto',
          text: '"De pelos" significa excelente, y los pelos son lo que tienen en común perros y gatos. De ese juego de palabras nació la marca.',
        },
        {
          type: 'text',
          title: 'Para quién',
          body: 'Dueños de mascotas de 20 a 45 años, en ciudades de Colombia, que buscan productos premium y con causa social.',
        },
        {
          type: 'text',
          title: 'Estilo',
          body: 'Me inspiré en el estilo hipster contemporáneo: fresco, desenfadado y con carácter. Los colores vivos, los patrones geométricos y las formas simples hacen que la marca se sienta divertida, actual y cercana a dueños de mascotas jóvenes y urbanos.',
        },
      ],
    },
    {
      label: 'Identidad visual',
      title: 'Colores vivos y formas simples para una marca divertida y cercana',
      blocks: [
        {
          type: 'image',
          title: 'Logo',
          image: {
            src: logo,
            alt: 'Logo de DePelös con una pata de perro y una mano haciendo el gesto rockero, sobre textura de helado',
            caption: '[Agrega aquí tus bocetos del logo y explica por qué elegiste esta versión.]',
          },
        },
        {
          type: 'palette',
          title: 'Color',
          intro: 'Toca un color para copiar su código.',
          colors: [
            { hex: '#3E3A36', rgb: '62, 58, 54', cmyk: '63, 57, 58, 63' },
            { hex: '#EB5699', rgb: '235, 86, 153', cmyk: '1, 78, 0, 0' },
            { hex: '#2356A4', rgb: '35, 86, 164', cmyk: '91, 67, 1, 0' },
            { hex: '#F1EDE1', rgb: '241, 237, 225', cmyk: '7, 6, 14, 0' },
            { hex: '#F8CBE1', rgb: '248, 203, 225', cmyk: '1, 28, 0, 0' },
            { hex: '#668DC9', rgb: '102, 141, 201', cmyk: '64, 39, 0, 0' },
          ],
        },
        {
          type: 'typography',
          title: 'Tipografía',
          fonts: [
            { role: 'Títulos', family: 'Fraunces', weight: 700 },
            { role: 'Textos', family: 'Bricolage Grotesque', weight: 400 },
          ],
        },
      ],
    },
    {
      label: 'Empaque del helado',
      title: 'Un envase de 200 ml pensado para congelarse y reciclarse',
      blocks: [
        {
          type: 'specs',
          title: 'Especificaciones',
          items: [
            { label: 'Medidas', value: '9 cm de diámetro por 4 cm de altura' },
            { label: 'Material', value: 'Cartón biodegradable con recubrimiento apto para congelación' },
            { label: 'Impresión', value: 'Litografía offset con laminado protector' },
          ],
          image: { src: envaseMedidas, alt: 'Envase de yogur helado DePelös de 9 cm de diámetro y 4 cm de altura' },
        },
        {
          type: 'compare',
          title: 'Del troquel al diseño',
          intro: 'Etiqueta lateral, tapa y banda de beneficios.',
          items: [
            { label: 'Troquel', src: envaseTroquel, alt: 'Troquel de la etiqueta lateral y la tapa del envase' },
            { label: 'Diseño', src: envaseDiseno, alt: 'Diseño aplicado sobre el troquel del envase' },
          ],
        },
      ],
    },
    {
      label: 'Embalaje para el evento',
      title: 'Una caja para disfrutar el helado ahí mismo, en el evento',
      intro:
        'El producto se entregaba en un evento a favor de la protección animal, así que la caja lleva todo lo necesario para comerlo y jugar.',
      blocks: [
        {
          type: 'specs',
          title: 'Especificaciones',
          items: [
            { label: 'Medidas', value: '36 cm de ancho por 6 cm de altura' },
            { label: 'Contenido', value: 'Yogur helado de 200 ml, un plato y un juguete de regalo' },
            { label: 'Soporte interno', value: 'Una base que mantiene cada elemento en su lugar durante el transporte' },
          ],
          image: { src: cajaMedidas, alt: 'Caja DePelös abierta y cerrada, de 36 cm de ancho por 6 cm de altura' },
        },
        {
          type: 'compare',
          title: 'Parte externa',
          items: [
            { label: 'Troquel', src: cajaExternaTroquel, alt: 'Troquel de la parte externa de la caja' },
            { label: 'Diseño', src: cajaExternaDiseno, alt: 'Diseño de la parte externa con patrón de rombos azules y el sello de la marca' },
          ],
        },
        {
          type: 'compare',
          title: 'Soporte interno',
          items: [
            { label: 'Troquel', src: cajaSoporteTroquel, alt: 'Troquel del soporte interno con dos perforaciones circulares' },
            { label: 'Diseño', src: cajaSoporteDiseno, alt: 'Diseño rosado del soporte interno con el juguete de plumas y las indicaciones "Para jugar" y "Para que se refresque"' },
          ],
        },
      ],
    },
    {
      label: 'Resultado',
      title: 'Una marca completa: del nombre a la caja que llega al evento',
      tinted: true,
      blocks: [
        {
          type: 'stats',
          items: [
            { value: '2', label: 'empaques: el envase del helado y la caja del evento' },
            { value: '3', label: 'troqueles con medidas reales' },
            { value: '6', label: 'colores en la paleta de la marca' },
          ],
        },
        {
          type: 'gallery',
          images: [
            { src: cajaMockup1, alt: 'Dos cajas DePelös abiertas con el helado, el plato y los juguetes, y un gato y un perro asomándose detrás' },
            { src: cajaMockup2, alt: 'Caja DePelös con el helado, el plato y el juguete de varilla y plumas para gatos' },
          ],
        },
        // Si tu instructor comentó el proyecto, agrega su opinión:
        // { type: 'highlight', label: '[Nombre], instructor/a SENA', text: '«[Comentario textual]»' },
      ],
    },
  ],

  // ── Epílogo ──
  learnings: [
    '[Qué aprendiste al trabajar con troqueles y medidas reales.]',
    '[Qué harías diferente si lo hicieras otra vez.]',
  ],
  nextSteps: ['[Por ejemplo: diseñar la línea de sabores o las piezas para redes del evento.]'],
}
