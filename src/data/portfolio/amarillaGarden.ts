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
  nameProject: 'Amarilla Garden',
  date: 'Marzo de 2026, en proceso',
  coverImage: cover,
  tags: ['UX/UI', 'E-commerce'],
  shortDescription:
    'Una tienda en línea que lleva la calidez de lo hecho a mano a la pantalla, para una marca artesanal de velas y decoración.',
  projectType: 'E-commerce',
  details: [
    { label: 'Tipo de proyecto', value: 'E-commerce, proyecto pro bono', icon: 'bxs:briefcase' },
    { label: 'Empresa', value: 'Amarilla Garden', icon: 'bxs:briefcase' },
  ],
  role: 'Diseñadora UX/UI',
  roleSummary:
    'Única diseñadora del proyecto: brief e investigación con la clienta, ideación, iteración de propuestas y validación con usuarios.',
  tools: ['Figma', 'FigJam', 'Google Forms'],
  linkWebsite: 'https://www.amarillagarden.com',

  brand: {
    primary: '#F4A375',
    surface: '#FDE9D2',
    headingFont: 'Montserrat',
    fontHref: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap',
  },

  brandDescription:
    'Amarilla Garden es una marca artesanal con cinco años de evolución. Empezó vendiendo suculentas y amplió su oferta a piezas de concreto, velas hechas a mano y talleres creativos.',
  descriptionProject:
    'Amarilla Garden es una marca artesanal con cinco años de trayectoria. Empezó vendiendo suculentas y hoy ofrece velas, piezas de concreto hechas a mano y talleres creativos para personas y empresas.\n\n' +
    'Este proyecto pro bono busca digitalizar su catálogo con un e-commerce que abra un nuevo canal de ventas y promueva sus talleres, manteniendo su esencia artesanal en una experiencia moderna, accesible e intuitiva.',
  objectiveBusiness:
    'Digitalizar el catálogo artesanal y abrir un canal de venta en línea que preserve la experiencia de marca.',
  objectiveUser:
    'Comprar productos hechos a mano con un recorrido claro, visual y seguro.',
  challenge:
    '¿Cómo diseñar una tienda en línea que transmita la calidez de un producto hecho a mano y, al mismo tiempo, sea clara y confiable al momento de comprar?',

  chapters: [
    {
      title: 'El brief',
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
      title: 'La identidad de la marca',
      intro:
        'La identidad visual fue creada por la agencia NubeLab. Mi reto era llevarla a una tienda en línea sin perder su calidez.',
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
      title: 'Investigación',
      intro:
        'Hice encuestas cualitativas y cuantitativas para entender cómo perciben los clientes la marca y qué esperan de una página web para comprar. Así identifiqué puntos de dolor, necesidades de contenido y los usos principales que esperaban de la tienda.',
      blocks: [
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
      title: 'Definición del problema',
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
    //
    // {
    //   title: 'Ideación',
    //   intro: 'Organicé la tienda con categorías concretas, fichas de producto visuales y un pago accesible para un público poco técnico.',
    //   blocks: [
    //     { type: 'image', title: 'Mapa del sitio', image: { src: mapaSitio, alt: 'Mapa del sitio de la tienda' } },
    //     { type: 'image', title: 'Flujo de compra', image: { src: flujoCompra, alt: 'Flujo de compra' } },
    //     { type: 'compare', title: 'Del boceto al wireframe', items: [
    //       { label: 'Boceto', src: boceto, alt: '...' },
    //       { label: 'Wireframe', src: wireframe, alt: '...' },
    //     ] },
    //   ],
    // },
    // {
    //   title: 'Diseño de la tienda',
    //   intro: 'Cómo llevé la identidad de la marca a la interfaz.',
    //   blocks: [
    //     { type: 'image', title: 'Kit de UI', image: { src: kitUi, alt: '...' } },
    //     { type: 'gallery', title: 'Pantallas finales', images: [ ... ] },
    //   ],
    // },
    // {
    //   title: 'Pruebas con usuarios',
    //   intro: 'Evalué si las personas encontraban un producto en menos de tres pasos y entendían las opciones de envío.',
    //   blocks: [
    //     { type: 'columns', items: [
    //       { title: 'Lo que funcionó', items: ['...'] },
    //       { title: 'Lo que cambié', items: ['...'] },
    //     ] },
    //   ],
    // },
  ],
}