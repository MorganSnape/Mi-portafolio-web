import type { CategoriaBlog, SectionBlogType } from "@/models";

// Agrupaciones de la página de inicio del blog (las "carpetas" del boceto).
// El orden de este arreglo es el orden en que aparecen en la página.
export const categoriasBlog: { id: CategoriaBlog; nombre: string }[] = [
  { id: "diseno", nombre: "Diseño" },
  { id: "programacion", nombre: "Programación" },
];

// Cada slug = nombre de una carpeta dentro de src/content/blog/
export const dataSeccionesBlog: SectionBlogType[] = [
  {
    slug: "javascript",
    categoria: "programacion",
    title: "Apuntes sobre JavaScript",
    description: "JavaScript es un lenguaje de programación que permite crear páginas web interactivas. Es el motor detrás de botones que reaccionan, formularios que validan datos, juegos en el navegador y mucho más. Junto con HTML y CSS, forma la base del desarrollo web moderno. Aprender JavaScript te abre las puertas a crear experiencias digitales dinámicas y personalizadas.",
    image: "/images/blog/portadaJS.avif",
  },
  {
    // El slug debe coincidir con el nombre real de la carpeta en src/content/blog/
    slug: "diseñoGrafico",
    categoria: "diseno",
    title: "Apuntes sobre Diseño gráfico",
    description: "El diseño gráfico es la disciplina que combina arte y comunicación para transmitir mensajes específicos de forma visual. Utilizando elementos como imágenes, tipografías, colores y composición, busca resolver problemas y satisfacer necesidades de comunicación entre una marca y su público.",
    image: "/images/blog/portada-D-Grafico.jpeg",
  },
  {
    slug: "react",
    categoria: "programacion",
    title: "Apuntes sobre React",
    description: "React es una biblioteca de JavaScript que permite crear interfaces de usuario dinámicas y complejas. Es una de las bibliotecas más populares para el desarrollo de aplicaciones web y se utiliza ampliamente en la industria. React se enfoca en facilitar la creación de interfaces de usuario, permitiendo a los desarrolladores crear aplicaciones web de alta calidad y eficiencia.",
    image: "/images/blog/portada-React.png",
  },
];
