import type { PortfolioData } from "@/lib/portfolio-types";

const esNavLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proyectos", label: "Proyectos" },
] as const;

/** Sube este número cuando reemplaces la imagen en disco pero mantengas el mismo nombre de archivo (rompe caché del navegador y de `next/image`). */
const HERO_IMAGE_VERSION = "1";

const esHero = {
  kicker: "Portafolio",
  headline:
    "Bienvenidos, mi nombre es Luis Zelph Moreno Ruiz",
  imageSrc: `/portfolio/developerZelph.png?v=${HERO_IMAGE_VERSION}`,
  imageAlt: "Retrato de Luis Zelph Moreno Ruiz",
};

const esAbout = {
  body: `Fullstack Developer especializado en .NET y SQL.`,
  body2: `Construyo aplicaciones web enfocadas en negocio: APIs, dashboards y sistemas internos.`,
  body3: `Experiencia en Bootstrap, Jquery, Vanilla JS, Typescript, Angular, React, SQL Server y optimización de procesos.`,
  body4: `Interesado en resolver problemas reales con soluciones simples, escalables y bien estructuradas.`,
};

const esExperiences = [
  {
    id: "ruhrpumpen",
    name: "Ruhrpumpen",
    role: "Desarrollador Web (Prácticas profesionales)",
    period: "Enero 2022 – Agosto 2022",
    highlights: [
      "Participé en el desarrollo de una aplicación web interna utilizando C#, JavaScript y SQL Server.",
      "Implementé interfaces con HTML y Bootstrap para mejorar la usabilidad.",
      "Realicé consultas SQL para gestión de datos operativos.",
    ],
    impact:
      "Resultado: fortalecí bases sólidas en desarrollo fullstack y lógica de negocio.",
    imageSrc: "/portfolio/experiences/rp.png",
  },
  {
    id: "tdisa",
    name: "TDI",
    role: "Desarrollador Web Jr.",
    period: "Agosto 2022 – Diciembre 2022",
    highlights: [
      "Desarrollé funcionalidades para sistemas del sector médico con ASP.NET y JavaScript.",
      "Implementé lógica backend en C# y consultas en SQL Server.",
      "Colaboré en la mejora de procesos internos mediante herramientas digitales.",
    ],
    impact:
      "Impacto: optimización de flujos de información en aplicaciones médicas.",
    imageSrc: "/portfolio/experiences/tdisa.png",
  },
  {
    id: "innatos",
    name: "Innatos",
    role: "Desarrollador Frontend / Fullstack",
    period: "Enero 2023 – Noviembre 2023",
    highlights: [
      "Desarrollé interfaces dinámicas con Angular y AngularJS.",
      "Integré APIs REST desarrolladas en C#.",
      "Implementé consumo y manipulación de datos desde SQL Server.",
    ],
    impact:
      "Impacto: mejora en la experiencia de usuario y rendimiento de aplicaciones web.",
    imageSrc: "/portfolio/experiences/innatos.png",
  },
  {
    id: "ravisa",
    name: "Ravisa",
    role: "Desarrollador Fullstack (.NET)",
    period: "Junio 2024 – Noviembre 2025",
    highlights: [
      "Desarrollé y mantuve aplicaciones web utilizando .NET, C# y SQL Server.",
      "Construí APIs y lógica de negocio para sistemas internos.",
      "Implementé mejoras en dashboards y visualización de datos.",
      "Participé en la optimización de procesos operativos mediante soluciones digitales.",
    ],
    impact:
      "Impacto: incremento en eficiencia operativa y mejor control de información.",
    imageSrc: "/portfolio/experiences/ravisa.png",
  }
] as const;

const esTechnologies = [
  { name: "JavaScript", imageSrc: "/portfolio/technologies/javascript.png" },
  { name: "CSS", imageSrc: "/portfolio/technologies/css.png" },
  { name: "GitHub", imageSrc: "/portfolio/technologies/github.png" },
  { name: "HTML", imageSrc: "/portfolio/technologies/html.png" },
  { name: "React", imageSrc: "/portfolio/technologies/reactjs.png" },
  { name: "Angular", imageSrc: "/portfolio/technologies/angular.png" },
  { name: "C#", imageSrc: "/portfolio/technologies/csharp.png" },
  { name: "Visual Basic", imageSrc: "/portfolio/technologies/vb.png" },
  { name: "SQL", imageSrc: "/portfolio/technologies/sql.png" },
  { name: "JAVA", imageSrc: "/portfolio/technologies/java.png" },
  { name: "NET", imageSrc: "/portfolio/technologies/net.png" },
  { name: "MAUI", imageSrc: "/portfolio/technologies/maui.png" },
  { name: "CHATGPT", imageSrc: "/portfolio/technologies/chatgpt.png" },
  { name: "WINDSURF", imageSrc: "/portfolio/technologies/windsurf.png" },
  { name: "CURSOR", imageSrc: "/portfolio/technologies/cursor.png" },
] as const;

const esProjects = [
  {
    id: "tictactoe",
    description:
      "Mi primer proyecto realizado en React: un juego de tres en raya.",
    imageSrc: "/portfolio/projectTicTacToe.png",
    gitHubLink: "https://github.com/luiszelph/tictactoe",
    deployLink: "https://luiszelph.github.io/tictactoe/",
  },
  {
    id: "calculator",
    description: "Una pequeña calculadora web.",
    imageSrc: "/portfolio/projectCalculator.png",
    gitHubLink: "https://github.com/luiszelph/calculator",
    deployLink: "https://luiszelph.github.io/calculator/",
  },
] as const;

export const portfolioDataEs: PortfolioData = {
  lang: "es",
  navLinks: [...esNavLinks],
  hero: { ...esHero },
  about: { ...esAbout },
  sectionTitles: {
    about: "Sobre mí",
    experience: "Experiencia laboral",
    technologies: "Tecnologías",
    projects: "Proyectos",
  },
  sectionDescriptions: {
    experience: "Resumen de colaboraciones y aprendizajes en proyectos web.",
    technologies: "Herramientas y lenguajes con los que he trabajado en proyectos web.",
    projects: "Algunos trabajos personales con enlace al repositorio y despliegue.",
  },
  actions: {
    visitSite: "Visitar sitio",
  },
  labels: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    language: "Idioma",
  },
  experiences: esExperiences.map((item) => ({
    ...item,
    highlights: [...item.highlights],
  })),
  technologies: [...esTechnologies],
  projects: [...esProjects],
};

export const navLinks = portfolioDataEs.navLinks;
export const hero = portfolioDataEs.hero;
export const about = portfolioDataEs.about;
export const technologies = portfolioDataEs.technologies;
export const projects = portfolioDataEs.projects;
export const experiences = portfolioDataEs.experiences;
