"use client";

import { useMemo, useState } from "react";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroProfile } from "@/components/HeroProfile";
import { PortafolioNav } from "@/components/PortafolioNav";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { portafolioDataEs } from "@/lib/portafolio-data";
import { portafolioDataEng } from "@/lib/portafolio-data-eng";
import type { PortafolioData } from "@/lib/portafolio-types";

export default function Home() {
  const [language, setLanguage] = useState<PortafolioData["lang"]>("es");
  const data = useMemo(
    () => (language === "en" ? portafolioDataEng : portafolioDataEs),
    [language],
  );

  return (
    <div className="flex min-h-full flex-col bg-page text-ink">
      <PortafolioNav
        navLinks={data.navLinks}
        labels={data.labels}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main className="flex-1">
        <HeroProfile hero={data.hero} />
        <AboutSection about={data.about} title={data.sectionTitles.about} />
        <ExperienceSection
          title={data.sectionTitles.experience}
          description={data.sectionDescriptions.experience}
          experiences={data.experiences}
        />
        <TechnologiesSection
          title={data.sectionTitles.technologies}
          description={data.sectionDescriptions.technologies}
          technologies={data.technologies}
        />
        <ProjectsSection
          title={data.sectionTitles.projects}
          description={data.sectionDescriptions.projects}
          visitSiteLabel={data.actions.visitSite}
          projects={data.projects}
        />
      </main>
    </div>
  );
}
