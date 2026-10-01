import type { Proyect } from '@/models'

// Tu portada actual
import cover from '@/assets/proyectos/marcaPersonalGaby/portada-proyecto.webp'

// Láminas del manual (src/assets/proyectos/marca-personal/)
import arquitectura from '@/assets/proyectos/marca-personal/arquitectura.webp'
import zonaSeguridad from '@/assets/proyectos/marca-personal/zona-de-seguridad.webp'
import gradientes from '@/assets/proyectos/marca-personal/gradientes.webp'
import tipografia from '@/assets/proyectos/marca-personal/tipografia.webp'
import recursos from '@/assets/proyectos/marca-personal/recursos.webp'
import ilustraciones from '@/assets/proyectos/marca-personal/ilustraciones.webp'
import usosCorrectos from '@/assets/proyectos/marca-personal/usos-correctos.webp'
import tamanoMinimo from '@/assets/proyectos/marca-personal/tamano-minimo.webp'
import positivoNegativo from '@/assets/proyectos/marca-personal/positivo-negativo.webp'
import usosIncorrectos from '@/assets/proyectos/marca-personal/usos-incorrectos.webp'
import papeleria from '@/assets/proyectos/marca-personal/papeleria.webp'
import sello from '@/assets/proyectos/marca-personal/sello.webp'
import firmaDigital from '@/assets/proyectos/marca-personal/firma-digital.webp'
import redesSociales from '@/assets/proyectos/marca-personal/redes-sociales.webp'

export const marcaPersonalProyect: Proyect = {
  type: ['Diseño'],
  slug: 'marca-personal-gabriela',
  nameProject: 'Marca Gabriela',
  date: 'Mayo de 2026',
  coverImage: cover,
  tags: ['Identidad visual', 'Manual de marca'],
  projectType: 'Identidad visual',
  shortDescription:
    'Mi identidad visual y manual de marca: una estética neobrutalista con retículas y guiños al código, pensada para crecer conmigo.',
  details: [
    { label: 'Tipo de proyecto', value: 'Proyecto académico, SENA', icon: 'bxs:briefcase' },
    { label: 'Duración', value: '1 mes', icon: 'bxs:time' },
  ],
  role: 'Diseñadora gráfica',
  roleSummary: 'Concepto, logo, sistema visual, ilustración, manual de marca y aplicaciones.',
  tools: ['Illustrator'],

  // Tus propios colores: el morado como acento y el amarillo en la portada
  brand: { primary: '#8C529B', surface: '#FFE971' },

  descriptionProject:
    'Diseñé mi marca personal y su manual de identidad visual. Quería una marca que mostrara cómo uno lo visual con su ejecución: el diseño gráfico, la experiencia de usuario y el código.\n\n' +
    'El resultado es una identidad neobrutalista, construida sobre retículas y con referencias al código, que incluye ilustración como parte clave de la experiencia. Busca sentirse cercana, creativa y en constante crecimiento.',
  objectiveBusiness: [
    'Construir una identidad visual reconocible y profesional.',
    'Comunicar mis habilidades en diseño gráfico y UX/UI.',
    'Mantener una imagen coherente en el portafolio y las redes sociales.',
  ],
  objectiveUser: [
    'Entender rápido mi perfil profesional y mis habilidades.',
    'Vivir una experiencia visual clara, cercana y memorable.',
  ],
  challenge:
    '¿Cómo construir una sola identidad que muestre el diseño gráfico, la experiencia de usuario y el código, sin que se sienta recargada?',

  chapters: [
    {
      title: 'La marca',
      intro: 'Antes de diseñar, definí qué quería transmitir y hacia dónde quería crecer.',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'Misión',
              text: 'Transmitir el amor por lo visual, integrando gustos personales, ilustración y desarrollo digital, para crear experiencias que reflejen tanto la sensibilidad creativa como el crecimiento profesional.',
            },
            {
              title: 'Visión',
              text: 'Expresar originalidad y esfuerzo a través de diseños llamativos y bien construidos, que evidencien dedicación, estudio y evolución constante, para consolidarme como una diseñadora integral.',
            },
          ],
        },
        {
          type: 'highlight',
          title: 'El concepto',
          label: 'Un enfoque "unicornio"',
          text: 'Una marca que une lo visual con su ejecución: neobrutalismo, retículas, referencias al código e ilustración.',
        },
      ],
    },
    {
      title: 'Identidad visual',
      blocks: [
        {
          type: 'text',
          title: 'Logo',
          body: 'El imagotipo busca una identidad clara, moderna y digital. Combina mi nombre con dos referencias a mi forma de trabajar: las etiquetas de código y un frame de Figma. Así comunica orden, estructura y un enfoque centrado en construir soluciones.',
        },
        {
          type: 'image',
          image: {
            src: arquitectura,
            alt: 'Arquitectura y construcción del logo gaby sobre una retícula modular',
            caption:
              'El logo se construye sobre una retícula modular basada en una unidad (x). Todos los espacios, medidas y márgenes son múltiplos de esa unidad.',
          },
        },
        {
          type: 'image',
          title: 'Zona de seguridad',
          image: {
            src: zonaSeguridad,
            alt: 'Zona de seguridad del imagotipo y del isotipo',
            caption:
              'En el imagotipo, el espacio libre equivale a la letra "b"; en el isotipo, al cuadrado que forman sus esquinas.',
          },
        },
        {
          type: 'palette',
          title: 'Color',
          intro:
            'Tonos vibrantes con neutros para crear contraste, jerarquía y personalidad. El morado y el amarillo dominan; los acentos se usan con intención y en pequeñas dosis. Toca un color para copiar su código.',
          colors: [
            { name: 'Morado', hex: '#8C529B', rgb: '140, 82, 155', cmyk: '54, 76, 1, 0' },
            { name: 'Amarillo', hex: '#FFE971', rgb: '255, 233, 113', cmyk: '2, 5, 66, 0' },
            { name: 'Crema', hex: '#FEF7F5', rgb: '254, 247, 245', cmyk: '0, 4, 3, 0' },
            { name: 'Negro', hex: '#000000', rgb: '0, 0, 0', cmyk: '91, 79, 62, 97' },
            { name: 'Rosa', hex: '#FC7DA8', rgb: '252, 125, 168', cmyk: '0, 64, 7, 0' },
            { name: 'Verde', hex: '#7D9E4A', rgb: '125, 158, 74', cmyk: '58, 20, 85, 4' },
          ],
        },
        {
          type: 'image',
          title: 'Gradientes',
          image: { src: gradientes, alt: 'Gradientes tonales de cada color de la marca' },
        },
        {
          type: 'image',
          title: 'Tipografía',
          intro:
            'Fantabular MVB, una serif con carácter, para títulos y elementos destacados; Rethink Sans para textos largos. Uso la serif para destacar y la sans para leer, y nunca más de dos estilos en una misma pieza.',
          image: { src: tipografia, alt: 'Tipografías de la marca: Fantabular MVB y Rethink Sans' },
        },
      ],
    },
    {
      title: 'Recursos e ilustración',
      intro: 'Elementos que complementan el logo y le dan vida a la marca, siempre usados con moderación.',
      blocks: [
        {
          type: 'image',
          title: 'Recursos gráficos',
          image: {
            src: recursos,
            alt: 'Retícula modular, trazos, estrellas y formas inspiradas en el código',
            caption:
              'Formas y trazos inspirados en el lenguaje del código, organizados sobre una retícula modular para crear composiciones dinámicas y ordenadas.',
          },
        },
        {
          type: 'image',
          title: 'Ilustraciones',
          image: {
            src: ilustraciones,
            alt: 'Ilustraciones neobrutalistas de una planta en un computador y de Gabriela trabajando',
            caption:
              'Caricaturas de trazos simples con bordes gruesos, colores vibrantes y sombras con degradado de puntos, pensadas para el portafolio y las redes.',
          },
        },
      ],
    },
    {
      title: 'Usos y variantes',
      intro: 'Reglas para que la marca se vea bien en cualquier tamaño y formato.',
      blocks: [
        {
          type: 'image',
          title: 'Versiones del logo',
          image: {
            src: usosCorrectos,
            alt: 'Versiones principal, reducida e isotipo del logo',
            caption:
              'Principal, con descriptor, para formatos amplios; reducida, para espacios medianos; e isotipo, para formatos pequeños.',
          },
        },
        {
          type: 'gallery',
          images: [
            { src: tamanoMinimo, alt: 'Tamaños mínimos del logo para medios digitales e impresos', caption: 'Tamaño mínimo' },
            { src: positivoNegativo, alt: 'Logo en versión positiva y negativa', caption: 'Positivo y negativo' },
          ],
        },
        {
          type: 'image',
          title: 'Usos incorrectos',
          image: {
            src: usosIncorrectos,
            alt: 'Ejemplos de usos incorrectos del logo: deformarlo, cambiar la tipografía, agregar sombras o usar otros colores',
          },
        },
      ],
    },
    {
      title: 'Aplicaciones',
      blocks: [
        {
          type: 'gallery',
          images: [
            { src: papeleria, alt: 'Hoja membretada y tarjetas de presentación', caption: 'Papelería' },
            { src: sello, alt: 'Logo en sello seco de alto relieve sobre papel', caption: 'Sello seco en alto relieve' },
            { src: firmaDigital, alt: 'Firma digital con el logo en un correo electrónico', caption: 'Firma digital' },
            { src: redesSociales, alt: 'Publicaciones para Instagram con el estilo de la marca', caption: 'Posts para redes' },
          ],
        },
      ],
    },
  ],

  // Cuando lo tengas claro, cuenta qué aprendiste. Por ejemplo:
  // learnings: [
  //   'Construir sobre una retícula me ayudó a tomar decisiones más rápido y con coherencia.',
  // ],
}
