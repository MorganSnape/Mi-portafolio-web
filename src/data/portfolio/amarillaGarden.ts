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
    // Descomenta cuando el archivo esté compartido como "cualquiera con el enlace puede ver":
    // { label: 'Ver diseño en Figma', href: 'https://www.figma.com/design/3ZYq13xu3IjEHVp5MdNEkZ/Amarilla-Garden?node-id=1-4', kind: 'figma', primary: true },
    { label: 'Conocer la marca', href: 'https://www.amarillagarden.com', kind: 'website' },
  ],

  // Durazno: portada y acentos. Crema durazno: fondo detrás de la portada.
  // Sin "secondary", el botón principal es negro, que contrasta mejor con los tonos pastel.
  brand: {
    primary: '#F4A375',
    surface: '#FDE9D2',
    // Los títulos de la marca usan Mahalini, que no está en Google Fonts; Montserrat es la de textos.
    headingFont: 'Montserrat',
    fontHref: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
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
        // TODO Gaby: confirma que estas cifras son porcentajes de personas encuestadas
        // (en "canal de compra" se podía marcar más de una opción) y agrega cuántas respondieron.
        {
          type: 'stats',
          title: 'Lo que esperan de la tienda',
          intro: 'Resultados de la encuesta cuantitativa. Con ellos ordené las prioridades del diseño.',
          items: [
            { value: '90 %', label: 've probable o muy probable usar la tienda en línea' },
            { value: '0 %', label: 'dijo que no la usaría' },
            { value: '90 %', label: 'la usaría para comprar en línea' },
            { value: '70 %', label: 'la usaría para ver productos' },
            { value: '80 %', label: 'prefiere contenido educativo' },
            { value: '50 %', label: 'también compra por chat (WhatsApp, Instagram)' },
          ],
        },
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

    // Las demos animadas de estos capítulos están hechas en código:
    // src/components/CaseStudy/demos/. Se mueven solas, se pausan al pasar
    // el cursor y se pueden usar (filtros, carrito, comparador).
    {
      label: 'Ideación',
      title: 'Cinco pantallas para las cuatro maneras de llegar a la marca',
      intro:
        'Con el problema definido, organicé la tienda alrededor de lo que la gente viene a hacer: comprar para sí, regalar, pedir al por mayor o vivir un taller. Las decisiones de este capítulo y los siguientes se apoyan en mi criterio, en la encuesta y en leyes de diseño; todavía no las he probado con usuarios.',
      blocks: [
        {
          type: 'cards',
          title: 'Mapa de pantallas',
          intro:
            'Cada pantalla tiene un lugar fijo en el menú. Lo secundario, como envíos, políticas y preguntas frecuentes, vive en el pie de página.',
          numbered: true,
          items: [
            {
              title: 'Inicio',
              text: 'Presenta la marca, muestra la campaña de temporada y lleva rápido al catálogo.',
            },
            {
              title: 'Productos',
              text: 'El catálogo completo, con filtros por categoría, promoción y disponibilidad.',
            },
            {
              title: 'Producto',
              text: 'El detalle de cada pieza: fotos, precio, cantidad y compra.',
            },
            {
              title: 'Mayoristas',
              text: 'Pedidos grandes para empresas y eventos, por correo o WhatsApp.',
            },
            {
              title: 'Talleres',
              text: 'La experiencia Cosecha emocional y cómo reservarla para un grupo o un equipo.',
            },
          ],
        },
        {
          type: 'cards',
          title: 'Cómo se navega',
          columns: 2,
          items: [
            {
              title: 'Solo cuatro opciones en el menú',
              meta: 'Ley de Hick',
              text: 'Cada opción adicional alarga el tiempo de decisión. Con cuatro destinos claros, más la búsqueda y el carrito, nadie tiene que pensar dónde está lo que busca.',
            },
            {
              title: 'WhatsApp siempre a mano',
              meta: 'Encuesta y ley de Fitts',
              text: 'La mitad de las personas encuestadas también compra por chat. Por eso el botón flotante de WhatsApp acompaña todas las pantallas: un objetivo grande, fijo y siempre en el mismo lugar.',
            },
          ],
        },
      ],
    },
    {
      label: 'Diseño visual',
      title:
        'Llevé la identidad de NubeLab a tonos tierra para que las fotos sean las protagonistas',
      intro:
        'Hice dos iteraciones de wireframe del inicio y una primera versión en alta fidelidad con los tonos durazno y salmón de la marca. Al ponerla junto a las fotos reales, con cera, concreto y flores secas, la interfaz competía con los productos en lugar de enmarcarlos. Por eso hice una segunda versión.',
      blocks: [
        {
          type: 'demo',
          title: 'De la versión 1 a la versión 2',
          intro: 'Arrastra la línea para comparar las dos versiones del inicio.',
          demo: 'amarilla-versiones',
          caption:
            'A la izquierda, la versión 1: salmón saturado, foto recortada en una mancha y los productos después de la historia. A la derecha, la versión final: paleta tierra, foto completa y el catálogo justo debajo de la portada.',
        },
        {
          type: 'cards',
          title: 'Qué cambió y por qué',
          columns: 2,
          items: [
            {
              title: 'Una paleta que se aparta para que hablen las fotos',
              meta: 'Efecto estética-usabilidad',
              text: 'Antes: salmón saturado, gris frío y oliva compitiendo con las fotos. Después: crema, café y terracota tomados de los propios productos. Percibimos como más fácil de usar lo que nos resulta agradable, y aquí lo agradable era quitar color para que las fotos fueran lo más vivo de la pantalla.',
            },
            {
              title: 'Fotos completas en lugar de formas recortadas',
              meta: 'Ley de Prägnanz',
              text: 'Antes: la foto de "Sobre Amarilla" recortada en una mancha orgánica con capas. Después: la foto ocupa una mitad y el texto la otra. El ojo interpreta primero la forma más simple; la mancha obligaba a leer la forma antes que la foto.',
            },
            {
              title: 'El catálogo sube a la segunda posición',
              meta: 'Efecto de posición serial',
              text: 'Antes: los productos aparecían después de "Sobre Amarilla". Después: categorías y destacados van justo debajo de la portada. Recordamos mejor lo primero y lo último, y la encuesta mostró que la gente viene a ver y comprar.',
            },
            {
              title: 'Tarjetas planas sobre una retícula',
              meta: 'Ley de región común',
              text: 'Antes: tarjetas blancas con sombra flotando sobre gris. Después: producto y texto alineados en cuatro columnas, sin cajas. La alineación y el espacio ya agrupan cada producto; las sombras solo añadían ruido.',
            },
          ],
        },
        {
          type: 'palette',
          title: 'Paleta de la interfaz',
          intro:
            'Parte de la identidad de NubeLab y de los materiales de los productos. Sigue una proporción cercana a 60-30-10: el crema domina, el café estructura y la terracota se reserva para lo que debe destacar, como el menú activo y los filtros (efecto Von Restorff). Toca un color para copiar su código.',
          colors: [
            { name: 'Crema', hex: '#F0EDE6', rgb: '240, 237, 230' },
            { name: 'Arena', hex: '#E7E3DA', rgb: '231, 227, 218' },
            { name: 'Café', hex: '#442D1C', rgb: '68, 45, 28' },
            { name: 'Café suave', hex: '#4D403A', rgb: '77, 64, 58' },
            { name: 'Terracota', hex: '#D98C70', rgb: '217, 140, 112' },
            { name: 'Oliva', hex: '#9D9167', rgb: '157, 145, 103' },
          ],
        },
        {
          type: 'stats',
          title: 'Contraste',
          intro:
            'Revisé el contraste de las combinaciones principales con el criterio de WCAG.',
          items: [
            { value: '10.97:1', label: 'texto café sobre crema · nivel AAA' },
            { value: '12.82:1', label: 'texto blanco en el botón principal · nivel AAA' },
            { value: '2.65:1 → 4.84:1', label: 'etiquetas de filtro: el texto blanco no cumplía AA; con texto café sí (así se ven en la demo)' },
          ],
        },
        {
          type: 'text',
          title: 'Tipografía',
          body: 'Dos familias con trabajos distintos. Mahalini, la display artesanal de la marca, solo para títulos de sección y la portada. Montserrat para todo lo demás (menú, precios, descripciones y botones) porque se lee bien en tamaños pequeños. El contraste entre ambas marca la jerarquía sin necesidad de más colores.',
        },
        {
          type: 'demo',
          title: 'Componentes en acción',
          intro:
            'Construí en Figma los elementos que se repiten: menú, galería, selector de cantidad, botones, carrito y WhatsApp. Sus estados no son decoración: el subrayado terracota del menú y el número del carrito le dicen a la persona dónde está y qué lleva. Pruébalos.',
          demo: 'amarilla-producto',
          caption:
            'El menú pasa de reposo a hover a activo, la foto cambia, la cantidad sube y el carrito confirma lo que se añadió. "Añadir a tu carrito" va relleno y "Comprar ahora" en contorno: una acción principal y una secundaria.',
        },
      ],
    },
    {
      label: 'Decisiones de diseño',
      title: 'Cada pantalla responde sola lo que antes se preguntaba por chat',
      intro:
        'Precio, disponibilidad, envío y cómo pedir más: estas son las decisiones que tomé pantalla por pantalla y la ley o principio que respalda cada una.',
      blocks: [
        {
          type: 'demo',
          title: 'La portada',
          demo: 'amarilla-portada',
          caption:
            'Una campaña por temporada, un solo botón y, debajo, la franja de confianza con lo que antes se preguntaba por chat.',
        },
        {
          type: 'cards',
          title: 'Inicio',
          columns: 2,
          items: [
            {
              title: 'Portada con una sola acción',
              meta: 'Ley de Hick y punto focal',
              text: 'La portada cambia con la temporada ("¡Porque nuestras madres lo merecen!") y tiene un único botón. La foto ocupa todo el ancho y el texto se apoya en un velo oscuro: un solo punto focal y una sola decisión.',
            },
            {
              title: 'Una franja de confianza antes del catálogo',
              meta: 'Reducción de incertidumbre',
              text: 'Justo debajo de la portada: envíos a todo Colombia, pago seguro, venta al detal y al por mayor. Son las dudas que llegaban por chat, resueltas antes de pedir la compra.',
            },
            {
              title: 'Tres categorías, no más',
              meta: 'Ley de Hick',
              text: 'Sets, velas y piezas: tres caminos grandes y fotográficos que se eligen casi sin pensar. Quien quiere más detalle tiene el catálogo con filtros.',
            },
            {
              title: 'Clientes y opiniones como respaldo',
              meta: 'Prueba social',
              text: '"Iluminamos su historia" muestra las marcas que ya confiaron en Amarilla Garden para sus eventos, y luego vienen las opiniones. Pesa sobre todo para el comprador mayorista.',
            },
            {
              title: 'Cerrar con dos formas de contacto',
              meta: 'Ley de Fitts',
              text: '"Pide tu propia cajita de luz" termina el recorrido con dos botones anchos, correo y WhatsApp. Un objetivo grande y cercano se alcanza más rápido.',
            },
            {
              title: 'Contenido que enseña y conmueve',
              meta: 'Encuesta y tono de voz',
              text: 'El contenido educativo fue el preferido, seguido del emocional. Por eso "Sobre Amarilla Garden" habla de bienestar y talleres, y las velas se presentan por lo que significan: velas de sentimientos.',
            },
          ],
        },
        {
          type: 'demo',
          title: 'El catálogo',
          intro: 'Activa o quita filtros y mira cómo responde la lista.',
          demo: 'amarilla-catalogo',
          caption:
            'El contador y las etiquetas de filtros activos dicen siempre qué se está viendo; cada filtro se quita con su "×".',
        },
        {
          type: 'cards',
          title: 'Catálogo y producto',
          columns: 2,
          items: [
            {
              title: 'Filtros que siempre dicen dónde estás',
              meta: 'Visibilidad del estado del sistema',
              text: 'El catálogo indica cuántos resultados hay, cómo están ordenados y qué filtros están activos. Es la primera heurística de Nielsen: nadie debe preguntarse qué está viendo.',
            },
            {
              title: 'Quitar un filtro con un toque',
              meta: 'Control y libertad del usuario',
              text: 'Cada filtro activo aparece como una etiqueta con su "×". Deshacer una elección es tan fácil como hacerla, sin volver al panel lateral.',
            },
            {
              title: 'Filtros agrupados por intención',
              meta: 'Ley de proximidad',
              text: 'Categoría, promoción y disponibilidad van en grupos separados. Cada grupo se lee como una sola pregunta, y las casillas muestran todas las opciones para que nadie tenga que recordarlas.',
            },
            {
              title: 'La tarjeta que ya conoces',
              meta: 'Ley de Jakob',
              text: 'Foto, nombre, precio y una línea de descripción, con el "+" para añadir en la esquina de la foto. Las personas pasan la mayor parte del tiempo en otras tiendas y esperan que esta funcione igual.',
            },
            {
              title: 'Una acción principal y una secundaria',
              meta: 'Jerarquía visual',
              text: '"Añadir a tu carrito" va relleno en café y "Comprar ahora" en contorno. El peso visual dice cuál es el camino esperado sin esconder el atajo.',
            },
            {
              title: 'Ningún callejón sin salida',
              meta: 'Prevención de errores',
              text: 'Debajo de la compra: "¿No tenemos la cantidad que necesitas o el producto no está disponible? Escríbenos". Si el stock no alcanza, la página ofrece una salida en lugar de un final.',
            },
          ],
        },
        {
          type: 'cards',
          title: 'Mayoristas y talleres',
          columns: 2,
          items: [
            {
              title: 'Una misma plantilla para dos servicios',
              meta: 'Consistencia y estándares',
              text: 'Texto a la izquierda, foto a la derecha y dos botones de contacto. Quien aprendió a usar una pantalla ya sabe usar la otra, y para la marca es más fácil mantenerlas.',
            },
            {
              title: 'Los beneficios se repiten donde se decide',
              meta: 'Reconocer antes que recordar',
              text: 'Envío gratis desde $200 mil, pago con Mercado Pago y soporte reaparecen en catálogo, producto, mayoristas y talleres. No hay que recordar lo que se leyó en el inicio.',
            },
          ],
        },
      ],
    },

    // ── Capítulos por completar ──
    // Descomenta cada uno cuando tengas el material.
    //
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
    'Probar con usuarios si encuentran un producto en menos de tres pasos y entienden las opciones de envío.',
    'Llevar a Figma la corrección de contraste de las etiquetas de filtro (texto café sobre terracota, 4.84:1).',
    'Llevar los wireframes móviles a alta fidelidad con la paleta final.',
    'Reemplazar los textos de ejemplo de la portada y las opiniones por campañas y testimonios reales.',
  ],
  learnings: [
    'Aprendí a soltar la primera versión. La V1 tenía más "diseño" a la vista y justamente por eso le quitaba protagonismo a los productos: a veces la mejor decisión es la que menos se nota.',
    'Mientras llegan las pruebas con usuarios, las leyes de diseño y los datos de la encuesta me ayudaron a decidir con fundamento y a poder explicar cada elección.',
  ],
}
