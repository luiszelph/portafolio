export type NavLink = {
  href: string;
  label: string;
};

export type HeroData = {
  kicker: string;
  headline: string;
  description: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  actions: {
    contact: string;
    github: string;
    linkedin: string;
    projects: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
  };
};

export type AboutData = {
  body: string;
  body2: string;
  body3: string;
  body4: string;
};

export type Experience = {
  id: string;
  name: string;
  role: string;
  period: string;
  highlights: string[];
  impact: string;
  imageSrc: string;
};

export type Technology = {
  name: string;
  imageSrc: string;
};

export type Project = {
  id: string;
  description: string;
  imageSrc: string;
  imageGallery?: readonly string[];
  gitHubLink?: string;
  deployLink?: string;
};

export type ContactData = {
  title: string;
  description: string;
  responseNote: string;
  fields: {
    nombre: string;
    email: string;
    phoneCountry: string;
    telefono: string;
    asunto: string;
    body: string;
  };
  placeholders: {
    nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    body: string;
  };
  phoneCountries: {
    code: string;
    label: string;
    dialCode: string;
    flag: string;
  }[];
  actions: {
    send: string;
    sending: string;
  };
  messages: {
    sending: string;
    success: string;
    error: string;
  };
  validation: {
    emailInvalid: string;
  };
};

export type PortafolioData = {
  lang: "es" | "en";
  navLinks: NavLink[];
  hero: HeroData;
  about: AboutData;
  contact: ContactData;
  sectionTitles: {
    about: string;
    experience: string;
    technologies: string;
    projects: string;
  };
  sectionDescriptions: {
    experience: string;
    technologies: string;
    projects: string;
  };
  actions: {
    visitSite: string;
  };
  labels: {
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    mobileNav: string;
    language: string;
  };
  experiences: Experience[];
  technologies: Technology[];
  projects: Project[];
};
