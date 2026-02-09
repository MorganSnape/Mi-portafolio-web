import type { Proyect } from "@/models";

export const proyectos: Proyect[] = [
  {
    type: ["UX", "Front"],
    slug: "amarilla-garden",
    name: "Amarilla Garden",
    proyectType: "E-commerce website",
    description: "Estoy desarrollando un proyecto pro bono para una tienda artesanal de piezas decorativas en cemento. El objetivo es digitalizar su catálogo y abrir un nuevo canal de ventas online, manteniendo su identidad artesanal a través de una experiencia moderna, accesible e intuitiva, que facilite a los clientes  actuales realizar sus compras y captar la atención de nuevos clientes.",
    imageUrl: "/images/Amarilla.webp",
    linkWebsite: "https://www.amarillagarden.com",
    linkGit: "https://github.com/user/portfolio",
    tags: ["Astro", "TypeScript", "Tailwind"],
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
    type: ["UX"],
    slug: "commet-app",
    name: "Commet.App",
    description: "Este proyecto fue desarrollado como parte del curso Fundamentos de UX/UI, aplicando un enfoque de diseño centrado en el usuario, respaldado por procesos de investigación, design thinking y prototipado en Figma.\n\n Se trata de una Plataforma de reseñas tipo red social enfocada en permitir a usuarios de cualquier perfil compartir su opinión sobre productos tecnológicos, ropa, locales comerciales y servicios. La app permite crear publicaciones personalizadas con el nombre del producto o local, precio, lugar de adquisición y reseña personal. Además, incorpora funciones de búsqueda y filtrado inteligentes, mostrando un promedio visual de opiniones para cada ítem, con el fin de facilitar decisiones informadas.",
    imageUrl: "/images/Portada-Commet.webp",
    linkFigma: "https://www.figma.com/design/q7khsSBJocn9TTIOirQoid/Commet.app?node-id=1-925&t=KuJk3EwziEKo4Woi-1",
    tags: ["Figma"],
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
  {
    type: ["Front"],
    slug: "encriptador-texto",
    name: "Encriptador de Texto",
    description: "Proyecto desarrollado como parte del Diplomado en Programación Frontend con JavaScript, en el cual se aplicaron principios fundamentales de desarrollo web moderno como Mobile First, junto con tecnologías clave: HTML5, CSS3, JavaScript, y herramientas de diseño como Figma.",
    imageUrl: "/images/portada-encriptador-texto.webp",
    linkGit: "https://github.com/MorganSnape/Encriptador-Texto.git",
    linkWebsite: "https://encriptador-texto-liard.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

