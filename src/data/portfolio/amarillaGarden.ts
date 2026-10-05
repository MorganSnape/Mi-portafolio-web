import type { Proyect } from '@/models'

// Tu portada actual
import cover from '@/assets/proyectos/portada-amarilla.webp'

// Imágenes extraídas del manual de marca (src/assets/proyectos/amarilla-garden/)
import logoConstruccion from '@/assets/proyectos/amarilla-garden/logo-construccion.webp'
import tipografia from '@/assets/proyectos/amarilla-garden/tipografia.webp'
import moodboard from '@/assets/proyectos/amarilla-garden/moodboard.webp'
import papeleria from '@/assets/proyectos/amarilla-garden/papeleria.webp'
import texturas from '@/assets/proyectos/amarilla-garden/texturas.webp'
import caja from '@/assets/proyectos/amarilla-garden/caja.webp'

export const amarillaGardenProyect: Proyect = {
  type: ['UX'],
  slug: 'amarilla-garden',

  // ── Portada ──
  nameProject: 'Amarilla Garden',
  headline: 'Una tienda en línea para vender lo hecho a mano sin perder su calidez',
  shortDescription:
    'Una tienda en línea que lleva la calidez de lo hecho a mano a la pantalla, para una marca artesanal de velas y decoración.',
  coverImage: cover,
  date: 'Marzo de 2026, en proceso',
  projectType: 'Pro bono para una marca real',
  tags: ['UX/UI', 'E-commerce'],
  details: [
    { label: 'Tipo de proyecto', value: 'E-commerce, proyecto pro bono', icon: 'bxs:briefcase' },
    { label: 'Empresa', value: 'Amarilla Garden', icon: 'bxs:briefcase' },
  ],
  role: 'Diseñadora UX/UI',
  roleSummary:
    'Única diseñadora del proyecto: brief e investigación con la clienta, ideación, iteración de propuestas y validación con usuarios.',
  tools: ['Figma', 'FigJam', 'Google Forms'],
  credits: ['Identidad visual: NubeLab'],
  // El sitio actual es de la marca, no es tu diseño: por eso el botón dice "Conocer la marca".
  // Cuando tengas el prototipo, ponlo primero.
  links: [
    // { label: 'Ver prototipo en Figma', href: 'https://www.figma.com/proto/[…]', kind: 'figma', primary: true },
    { label: 'Conocer la marca', href: 'https://www.amarillagarden.com', kind: 'website' },
  ],

  // Durazno: portada y acentos. Crema durazno: fondo detrás de la portada.
  // Sin "secondary", el botón principal es negro, que contrasta mejor con los tonos pastel.
  brand: {
    primary: '#F4A375',
    surface: '#FDE9D2',
    // Los títulos de la marca usan Mahalini, que no está en Google Fonts; Montserrat es la de textos.
    headingFont: 'Montserrat',
    fontHref: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap',
  },

  brandDescription:
    'Amarilla Garden es una marca artesanal con cinco años de evolución. Empezó vendiendo suculentas y amplió su oferta a piezas de concreto, velas hechas a mano y talleres creativos.',

  // ── Resumen ──
  descriptionProject:
    'Amarilla Garden es una marca artesanal con cinco años de trayectoria. Empezó vendiendo suculentas y hoy ofrece velas, piezas de concreto hechas a mano y talleres creativos para personas y empresas.\n\n' +
    'En este proyecto pro bono diseño su tienda en línea para digitalizar el catálogo, abrir un nuevo canal de ventas y promover sus talleres, sin perder su esencia artesanal. La identidad visual es de la agencia NubeLab; mi trabajo es llevarla a una experiencia de compra moderna, accesible e intuitiva.',
  challenge:
    '¿Cómo diseñar una tienda en línea que transmita la calidez de un producto hecho a mano y, al mismo tiempo, sea clara y confiable al momento de comprar?',
  // En UX van separados: uno del negocio y uno de la persona usuaria
  objectiveBusiness:
    'Digitalizar el catálogo artesanal y abrir un canal de venta en línea que preserve la experiencia de marca.',
  objectiveUser: 'Comprar productos hechos a mano con un recorrido claro, visual y seguro.',

  // ── Capítulos: label = el tema, title = la conclusión ──
  chapters: [
    {
      label: 'Brief',
      title: 'La tienda debía vender productos y talleres sin perder lo emocional',
      intro:
        'Antes de diseñar, preparé un formulario de briefing para que la dueña me contara sobre su negocio, sus clientes y sus metas. Sus respuestas definieron qué debía resolver la tienda.',
      blocks: [
        {
          type: 'cards',
          title: 'Lo que aprendí de la marca',
          columns: 2,
          items: [
            {
              title: 'Qué vende',
              text: 'Velas decorativas, decoración en cemento, kits para crear tu propia vela, talleres para empresas y particulares, y recordatorios para eventos.',
            },
            {
              title: 'Para quién',
              text: 'Personas de 25 a 40 años que buscan regalar detalles significativos o transformar su espacio, y empresas que quieren experiencias de bienestar para sus equipos.',
            },
            {
              title: 'Qué la diferencia',
              text: 'Un enfoque emocional, un diseño elegante y artesanal, y una historia de cinco años de emprendimiento.',
            },
            {
              title: 'Cómo quiere sentirse',
              text: 'Amigable, creativa, elegante y apasionada.',
            },
          ],
        },
        {
          type: 'highlight',
          title: 'La marca como persona',
          label: 'En palabras de la dueña',
          text: 'Una mujer creativa, elegante, apasionada y auténtica, que con calidez y determinación inspira a los demás a soñar, crear y transformar su entorno.',
        },
        {
          type: 'list',
          title: 'Lo que la tienda debía resolver',
          intro: 'Del brief salieron requisitos concretos para el diseño:',
          items: [
            'Mostrar tanto los productos para el hogar como los servicios para empresas: talleres, kits y recordatorios.',
            'Permitir compras al por mayor, con descuento a partir de 12 unidades.',
            'Explicar con claridad los envíos nacionales y los tiempos de producción, de 3 a 10 días hábiles.',
            'Ofrecer un descuento de bienvenida en la primera compra.',
            'Priorizar la estética y lo emocional en cada pantalla.',
          ],
        },
      ],
    },
    {
      label: 'Identidad de la marca',
      title: 'Una identidad cálida, creada por NubeLab, que la tienda debe respetar',
      intro:
        'La identidad visual fue creada por la agencia NubeLab. Mi reto es llevarla a una tienda en línea sin perder su calidez.',
      blocks: [
        {
          type: 'image',
          title: 'Logo',
          image: {
            src: logoConstruccion,
            alt: 'Isologo de Amarilla Garden y su construcción a partir de una vela, una flor y una mariposa',
            caption:
              'El isologo une tres ideas: las velas como luz, las flores como belleza y el renacer como transformación.',
          },
        },
        {
          type: 'palette',
          title: 'Color',
          intro: 'Tonos pastel y cálidos, nada saturado. Toca un color para copiar su código.',
          colors: [
            { hex: '#F4A375', rgb: '244, 163, 117', cmyk: '0, 45, 56, 0' },
            { hex: '#FAC5A3', rgb: '250, 197, 163', cmyk: '0, 29, 38, 0' },
            { hex: '#C5BF9B', rgb: '197, 191, 155', cmyk: '26, 19, 43, 3' },
            { hex: '#F5CDC7', rgb: '245, 205, 199', cmyk: '2, 25, 18, 0' },
            { hex: '#FDDA9B', rgb: '253, 218, 155', cmyk: '1, 17, 46, 0' },
            { hex: '#C3C7C9', rgb: '195, 199, 201', cmyk: '27, 18, 19, 1' },
          ],
        },
        {
          type: 'image',
          title: 'Tipografía',
          image: { src: tipografia, alt: 'Tipografías de la marca: Mahalini para títulos y Montserrat para textos' },
        },
        {
          type: 'gallery',
          title: 'Recursos gráficos',
          intro: 'Stickers, texturas y el moodboard de la marca, que sirvieron de base para el lenguaje visual de la tienda.',
          images: [
            {
              src: papeleria,
              alt: 'Stickers de la marca con mensajes como "Este paquetico lleva cariño" y "Eres magia, no lo olvides"',
            },
            { src: texturas, alt: 'Textura floral en tonos durazno, verde oliva y gris' },
            { src: moodboard, alt: 'Moodboard con flores, tonos durazno y espacios cálidos' },
            { src: caja, alt: 'Caja de entrega con papel de seda floral y una tarjeta en forma de corazón' },
          ],
        },
      ],
    },
    {
      label: 'Investigación',
      title: 'Sus talleres creativos son algo que la competencia no ofrece',
      intro:
        'Hice encuestas cualitativas y cuantitativas para entender cómo perciben los clientes la marca y qué esperan de una página web para comprar. Así identifiqué puntos de dolor, necesidades de contenido y los usos principales que esperaban de la tienda.',
      blocks: [
        // Las cifras de la investigación le dan credibilidad. Llénalas con tus datos reales:
        // {
        //   type: 'stats',
        //   items: [
        //     { value: '[n]', label: 'personas encuestadas' },
        //     { value: '3', label: 'marcas analizadas' },
        //   ],
        // },
        {
          type: 'cards',
          title: 'Análisis de la competencia',
          intro:
            'Evalué la competencia directa e indirecta para reconocer sus fortalezas y debilidades, y encontrar oportunidades para la marca en el entorno digital.',
          items: [
            { title: 'Simetriadeco', meta: 'Competencia directa', text: 'Velas aromáticas con mensajes personalizados.' },
            { title: 'Ornamental', meta: 'Competencia directa', text: 'Velas de cera vegetal, wax melts y ambientadores.' },
            { title: 'Meiso', meta: 'Competencia indirecta', text: 'Decoración en concreto: materas, mobiliario y jarrones.' },
          ],
        },
        {
          type: 'text',
          title: 'Fortalezas de la marca',
          body: 'Frente a su competencia, Amarilla Garden tiene un valor artesanal claro, productos únicos y un diferenciador que nadie más ofrece: sus talleres creativos.',
        },
        {
          type: 'cards',
          title: 'User persona',
          intro: 'Con los resultados de las encuestas creé a la persona que guiaría las decisiones de diseño.',
          columns: 2,
          items: [
            {
              title: 'Elena Giraldo',
              meta: 'Compradora creativa',
              text: 'Busca piezas artesanales únicas para su hogar y quiere entender qué está comprando antes de decidirse.',
            },
          ],
        },
      ],
    },
    {
      label: 'Definición del problema',
      title: 'Sin un camino claro ni información de materiales, la gente no se anima a comprar',
      blocks: [
        {
          type: 'highlight',
          label: 'El problema',
          text: 'Los visitantes no encuentran un camino de compra claro ni información completa de los materiales, lo que dificulta la decisión y reduce las ventas.',
        },
        {
          type: 'list',
          title: 'Puntos de dolor',
          items: [
            'No hay un camino de compra claro.',
            'Falta información de materiales y dimensiones en los productos.',
            'La experiencia no transmite la calidad artesanal de la marca.',
            'La navegación no ayuda a diferenciar categorías y colecciones.',
            'El pago no comunica seguridad ni las opciones de envío.',
          ],
        },
        {
          type: 'highlight',
          title: 'Hallazgo clave',
          label: 'Insight',
          text: 'Para generar confianza en la compra en línea, la tienda debe conectar emocionalmente mostrando la historia artesanal de cada pieza y ser transparente sobre de qué está hecha.',
        },
        {
          type: 'text',
          title: 'Oportunidad estratégica',
          body: 'Si el catálogo es claro y comunica bien los materiales, los visitantes entenderán rápido el valor de cada producto y se sentirán seguros para completar la compra.',
        },
      ],
    },

    // ── Capítulos por completar ──
    // Descomenta cada uno cuando tengas el material. Guarda las imágenes en
    // src/assets/proyectos/amarilla-garden/ e impórtalas arriba.
    // Recuerda: label es el tema y title es lo que descubriste o decidiste.
    //
    // {
    //   label: 'Ideación',
    //   title: '[Conclusión, por ejemplo: "Separé productos y talleres para que cada uno tenga su camino"]',
    //   intro: 'Organicé la tienda con categorías concretas, fichas de producto visuales y un pago accesible para un público poco técnico.',
    //   blocks: [
    //     { type: 'image', title: 'Mapa del sitio', image: { src: mapaSitio, alt: 'Mapa del sitio de la tienda', caption: '[Por qué lo organizaste así]' } },
    //     { type: 'image', title: 'Flujo de compra', image: { src: flujoCompra, alt: 'Flujo de compra' } },
    //     { type: 'compare', title: 'Del boceto al wireframe', items: [
    //       { label: 'Boceto', src: boceto, alt: '...' },
    //       { label: 'Wireframe', src: wireframe, alt: '...' },
    //     ] },
    //   ],
    // },
    // {
    //   label: 'Diseño de la tienda',
    //   title: '[Conclusión, por ejemplo: "Adapté la identidad de NubeLab a la pantalla"]',
    //   intro: 'Cómo llevé la identidad de la marca a la interfaz.',
    //   blocks: [
    //     { type: 'image', title: 'Kit de UI', image: { src: kitUi, alt: '...' } },
    //     { type: 'compare', title: 'Del wireframe a la alta fidelidad', items: [ ... ] },
    //     { type: 'gallery', title: 'Pantallas finales', images: [ ... ] },
    //     { type: 'video', title: 'Recorrido del prototipo', src: '/videos/amarilla-prototipo.mp4' },
    //   ],
    // },
    // {
    //   label: 'Pruebas con usuarios',
    //   title: '[Conclusión, por ejemplo: "[n] de [n] personas completaron la compra sin ayuda"]',
    //   intro: 'Evalué si las personas encontraban un producto en menos de tres pasos y entendían las opciones de envío.',
    //   blocks: [
    //     { type: 'columns', items: [
    //       { title: 'Lo que funcionó', items: ['...'] },
    //       { title: 'Lo que cambié', items: ['...'] },
    //     ] },
    //   ],
    // },
    // {
    //   label: 'Resultado',
    //   title: '[Conclusión]',
    //   tinted: true,
    //   blocks: [
    //     { type: 'stats', items: [ { value: '[n]', label: '...' } ] },
    //     { type: 'highlight', label: '[Nombre], fundadora de Amarilla Garden', text: '«[Su comentario sobre el diseño]»' },
    //   ],
    // },
  ],

  // ── Epílogo ──
  // Mientras el proyecto sigue en proceso, los próximos pasos cuentan qué falta.
  nextSteps: [
    'Definir el mapa del sitio y el flujo de compra.',
    'Diseñar las pantallas aplicando la identidad de NubeLab.',
    'Probar con usuarios si encuentran un producto en menos de tres pasos y entienden las opciones de envío.',
  ],
}
