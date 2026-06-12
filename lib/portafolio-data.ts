import type { PortafolioData } from "@/lib/portafolio-types";
import { publicAsset } from "@/lib/public-asset";

const esNavLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contactar", label: "Contactar" },
] as const;

/** Sube este número cuando reemplaces la imagen en disco pero mantengas el mismo nombre de archivo */
const HERO_IMAGE_VERSION = "1";

const esHero = {
  kicker: "Portafolio",
  headline: "Bienvenidos, mi nombre es Luis Zelph Moreno Ruiz",
  description:
    "Fullstack Developer especializado en .NET, SQL y aplicaciones web de negocio.",
  location: "Nuevo León, México · Disponible remoto",
  imageSrc: publicAsset(`/developerZelph.png?v=${HERO_IMAGE_VERSION}`),
  imageAlt: "Retrato de Luis Zelph Moreno Ruiz",
  actions: {
    contact: "Contactarme",
    github: "GitHub",
    linkedin: "LinkedIn",
    projects: "Ver proyectos",
  },
  socialLinks: {
    github: "https://github.com/luiszelph",
    linkedin: "https://www.linkedin.com/in/luis-zelph-moreno-ruiz-865779217",
  },
};

const esAbout = {
  body: `Fullstack Developer especializado en .NET y SQL.`,
  body2: `Construyo aplicaciones web enfocadas en negocio: APIs, dashboards y sistemas internos.`,
  body3: `Experiencia en ASP.NET MVC, C#, Angular, React, SQL Server, NopCommerce y optimización de procesos.`,
  body4: `Interesado en resolver problemas reales con soluciones simples, escalables y bien estructuradas.`,
};

const esContact = {
  title: "Contactar",
  description:
    "Envíame un mensaje directo con tus datos de contacto para revisar tu solicitud.",
  responseNote: "Normalmente respondo dentro de 24 a 48 horas.",
  fields: {
    nombre: "Nombre",
    email: "Correo",
    phoneCountry: "País",
    telefono: "Teléfono",
    asunto: "Asunto",
    body: "Mensaje",
  },
  placeholders: {
    nombre: "Tu nombre",
    email: "tu.correo@ejemplo.com",
    telefono: "Número telefónico opcional",
    asunto: "Ej. Propuesta de proyecto",
    body: "Escribe tu mensaje...",
  },
  phoneCountries: [
    { code: "MX", label: "México", dialCode: "+52", flag: "🇲🇽" },
    { code: "US", label: "Estados Unidos", dialCode: "+1", flag: "🇺🇸" },
    { code: "CA", label: "Canadá", dialCode: "+1", flag: "🇨🇦" },
  ],
  actions: {
    send: "Enviar mensaje",
    sending: "Enviando...",
  },
  messages: {
    sending: "Enviando mensaje...",
    success: "Mensaje enviado correctamente.",
    error: "No fue posible enviar el mensaje. Intenta de nuevo más tarde.",
  },
  validation: {
    emailInvalid: "Agregue un correo válido.",
  },
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
  {
    id: "impulsora-elizondo",
    name: "Impulsora Elizondo",
    role: "Desarrollador Fullstack (.NET)",
    period: "Noviembre 2025 - Actual",
    highlights: [
      "Desarrollo de plataforma eCommerce para +10,000 usuarios con NopCommerce.",
      "Implementación de funcionalidades de carrito y flujo de compra.",
      "Integración de pagos con PayPal y Paywork.",
      "Optimización de consultas SQL para mejorar rendimiento de la plataforma.",
    ],
    impact:
      "Impacto: mayor estabilidad y escalabilidad en operaciones de comercio electrónico.",
    imageSrc: publicAsset("elizondo.png"),
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
  { name: "SQL Server", imageSrc: publicAsset("sql.png") },
  { name: "ASP.NET MVC", imageSrc: publicAsset("net.png") },
  { name: ".NET", imageSrc: publicAsset("net.png") },
  { name: "NopCommerce", imageSrc: publicAsset("net.png") },
  { name: "ChatGPT", imageSrc: publicAsset("chatgpt.png") },
  { name: "Windsurf", imageSrc: publicAsset("windsurf.png") },
  { name: "Cursor", imageSrc: publicAsset("cursor.png") },
] as const;

const esTechnologyExpertise = [
  {
    title: "Backend & .NET",
    technologies: [".NET", "C#", "ASP.NET MVC", "APIs"],
    description:
      "Desarrollo de lógica de negocio, endpoints, módulos administrativos y mantenimiento de aplicaciones web empresariales.",
    level: "Uso laboral",
  },
  {
    title: "Frontend",
    technologies: ["JavaScript", "React", "Angular", "HTML", "CSS"],
    description:
      "Construcción de interfaces responsivas, lógica de interacción, consumo de APIs y mejoras enfocadas en experiencia de usuario.",
    level: "Uso laboral y proyectos",
  },
  {
    title: "SQL Server & Datos",
    technologies: ["SQL Server", "Stored Procedures", "Consultas", "Reportes"],
    description:
      "Diseño de tablas, consultas, procedimientos almacenados y soporte a reportes para procesos operativos.",
    level: "Uso laboral",
  },
  {
    title: "E-commerce",
    technologies: ["NopCommerce", "Carrito", "Checkout", "Pagos"],
    description:
      "Desarrollo y mantenimiento de funcionalidades para plataformas de comercio electrónico y flujos de compra.",
    level: "Uso laboral",
  },
  {
    title: "Herramientas & AI",
    technologies: ["GitHub", "Cursor", "ChatGPT", "Windsurf"],
    description:
      "Uso de herramientas de desarrollo, control de versiones y asistencia con IA para acelerar análisis, implementación y documentación.",
    level: "Uso frecuente",
  },
] as const;

const esProjects = [
  {
    id: "tienda-web",
    description:
      "Trabajo actualmente en el desarrollo de una tienda web, algunos de los retos han sido: Elaboración de interfaces y funcionalidades para realizar compras en linea, la integración de pagos con Paypal, la gestión de datos. La aplicación utiliza Nopcommerce por lo cual modificar algunas secciones es un reto.",
    imageSrc: publicAsset("portafolio/tw_1.jpeg"),
    imageGallery: [
      publicAsset("portafolio/tw_1.jpeg"),
      publicAsset("portafolio/tw_2.jpeg"),
      publicAsset("portafolio/tw_3.jpeg"),
      publicAsset("portafolio/tw_4.jpeg"),
    ],
  },
  {
    id: "sistema-hermes",
    description:
      "Sistema interno para administrar gastos generados en órdenes de carga, centralizar información operativa y facilitar reportes para clientes y facturación.",
    details: [
      {
        label: "Problema resuelto",
        content:
          "El registro manual de gastos dificultaba el control operativo y la generación de reportes para clientes. Hermes permitió capturar gastos desde una interfaz web sencilla, centralizar la información y generar reportes por periodos de fechas para apoyar al equipo de facturación.",
      },
      {
        label: "Arquitectura",
        content:
          "Aplicación web MVC desarrollada en .NET con backend en C#, base de datos SQL Server, módulos administrativos, usuarios, permisos y reportes automáticos.",
      },
      {
        label: "Tecnologías utilizadas",
        content:
          ".NET, C#, SQL Server, JavaScript, Bootstrap 5, DataTables, CSS.",
      },
      {
        label: "Resultados",
        content:
          "Uso interno por aproximadamente 40 usuarios de operación, supervisión, gerencia y facturación. Redujo trabajo manual, mejoró el control de información, centralizó datos, agilizó reportes e incluyó 8 módulos y 4 reportes principales.",
      },
      {
        label: "Alcance desarrollado",
        content:
          "Participé en frontend, backend y base de datos: interfaces responsivas, lógica con JavaScript, endpoints, reglas de negocio, tablas y stored procedures.",
      },
    ],
    imageSrc: publicAsset("portafolio/hermes_1.jpeg"),
    imageGallery: [
      publicAsset("portafolio/hermes_1.jpeg"),
      publicAsset("portafolio/hermes_2.jpeg"),
      publicAsset("portafolio/hermes_3.jpeg"),
      publicAsset("portafolio/hermes_4.jpeg"),
    ],
  },
  {
    id: "simulador-sql",
    description: "Aplicación para simular consultas sencillas de SQL.",
    imageSrc: publicAsset("simulador-sql.png"),
    gitHubLink: "https://github.com/luiszelph/simulador-sql",
    deployLink: "https://luiszelph.github.io/simulador-sql/",
  },
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
  contact: { ...esContact },
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
  technologyExpertise: [...esTechnologyExpertise],
  projects: [...esProjects],
};

export const navLinks = portafolioDataEs.navLinks;
export const hero = portafolioDataEs.hero;
export const about = portafolioDataEs.about;
export const technologies = portafolioDataEs.technologies;
export const projects = portafolioDataEs.projects;
export const experiences = portafolioDataEs.experiences;