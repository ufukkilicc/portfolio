import React from "react";
import HeroSection from "./HeroSection";
import EmailSection from "./EmailSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import AchievementsSection from "./AchievementsSection";
import SkillsSection from "./SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <HeroSection />
      {/* <AchievementsSection /> */}
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EmailSection />
    </main>
  );
}
