import type { PortafolioData } from "@/lib/portafolio-types";
import { publicAsset } from "@/lib/public-asset";

/** Increase this version when replacing the image file with same name. */
const HERO_IMAGE_VERSION = "1";

export const portafolioDataEng: PortafolioData = {
  lang: "en",
  navLinks: [
    { href: "#inicio", label: "Home" },
    { href: "#sobre-mi", label: "About" },
    { href: "#experiencia", label: "Experience" },
    { href: "#tecnologias", label: "Technologies" },
    { href: "#proyectos", label: "Projects" },
    { href: "#contactar", label: "Contact" },
  ],
  hero: {
    kicker: "Full Stack Developer · .NET · E-commerce",
    headline: "Luis Zelph Moreno Ruiz.",
    description:
      "4+ years building internal platforms and e-commerce in production for real-world operations in Mexico — from APIs and dashboards to stores serving thousands of users.",
    location: "Nuevo León, Mexico · Available remotely",
    imageSrc: publicAsset(`/developerZelph.png?v=${HERO_IMAGE_VERSION}`),
    imageAlt: "Portrait of Luis Zelph Moreno Ruiz",
    actions: {
      contact: "Contact me",
      github: "GitHub",
      linkedin: "LinkedIn",
      projects: "View projects",
    },
    socialLinks: {
      github: "https://github.com/luiszelph",
      linkedin: "https://www.linkedin.com/in/luis-zelph-moreno-ruiz-865779217",
    },
  },
  about: {
    body: "I build software that solves real operations:",
    body2:
      "from centralizing logistics expenses to purchase platforms serving thousands of users.",
    body3:
      "My strength is .NET, C#, and SQL Server, with experience in ASP.NET MVC, Angular, React, and NopCommerce.",
    body4:
      "I aim to deliver simple, scalable, and well-structured solutions — focused on performance, maintainability, and business impact.",
  },
  contact: {
    title: "Contact",
    description:
      "Send me a direct message with your contact details so I can review your request.",
    responseNote: "I typically respond within 24-48 hours.",
    fields: {
      nombre: "Name",
      email: "Email",
      phoneCountry: "Country",
      telefono: "Phone",
      asunto: "Subject",
      body: "Body",
    },
    placeholders: {
      nombre: "Your name",
      email: "your.email@example.com",
      telefono: "Optional phone number",
      asunto: "E.g. Project proposal",
      body: "Write your message...",
    },
    phoneCountries: [
      { code: "MX", label: "Mexico", dialCode: "+52", flag: "🇲🇽" },
      { code: "US", label: "United States", dialCode: "+1", flag: "🇺🇸" },
      { code: "CA", label: "Canada", dialCode: "+1", flag: "🇨🇦" },
    ],
    actions: {
      send: "Send message",
      sending: "Sending...",
    },
    messages: {
      sending: "Sending message...",
      success: "Message sent successfully.",
      error: "The message could not be sent. Please try again later.",
    },
    validation: {
      emailInvalid: "Please enter a valid email address.",
    },
  },
  sectionTitles: {
    about: "About me",
    experience: "Work experience",
    technologies: "Technologies",
    projects: "Projects",
  },
  sectionDescriptions: {
    experience:
      "From manufacturing and healthcare to logistics and retail: four years delivering web systems in production.",
    technologies:
      "Core stack for enterprise applications, e-commerce, and internal business systems.",
    projects:
      "Real systems with real users — from enterprise platforms to technical demos.",
  },
  experienceUi: {
    hint: "Tap each stage to see the details.",
    currentBadge: "Current",
  },
  projectsUi: {
    groups: {
      production: "In production",
      demo: "Demos & open source",
      experiment: "Experiments",
    },
    viewCaseStudy: "View case study",
    hideCaseStudy: "Hide case study",
    tryDemo: "Try demo",
    viewOnGitHub: "GitHub",
    previousImage: "Previous image",
    nextImage: "Next image",
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
      id: "impulsora-elizondo",
      name: "Impulsora Elizondo",
      role: "Fullstack Developer (.NET)",
      period: "November 2025 – Present",
      sector: "Retail · E-commerce",
      isCurrent: true,
      highlights: [
        "Developed an eCommerce platform supporting 10,000+ users with NopCommerce.",
        "Implemented shopping cart and checkout features.",
        "Integrated PayPal and Paywork payment gateways.",
        "Optimized SQL queries to improve platform performance.",
      ],
      impact:
        "Impact: improved platform stability and scalability for eCommerce operations.",
      technologies: [".NET", "C#", "NopCommerce", "SQL Server", "PayPal"],
      imageSrc: publicAsset("elizondo.png"),
    },
    {
      id: "ravisa",
      name: "Ravisa",
      role: "Fullstack Developer (.NET)",
      period: "June 2024 – November 2025",
      sector: "Logistics",
      highlights: [
        "Developed and maintained web applications using .NET, C#, and SQL Server.",
        "Built APIs and business logic for internal systems.",
        "Implemented improvements in dashboards and data visualization.",
        "Participated in optimizing operational processes through digital solutions.",
      ],
      impact:
        "Impact: increased operational efficiency and better information control.",
      technologies: [".NET", "C#", "SQL Server", "ASP.NET MVC", "JavaScript"],
      imageSrc: publicAsset("ravisa.png"),
    },
    {
      id: "innatos",
      name: "Innatos",
      role: "Frontend / Fullstack Developer",
      period: "January 2023 – November 2023",
      sector: "Product",
      highlights: [
        "Developed dynamic interfaces with Angular and AngularJS.",
        "Integrated REST APIs developed in C#.",
        "Implemented data consumption and manipulation from SQL Server.",
      ],
      impact:
        "Impact: improved user experience and web application performance.",
      technologies: ["Angular", "AngularJS", "C#", "REST APIs", "SQL Server"],
      imageSrc: publicAsset("innatos.png"),
    },
    {
      id: "tdisa",
      name: "TDI",
      role: "Junior Web Developer",
      period: "August 2022 – December 2022",
      sector: "Healthcare",
      highlights: [
        "Developed features for healthcare systems with ASP.NET and JavaScript.",
        "Implemented backend logic in C# and SQL Server queries.",
        "Collaborated on internal process improvements through digital tools.",
      ],
      impact: "Impact: optimized information flows in medical applications.",
      technologies: ["ASP.NET", "C#", "JavaScript", "SQL Server"],
      imageSrc: publicAsset("tdisa.png"),
    },
    {
      id: "ruhrpumpen",
      name: "Ruhrpumpen",
      role: "Web Developer (Internship)",
      period: "January 2022 – August 2022",
      sector: "Manufacturing",
      highlights: [
        "Contributed to the development of an internal web application using C#, JavaScript, and SQL Server.",
        "Implemented interfaces with HTML and Bootstrap to improve usability.",
        "Built SQL queries for operational data management.",
      ],
      impact:
        "Result: strengthened solid foundations in fullstack development and business logic.",
      technologies: ["C#", "JavaScript", "SQL Server", "Bootstrap", "HTML"],
      imageSrc: publicAsset("rp.png"),
    },
  ],
  technologies: [
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
  ],
  technologyExpertise: [
    {
      title: "Backend & .NET",
      technologies: [".NET", "C#", "ASP.NET MVC", "APIs"],
      description:
        "Development of business logic, endpoints, administrative modules, and maintenance for business-focused web applications.",
      level: "Professional use",
    },
    {
      title: "Frontend",
      technologies: ["JavaScript", "React", "Angular", "HTML", "CSS"],
      description:
        "Building responsive interfaces, interaction logic, API consumption, and user experience improvements.",
      level: "Professional and project use",
    },
    {
      title: "SQL Server & Data",
      technologies: ["SQL Server", "Stored Procedures", "Queries", "Reports"],
      description:
        "Table design, queries, stored procedures, and reporting support for operational processes.",
      level: "Professional use",
    },
    {
      title: "E-commerce",
      technologies: ["NopCommerce", "Cart", "Checkout", "Payments"],
      description:
        "Development and maintenance of features for e-commerce platforms and purchase flows.",
      level: "Professional use",
    },
    {
      title: "Tools & AI",
      technologies: ["GitHub", "Cursor", "ChatGPT", "Windsurf"],
      description:
        "Use of development tools, version control, and AI assistance to speed up analysis, implementation, and documentation.",
      level: "Frequent use",
    },
  ],
  projects: [
    {
      id: "hermes-system",
      title: "Hermes — Operational expense management",
      category: "Internal system · Logistics",
      group: "production",
      featured: true,
      description:
        "Internal system to centralize cargo order expenses, eliminate manual tracking, and generate billing reports.",
      metrics: ["~40 users", "8 modules", "4 reports"],
      technologies: [".NET", "C#", "SQL Server", "Bootstrap", "DataTables"],
      details: [
        {
          label: "Problem solved",
          content:
            "Manual expense tracking made operational control and client reporting difficult. Hermes allowed users to capture expenses through a simple web interface, centralize information, and generate date-range reports to support the billing team.",
        },
        {
          label: "Architecture",
          content:
            "MVC web application built with .NET, a C# backend, SQL Server database, administrative modules, users, permissions, and automated reports.",
        },
        {
          label: "Results",
          content:
            "Used internally by approximately 40 users across operations, supervision, management, and billing. It reduced manual work, improved information control, centralized data, and accelerated reporting.",
        },
        {
          label: "Scope delivered",
          content:
            "Contributed across frontend, backend, and database work: responsive interfaces, JavaScript logic, endpoints, business rules, tables, and stored procedures.",
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
      id: "web-store",
      title: "Impulsora Elizondo E-commerce",
      category: "E-commerce · In production",
      group: "production",
      description:
        "NopCommerce e-commerce platform for retail operations at scale: shopping cart, checkout, and integrated payments.",
      metrics: ["10,000+ users", "Integrated payments", "NopCommerce"],
      technologies: [".NET", "NopCommerce", "SQL Server", "PayPal", "Paywork"],
      imageSrc: publicAsset("portafolio/tw_1.jpeg"),
      imageGallery: [
        publicAsset("portafolio/tw_1.jpeg"),
        publicAsset("portafolio/tw_2.jpeg"),
        publicAsset("portafolio/tw_3.jpeg"),
        publicAsset("portafolio/tw_4.jpeg"),
      ],
    },
    {
      id: "simulador-sql",
      title: "SQL Simulator",
      category: "Technical demo · Open source",
      group: "demo",
      description:
        "Interactive web app to practice basic SQL queries. Open-source project with a live demo.",
      metrics: ["Live demo", "Open source"],
      technologies: ["JavaScript", "HTML", "CSS"],
      imageSrc: publicAsset("simulador-sql.png"),
      gitHubLink: "https://github.com/luiszelph/simulador-sql",
      deployLink: "https://luiszelph.github.io/simulador-sql/",
    },
    {
      id: "tictactoe",
      title: "Tic-tac-toe — React",
      category: "Experiment · React",
      group: "experiment",
      description:
        "First React project: game with turn logic and win detection.",
      technologies: ["React", "JavaScript"],
      imageSrc: publicAsset("projectTicTacToe.png"),
      gitHubLink: "https://github.com/luiszelph/tictactoe",
      deployLink: "https://luiszelph.github.io/tictactoe/",
    },
    {
      id: "calculator",
      title: "Web calculator",
      category: "Practice · JavaScript",
      group: "experiment",
      description:
        "Basic browser calculator to reinforce JavaScript fundamentals and DOM manipulation.",
      technologies: ["JavaScript", "HTML", "CSS"],
      imageSrc: publicAsset("projectCalculator.png"),
      gitHubLink: "https://github.com/luiszelph/calculator",
      deployLink: "https://luiszelph.github.io/calculator/",
    },
  ],
};