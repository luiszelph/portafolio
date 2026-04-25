import type { PortfolioData } from "@/lib/portfolio-types";

/** Increase this version when replacing the image file with same name. */
const HERO_IMAGE_VERSION = "1";

export const portfolioDataEng: PortfolioData = {
  lang: "en",
  navLinks: [
    { href: "#inicio", label: "Home" },
    { href: "#sobre-mi", label: "About" },
    { href: "#experiencia", label: "Experience" },
    { href: "#tecnologias", label: "Technologies" },
    { href: "#proyectos", label: "Projects" },
  ],
  hero: {
    kicker: "Portfolio",
    headline: "Welcome, my name is Luis Zelph Moreno Ruiz",
    imageSrc: `/portafolio/developerZelph.png?v=${HERO_IMAGE_VERSION}`,
    imageAlt: "Portrait of Luis Zelph Moreno Ruiz",
  },
  about: {
    body: "Fullstack Developer specialized in .NET and SQL.",
    body2:
      "I build business-focused web applications: APIs, dashboards, and internal systems.",
    body3:
      "Experience with Angular, React, SQL Server, and process optimization.",
    body4:
      "Interested in solving real problems with simple, scalable, and well-structured solutions.",
  },
  sectionTitles: {
    about: "About me",
    experience: "Work experience",
    technologies: "Technologies",
    projects: "Projects",
  },
  sectionDescriptions: {
    experience: "Summary of collaborations and lessons learned in web projects.",
    technologies: "Tools and languages I have used in web development projects.",
    projects: "Personal projects with repository and live demo links.",
  },
  actions: {
    visitSite: "Visit site",
  },
  labels: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    language: "Language",
  },
  experiences: [
    {
      id: "ruhrpumpen",
      name: "Ruhrpumpen",
      role: "Web Developer (Internship)",
      period: "January 2022 – August 2022",
      highlights: [
        "Contributed to the development of an internal web application using C#, JavaScript, and SQL Server.",
        "Implemented interfaces with HTML and Bootstrap to improve usability.",
        "Built SQL queries for operational data management.",
      ],
      impact:
        "Result: strengthened solid foundations in fullstack development and business logic.",
      imageSrc: "/portafolio/experiences/rp.png",
    },
    {
      id: "tdisa",
      name: "🏥 TDI",
      role: "Junior Web Developer",
      period: "August 2022 – December 2022",
      highlights: [
        "Developed features for healthcare systems with ASP.NET and JavaScript.",
        "Implemented backend logic in C# and SQL Server queries.",
        "Collaborated on internal process improvements through digital tools.",
      ],
      impact:
        "Impact: optimized information flows in medical applications.",
      imageSrc: "/portafolio/experiences/tdisa.png",
    },
    {
      id: "innatos",
      name: "💻 Innatos",
      role: "Frontend / Fullstack Developer",
      period: "January 2023 – November 2023",
      highlights: [
        "Developed dynamic interfaces with Angular and AngularJS.",
        "Integrated REST APIs developed in C#.",
        "Implemented data consumption and manipulation from SQL Server.",
      ],
      impact:
        "Impact: improved user experience and web application performance.",
      imageSrc: "/portafolio/experiences/innatos.png",
    },
    {
      id: "ravisa",
      name: "🏢 Ravisa",
      role: "Fullstack Developer (.NET)",
      period: "June 2024 – November 2025",
      highlights: [
        "Developed and maintained web applications using .NET, C#, and SQL Server.",
        "Built APIs and business logic for internal systems.",
        "Implemented improvements in dashboards and data visualization.",
        "Participated in optimizing operational processes through digital solutions.",
      ],
      impact:
        "Impact: increased operational efficiency and better information control.",
      imageSrc: "/portafolio/experiences/ravisa.png",
    },
  ],
  technologies: [
    { name: "JavaScript", imageSrc: "/portafolio/technologies/javascript.png" },
    { name: "CSS", imageSrc: "/portafolio/technologies/css.png" },
    { name: "GitHub", imageSrc: "/portafolio/technologies/github.png" },
    { name: "HTML", imageSrc: "/portafolio/technologies/html.png" },
    { name: "React", imageSrc: "/portafolio/technologies/reactjs.png" },
    { name: "Angular", imageSrc: "/portafolio/technologies/angular.png" },
    { name: "C#", imageSrc: "/portafolio/technologies/csharp.png" },
    { name: "Next.js", imageSrc: "/portafolio/technologies/nextjs.svg" },
    { name: "SQL", imageSrc: "/portafolio/technologies/sql.png" },
    { name: "JAVA", imageSrc: "/portafolio/technologies/java.png" },
    { name: "NET", imageSrc: "/portafolio/technologies/net.png" },
    { name: "MAUI", imageSrc: "/portafolio/technologies/maui.png" },
    { name: "CHATGPT", imageSrc: "/portafolio/technologies/chatgpt.png" },
    { name: "WINDSURF", imageSrc: "/portafolio/technologies/windsurf.png" },
    { name: "CURSOR", imageSrc: "/portafolio/technologies/cursor.png" },
  ],
  projects: [
    {
      id: "tictactoe",
      description: "My first project built with React: a tic-tac-toe game.",
      imageSrc: "/portafolio/projectTicTacToe.png",
      gitHubLink: "https://github.com/luiszelph/tictactoe",
      deployLink: "https://luiszelph.github.io/tictactoe/",
    },
    {
      id: "calculator",
      description: "A small web calculator.",
      imageSrc: "/portafolio/projectCalculator.png",
      gitHubLink: "https://github.com/luiszelph/calculator",
      deployLink: "https://luiszelph.github.io/calculator/",
    },
  ],
};
