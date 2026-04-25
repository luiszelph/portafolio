import type { PortafolioData } from "@/lib/portafolio-types";
import { publicAsset } from "@/lib/public-asset";

const esNavLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proyectos", label: "Proyectos" },
] as const;

/** Sube este número cuando reemplaces la imagen en disco pero mantengas el mismo nombre de archivo */
const HERO_IMAGE_VERSION = "1";

const esHero = {
  kicker: "Portafolio",
  headline: "Bienvenidos, mi nombre es Luis Zelph Moreno Ruiz",
  imageSrc: publicAsset(`/developerZelph.png?v=${HERO_IMAGE_VERSION}`),
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
    imageSrc: publicAsset("rp.png"),
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
    imageSrc: publicAsset("tdisa.png"),
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
    imageSrc: publicAsset("innatos.png"),
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
    imageSrc: publicAsset("ravisa.png"),
  },
] as const;

const esTechnologies = [
  { name: "JavaScript", imageSrc: publicAsset("javascript.png") },
  { name: "CSS", imageSrc: publicAsset("css.png") },
  { name: "GitHub", imageSrc: publicAsset("github.png") },
  { name: "HTML", imageSrc: publicAsset("html.png") },
  { name: "React", imageSrc: publicAsset("reactjs.png") },
  { name: "Angular", imageSrc: publicAsset("angular.png") },
  { name: "C#", imageSrc: publicAsset("csharp.png") },
  { name: "Next.js", imageSrc: publicAsset("nextjs.png") },
  { name: "SQL", imageSrc: publicAsset("sql.png") },
  { name: "JAVA", imageSrc: publicAsset("java.png") },
  { name: "NET", imageSrc: publicAsset("net.png") },
  { name: "MAUI", imageSrc: publicAsset("maui.png") },
  { name: "CHATGPT", imageSrc: publicAsset("chatgpt.png") },
  { name: "WINDSURF", imageSrc: publicAsset("windsurf.png") },
  { name: "CURSOR", imageSrc: publicAsset("cursor.png") },
] as const;

const esProjects = [
  {
    id: "tictactoe",
    description:
      "Mi primer proyecto realizado en React: un juego de tres en raya.",
    imageSrc: publicAsset("projectTicTacToe.png"),
    gitHubLink: "https://github.com/luiszelph/tictactoe",
    deployLink: "https://luiszelph.github.io/tictactoe/",
  },
  {
    id: "calculator",
    description: "Una pequeña calculadora web.",
    imageSrc: publicAsset("projectCalculator.png"),
    gitHubLink: "https://github.com/luiszelph/calculator",
    deployLink: "https://luiszelph.github.io/calculator/",
  },
] as const;

export const portafolioDataEs: PortafolioData = {
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
    technologies:
      "Herramientas y lenguajes con los que he trabajado en proyectos web.",
    projects:
      "Algunos trabajos personales con enlace al repositorio y despliegue.",
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

export const navLinks = portafolioDataEs.navLinks;
export const hero = portafolioDataEs.hero;
export const about = portafolioDataEs.about;
export const technologies = portafolioDataEs.technologies;
export const projects = portafolioDataEs.projects;
export const experiences = portafolioDataEs.experiences;