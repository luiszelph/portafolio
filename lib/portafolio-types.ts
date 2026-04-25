export type NavLink = {
  href: string;
  label: string;
};

export type HeroData = {
  kicker: string;
  headline: string;
  imageSrc: string;
  imageAlt: string;
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
  gitHubLink: string;
  deployLink: string;
};

export type PortafolioData = {
  lang: "es" | "en";
  navLinks: NavLink[];
  hero: HeroData;
  about: AboutData;
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
