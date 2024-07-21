import { useEffect, useState } from "react";
import { projects } from "./projectIndex";
import { Reveal, SlideReveal } from "./projectIndex";

import Section from ".././layout/Section";
import Subheading from ".././layout/Subheading";
import ProjectCard from "./ProjectCard";

const Works = () => {
  const paragraphWork =
    "Following projects showcases my skills and experience through real-words examples of my work.";

  const [project, setProject] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Favs");
  const categories = ["React", "Javascript"];

  useEffect(() => {
    // setcategories([...new Set(projects.map((item) => item.categories))]);
    if (activeFilter === "Favs") {
      setProject(projects.filter((item) => item.favoris === true));
    } else {
      setProject(projects.filter((item) => item.categories === activeFilter));
    }
  }, [activeFilter]);

  const handleBtns = (category) => {
    let filteredData = [];
    if (category === "Favs") {
      filteredData = projects.filter((item) => item.favoris === true);
    } else {
      filteredData = projects.filter((item) => item.categories === category);
    }
    setProject(filteredData);
    setActiveFilter(category);
  };
  return (
    <Reveal className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <Section id="project">
        <Subheading title="Projects" desc="my work" paragraph={paragraphWork} />

        <div className="w-full flex flex-col">
          <article className="flex justify-center mt-8">
            {/* button "Favs"  */}
            <button
              className={`text-base p-1 px-4 mx-3 font-medium rounded-lg hover:text-white-100 transition-colors ${
                activeFilter === "Favs" ? "bg-cp text-white-100" : "text-secondary bg-tertiary"
              }`}
              onClick={() => handleBtns("Favs")}
            >
              Favoris
            </button>
            {/* button "categories"  */}
            {categories.map((category) => (
              <button
                key={category}
                className={`text-base p-1 px-4 mx-3  font-medium rounded-lg hover:text-white-100 transition-colors  ${
                  activeFilter === category ? "bg-cp text-white-100" : "text-secondary bg-tertiary"
                }`}
                onClick={() => handleBtns(category)}
              >
                {category}
              </button>
            ))}
          </article>
          <div className="mt-12 flex justify-center flex-wrap gap-7">
            {project.map((project, index) => (
              <SlideReveal key={project.id}>
                <ProjectCard key={`project-${index}`} {...project} />
              </SlideReveal>
            ))}
          </div>
        </div>
      </Section>
    </Reveal>
  );
};

export default Works;
