import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { getAllProjects } from "../features/projectsSlice";
import { useSelector } from "react-redux";
import { getAllSkills } from "../features/skillsSlice";
import SkillCard from "./SkillCard";
import { getAllSettings } from "../features/settingsSlice";

export default function SkillsSection() {
  const { settings } = useSelector(getAllSettings);
  const { language } = settings;
  const { skills } = useSelector(getAllSkills);
  // const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const handleTagChange = (newTag) => {
  //   setTag(newTag);
  // };

  // const filteredProjects = projects.filter((project) =>
  //   project.tag.includes(tag)
  // );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="skills" className="w-full mb-10">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {language === "tr" ? "Yeteneklerim" : "My Skills"}
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
        onClick={handleTagChange}
        name="Mobile"
        isSelected={tag === "Mobile"}
      />
      </div> */}
      <ul
        ref={ref}
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 md:gap-12"
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <SkillCard
              name={skill.name}
              image={skill.image}
              // key={project.id}
              // title={project.title}
              // description={project.description}
              // imgUrl={project.image}
              // gitUrl={project.gitUrl}
              // previewUrl={project.previewUrl}
              // role={project.role}
              // companyId={project.companyId}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
