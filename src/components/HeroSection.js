import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getAllSettings } from "../features/settingsSlice";

export default function HeroSection() {
  const { settings } = useSelector(getAllSettings);
  const { language } = settings;
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            {language === "tr" ? (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-gray-600">
                Merhaba ben
              </span>
            ) : (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-gray-600">
                Hello, I&apos;m{" "}
              </span>
            )}
            <br></br>
            <TypeAnimation
              sequence={["Ufuk", 1000, "Fullstack Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-base mb-6 lg:text-xl">
            {language === "tr"
              ? "Fikirleri Güçlendirme, Geleceği Şekillendirme"
              : "Empowering Ideas, Crafting the Future"}
          </p>
          <div>
            <a
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 to-gray-700 hover:bg-slate-200 text-white"
            >
              {language === "tr" ? "Beni İşe Al" : "Hire Me"}
            </a>
            <a
              href={language === "tr" ? "/cv/CV_tr.pdf" : "/cv/CV_en.pdf"}
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800 to-gray-700 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {language === "tr" ? "CV'yi İndir" : "Download CV"}
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/images/hero.webp"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
