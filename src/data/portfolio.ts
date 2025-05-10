import type { Proyect } from "@/models";

export const proyectosUX: Proyect[] = [
  {
    slug: "mi-portafolio",
    name: "Mi Portafolio",
    proyectType: "Proyecto personal",
    description: "Diseñé y desarrollé este portafolio como una plataforma personal para presentar mis proyectos, trayectoria académica y habilidades técnicas. El objetivo fue reflejar no sólo mi perfil profesional, sino también mi personalidad, estilo visual y enfoque creativo.\n\nDurante el proceso, investigué y analicé diversos portafolios de diseñadores y desarrolladores para identificar referentes visuales, estructurales y narrativos que me permitieran comunicar mi trabajo de forma clara, atractiva y coherente con mi identidad profesional.",
    tags: ["Figma", "Figjam"],
    duration: "1 mes",
    myRole: "Diseñador UX/UI",
    client: "Proyecto personal",
    imageUrl: "/images/portada-este-portafolio.webp",
    linkFigma: "https://Hola",
    linkWebsite: "https://miportfolio.dev",
    type: "UX",
    challenges: [{
      name: "Equilibrar claridad e información sin sobrecargar la experiencia",
      description: "Durante el diseño de mi portafolio me enfrenté al reto de encontrar un balance entre una estructura visualmente clara, simple y ordenada, y al mismo tiempo lo suficientemente informativa como para reflejar el valor de cada experiencia y los conocimientos adquiridos en cada proyecto.",
      solution: "Opté por un enfoque iterativo, explorando y evaluando distintas estructuras de diseño que fueran visualmente limpias, lógicas y organizadas. Me enfoqué en lograr un equilibrio entre estética, funcionalidad y facilidad de mantenimiento, priorizando una arquitectura visual que facilitara tanto la navegación como su implementación técnica."
    },
    {
      name: "Escasez de referencias",
      description: "Al tratarse de mi primer portafolio como diseñadora UX/UI, no me sentía segura sobre qué mostrar ni cómo presentarlo. Durante la búsqueda de referencias, me encontré con pocos ejemplos portafolios de diseñadores UX o los que lograba encontrar  correspondían a perfiles muy consolidados dentro del sector, con una trayectoria avanzada y recursos difíciles de replicar desde un punto de partida inicial. Esto hizo que el proceso se sintiera desafiante, pero también me motivó a construir una propuesta auténtica y adaptada a mi nivel, enfocada en comunicar mi proceso, mis aprendizajes y mi potencial como diseñadora en formación.",
      solution: "Amplié mi búsqueda de inspiración, analizando tanto proyectos de otras disciplinas apropiando sus recursos visuales que pudieran  aportar valor estructural y conceptual. Complementé este proceso con el apoyo de videos que abordaban cómo comunicar de manera efectiva el proceso de diseño."
    },
    ],

    designPrinciples: [{
      name: "Claridad visual",
      description: "Organización limpia y jerarquía clara para facilitar la lectura y navegación"
    },
    {
      name: "Simplicidad",
      description: "Diseño directo, sin elementos innecesarios, que prioriza lo esencial."
    },
    {
      name: "Accesibilidad",
      description: "Contrastes adecuados y estructura legible para todo tipo de usuarios."
    },

    {
      name: "Narrativa del proceso",
      description: "Cada proyecto cuenta una historia desde el reto hasta la solución, mostrando el pensamiento detrás del diseño."
    },
    {
      name: "Iteración continua",
      description: "El diseño del portafolio fue el resultado de ensayo, prueba y mejora."
    },
    {
      name: "Identidad personal",
      description: "Refleja mi estilo, enfoque creativo y decisiones auténticas como diseñadora."
    }
    ]
  },
  {
    slug: "amarilla-garden",
    name: "Amarilla Garden",
    proyectType: "E-commerce website",
    description: "Estoy desarrollando un proyecto pro bono para una tienda artesanal de piezas decorativas en cemento. El objetivo es digitalizar su catálogo y abrir un nuevo canal de ventas online, manteniendo su identidad artesanal a través de una experiencia moderna, accesible e intuitiva, que facilite a los clientes  actuales realizar sus compras y captar la atención de nuevos clientes.",
    imageUrl: "/images/Amarilla.webp",
    linkWebsite: "https://www.amarillagarden.com",
    tags: ["Astro", "TypeScript", "Tailwind"],
    type: "UX",
    duration: "En proceso",
    myRole: "Diseñador UX/UI",
    client: "Proyecto probono",
    challenges: [
      {
        name: "Digitalizar un catálogo artesanal",
        description: "Traducir productos físicos únicos al entorno digital sin perder su esencia manual y visual.",
        solution: "Se priorizó una estética minimalista, con fotografías grandes y fondos neutros que resaltaran los detalles del producto."
      },
      {
        name: "Crear un canal de venta accesible",
        description: "La marca no contaba con experiencia previa en plataformas digitales.",
        solution: "Se diseñó una navegación clara y simple, con jerarquía visual que guía al usuario hacia la acción de compra con facilidad."
      },
      {
        name: "Transmitir identidad visual",
        description: "El diseño debía reflejar calidez y estética natural, sin parecer genérico.",
        solution: "Se aplicaron colores suaves, tipografía orgánica y componentes visuales inspirados en materiales crudos como el cemento."
      }
    ],
    designPrinciples: [
      {
        name: "Claridad visual",
        description: "Diseño limpio y ordenado para destacar el producto sobre todo lo demás."
      },
      {
        name: "Accesibilidad",
        description: "Estructura adaptable y legible en cualquier dispositivo, priorizando la experiencia móvil."
      },
      {
        name: "Identidad visual coherente",
        description: "Se mantuvo la estética artesanal en toda la experiencia, transmitiendo autenticidad."
      },
      {
        name: "Usabilidad",
        description: "Flujo de compra e interacción simples, sin fricción para usuarios nuevos."
      }
    ]
  },
  {
    slug: "commet-app",
    name: "Commet.App",
    description: "Este proyecto fue desarrollado como parte del curso Fundamentos de UX/UI, aplicando un enfoque de diseño centrado en el usuario, respaldado por procesos de investigación, design thinking y prototipado en Figma.\n\n Se trata de una Plataforma de reseñas tipo red social enfocada en permitir a usuarios de cualquier perfil compartir su opinión sobre productos tecnológicos, ropa, locales comerciales y servicios. La app permite crear publicaciones personalizadas con el nombre del producto o local, precio, lugar de adquisición y reseña personal. Además, incorpora funciones de búsqueda y filtrado inteligentes, mostrando un promedio visual de opiniones para cada ítem, con el fin de facilitar decisiones informadas.",
    imageUrl: "/images/Portada-Commet.webp",
    linkFigma: "https://www.figma.com/design/q7khsSBJocn9TTIOirQoid/Commet.app?node-id=1-925&t=KuJk3EwziEKo4Woi-1",
    tags: ["Figma"],
    type: "UX",
    duration: "2 mes",
    myRole: "Estudiante",
    client: "Proyecto personal",
    challenges: [
      {
        name: "Diseñar para múltiples categorías",
        description: "El sistema debía permitir opiniones sobre productos y servicios sin crear experiencias separadas.",
        solution: "Se estructuraron secciones adaptativas con campos personalizados según tipo, pero dentro de una interfaz unificada."
      },
      {
        name: "Evitar sobrecarga en la búsqueda",
        description: "El filtrado y la exploración de contenido podían volverse complejos.",
        solution: "Se aplicó búsqueda con autocompletado y filtros inteligentes para simplificar la experiencia."
      },
      {
        name: "Visualización clara de resultados",
        description: "Los usuarios debían entender rápidamente si un producto era bien valorado.",
        solution: "Se usaron visualizaciones como barras de porcentaje y gráficos para representar promedios de reseñas."
      },
      {
        name: "Facilidad al crear publicaciones",
        description: "El flujo debía ser intuitivo para usuarios no técnicos.",
        solution: "Formulario por pasos, con ayuda contextual y campos mínimos para incentivar la participación."
      }
    ],
    designPrinciples: [
      {
        name: "Diseño centrado en el usuario",
        description: "El proyecto se basó en entrevistas, pruebas y análisis reales para guiar cada decisión."
      },
      {
        name: "Usabilidad",
        description: "El flujo de publicación, navegación y búsqueda fue simplificado al máximo para todo perfil de usuario."
      },
      {
        name: "Accesibilidad",
        description: "Contrastes adecuados, navegación clara y diseño mobile-first pensado para cualquier dispositivo."
      },
      {
        name: "Narrativa visual",
        description: "Cada elemento y contenido guía al usuario hacia una comprensión clara del producto y su reputación."
      },
      {
        name: "Iteración y validación",
        description: "El diseño fue testeado y refinado con base en retroalimentación continua durante el proceso."
      }
    ],
  },
];
export const proyectosFront: Proyect[] = [
  {
    slug: "amarilla-garden",
    name: "Amarilla Garden",
    description: "Estoy desarrollando un proyecto pro bono para una tienda en línea especializada en la fabricación y venta de piezas decorativas en cemento. El objetivo fue ayudar a la marca a digitalizar su catálogo artesanal y abrir un nuevo canal de ventas a través de una plataforma intuitiva, moderna y accesible. ",
    imageUrl: "/images/Amarilla.webp",
    linkGit: "https://github.com/user/portfolio",
    linkWebsite: "https://www.amarillagarden.com/",
    tags: ["Astro", "TypeScript", "Tailwind"],
    type: "Front"
  },
  {
    slug: "encriptador-texto",
    name: "Encriptador de Texto",
    description: "Proyecto desarrollado como parte del Diplomado en Programación Frontend con JavaScript, en el cual se aplicaron principios fundamentales de desarrollo web moderno como Mobile First, junto con tecnologías clave: HTML5, CSS3, JavaScript, y herramientas de diseño como Figma.",
    imageUrl: "/images/portada-encriptador-texto.webp",
    linkGit: "https://github.com/MorganSnape/Encriptador-Texto.git",
    linkWebsite: "https://encriptador-texto-liard.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Front"
  },
];

