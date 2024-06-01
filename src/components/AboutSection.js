import React from "react";
import { useSelector } from "react-redux";
import { getAllSettings } from "../features/settingsSlice";

export default function AboutSection() {
  const { settings } = useSelector(getAllSettings);
  const { language } = settings;
  return (
    <section className="text-white" id="about">
      <div className="flex flex-col justify-start gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === "tr" ? "Hakkımda" : "About Me"}
          </h2>
          <p className="text-base lg:text-lg">
            {language === "tr"
              ? "Ben, mikroservis mimarileri konusunda uzmanlaşmış bir yazılım geliştiriciyim. Projelerimde, kriz anlarında yedek sistemler devreye alarak sistem sürekliliğini sağlama ve zorluklarla başa çıkma yeteneğim sayesinde, stres altında dahi etkin çözümler üretme kabiliyetimi sergiledim. İş süreçlerinde, frontend ve backend ekipleri arasında köprü kurarak projelerin verimli ilerlemesini sağladım. Uluslararası projelerde kazandığım deneyimler ile kültürel farkındalığımı ve global düşünme yeteneğimi pekiştirdim. Ayrıca, teknolojik gelişmelere hızla uyum sağlama ve yeni özellikleri etkin bir şekilde entegre etme becerilerim ile yenilikçi çözümler sunmaya devam etmekteyim."
              : "I am a software developer specialized in microservices architectures. In my projects, I have demonstrated the ability to maintain system continuity and devise effective solutions under stress by activating backup systems during crises. I facilitate efficient project progression by bridging frontend and backend teams. My experience in international projects has enhanced my cultural awareness and global thinking skills. Additionally, my ability to quickly adapt to technological advancements and effectively integrate new features continues to drive innovative solutions."}
          </p>
        </div>
      </div>
    </section>
  );
}
