import type { Proyect } from '@/models'

// Imágenes en src/assets/proyectos/lets-talk/
import cover from '@/assets/proyectos/lets-talk/mockup-noche.webp'
import piezaPrincipal from '@/assets/proyectos/lets-talk/pieza-principal.webp'
import luna from '@/assets/proyectos/lets-talk/luna.webp'
import bannerYoutube from '@/assets/proyectos/lets-talk/banner-youtube.webp'
import bannerEnYoutube from '@/assets/proyectos/lets-talk/banner-en-youtube.webp'
import productos from '@/assets/proyectos/lets-talk/productos.webp'
import mockupCalle from '@/assets/proyectos/lets-talk/mockup-calle.webp'
import mockupNoche from '@/assets/proyectos/lets-talk/mockup-noche.webp'

export const letsTalkProyect: Proyect = {
  type: ['Diseño'],
  slug: 'lets-talk',
  nameProject: "Let's Talk",
  date: '2026',
  coverImage: cover,
  coverFit: 'cover',
  coverPosition: '49% 50%',
  tags: ['Campaña gráfica', 'Ilustración'],
  projectType: 'Campaña gráfica',
  shortDescription:
    'Campaña gráfica para un evento sobre la relación entre el diseño y la programación, en piezas impresas, digitales y promocionales.',
  details: [{ label: 'Tipo de proyecto', value: 'Proyecto académico, SENA', icon: 'bxs:briefcase' }],
  role: 'Diseñadora gráfica',
  roleSummary: 'Concepto, ilustración, pieza principal y adaptación a formatos impresos, digitales y promocionales.',
  tools: ['Illustrator'],

  // El azul de la noche como acento
  brand: { primary: '#2B5090' },

  descriptionProject:
    "Let's Talk es un evento de tecnología que busca abrir la conversación sobre la relación entre el diseño y la programación, y mostrar la importancia de que ambas áreas colaboren al crear productos y experiencias digitales.\n\n" +
    'Diseñé su campaña publicitaria completa: una ilustración central y su adaptación a flyer, cartel, banner para YouTube y productos para el día del evento.',
  objectiveBusiness:
    'Dar a conocer el evento y atraer a personas interesadas en el diseño y la tecnología.',
  objectiveUser:
    'Entender de un vistazo de qué trata el evento, cuándo y dónde será.',
  challenge:
    '¿Cómo comunicar en una sola imagen que el diseño y el código no son mundos separados, y mantener esa idea reconocible en piezas de tamaños muy distintos?',

  chapters: [
    {
      title: 'El concepto',
      blocks: [
        {
          type: 'highlight',
          label: 'La idea',
          text: 'Una persona abre la ventana a una noche llena de código. Y la luna, que ilumina la escena, está dibujada con la pluma y los nodos de un programa de diseño: el diseño y el código compartiendo el mismo cielo.',
        },
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              title: 'La luna',
              meta: 'El elemento que une la campaña',
              text: 'Una luna construida con la herramienta pluma, con sus nodos visibles. Aparece en todas las piezas.',
              image: { src: luna, alt: 'Luna creciente con los nodos y la herramienta pluma de un programa de diseño' },
            },
          ],
        },
      ],
    },
    {
      title: 'La pieza principal',
      intro:
        'El cartel reúne el concepto, el mensaje y la información del evento, y es la base de todas las demás piezas.',
      blocks: [
        {
          type: 'specs',
          items: [
            { label: 'Mensaje', value: '"Diseño que se ve bien y funciona mejor"' },
            { label: 'Información', value: 'Fecha, hora y lugar del evento, agrupados en la parte inferior' },
            { label: 'Ilustración', value: 'Una ventana dividida en paneles, como una retícula, con código, estrellas y montañas' },
          ],
          image: {
            src: piezaPrincipal,
            alt: "Cartel de Let's Talk: la silueta de una persona abre una ventana a una noche con código, una luna y montañas",
          },
        },
        {
          type: 'palette',
          title: 'Color',
          intro:
            'Una paleta nocturna de azules sobre negro. El amarillo se reserva para la frase del evento y el rosa para los detalles de código. Toca un color para copiar su código.',
          colors: [
            { name: 'Negro', hex: '#030303' },
            { name: 'Azul noche', hex: '#2B5090' },
            { name: 'Azul profundo', hex: '#20396A' },
            { name: 'Luna', hex: '#E8E2D6' },
            { name: 'Amarillo', hex: '#E5DE73' },
            { name: 'Rosa', hex: '#E880AF' },
          ],
        },
      ],
    },
    {
      title: 'Adaptación a formatos',
      intro: 'La misma idea, reorganizada según cómo y dónde se ve cada pieza.',
      blocks: [
        {
          type: 'cards',
          items: [
            {
              title: 'Flyer',
              meta: '14 × 21 cm',
              text: 'Para repartir en mano o dejar en mostradores. Se lee rápido y se puede guardar.',
            },
            {
              title: 'Cartel',
              meta: '50 × 70 cm',
              text: 'Para paredes, postes y ventanas. Tiene que captar la atención a distancia.',
            },
            {
              title: 'Banner de YouTube',
              meta: '1546 × 423 px',
              text: 'El formato horizontal obliga a separar la ilustración del texto, que queda a la izquierda.',
            },
          ],
        },
        {
          type: 'image',
          title: 'Banner de YouTube',
          image: {
            src: bannerYoutube,
            alt: "Banner horizontal de Let's Talk con el texto a la izquierda y la ilustración a la derecha",
          },
        },
        {
          type: 'image',
          image: {
            src: bannerEnYoutube,
            alt: 'El banner aplicado en la cabecera de un canal de YouTube',
            caption: 'El banner en contexto, dentro de la cabecera de un canal.',
          },
        },
      ],
    },
    {
      title: 'Productos publicitarios',
      intro: 'Piezas para el día del evento, que extienden la campaña más allá de los anuncios.',
      blocks: [
        {
          type: 'image',
          image: {
            src: productos,
            alt: "Separadores de libro, un sticker con código QR y manillas de acceso con la gráfica de Let's Talk",
          },
        },
        {
          type: 'list',
          items: [
            'Separadores de libro, en formato vertical, con la ilustración completa.',
            'Un sticker con código QR que lleva a la información del evento.',
            'Manillas de acceso con QR para la entrada.',
          ],
        },
      ],
    },
    {
      title: 'Resultado',
      blocks: [
        {
          type: 'gallery',
          images: [
            { src: mockupCalle, alt: "Cartel de Let's Talk pegado en un poste en la calle", caption: 'De día, en la calle' },
            { src: mockupNoche, alt: "Cartel de Let's Talk en una valla iluminada de noche", caption: 'De noche, en una valla' },
          ],
        },
      ],
    },
  ],

  // Cuando lo tengas claro, cuenta qué aprendiste. Por ejemplo:
  // learnings: [
  //   'Diseñar primero la pieza principal y después adaptarla me ahorró tiempo y mantuvo la campaña coherente.',
  // ],
}
