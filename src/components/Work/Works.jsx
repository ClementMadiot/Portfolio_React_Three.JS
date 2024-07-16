import { useEffect, useState } from "react";
import { projects } from "./projectIndex";
import { Reveal } from "./projectIndex";

import Section from ".././layout/Section";
import Subheading from ".././layout/Subheading";
import ProjectCard from "./ProjectCard";

const Works = () => {
  const paragraphWork =
    "Following projects showcases my skills and experience through real-words examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my abilities to solve complex problems, work with different thechnologies and manage projfects effenctively.";

  const [project, setProject] = useState([]);
  const [categories, setcategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  
  useEffect(() => {
    setcategories([...new Set(projects.map((item) => item.categories))]);
    if (activeFilter === "All") {
      setProject(projects);
    } else {
      setProject(projects.filter((item) => item.categories === activeFilter))
    }
  }, [activeFilter]);

  const handleBtns = (category) => {
    let filteredData = [];
    if (category === "All") {
      filteredData = projects;
    } else {
      filteredData = projects.filter((item) => item.categories === category);
    }
    setProject(filteredData)
    setActiveFilter(category)
  };

  return (
    <Reveal className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <Section id="project">
        <Subheading title="Projects" desc="my work" paragraph={paragraphWork} />

        <div className="w-full flex flex-col">
          <article className="flex justify-center mt-2">
            {/* button "All"  */}
            <button
              className={`text-white bg-slate-700 p-1 px-2 mx-3 font-medium ${activeFilter === "All" ? "bg-purple-800" : "" }`}
              onClick={() => handleBtns("All")}
            >
              All
            </button>
            {/* button "categories"  */}
            {categories.map((category) => (
              <button
                key={category}
                className={`text-white bg-slate-700 p-1 px-2 mx-3 font-medium ${activeFilter === category ? 'bg-purple-800 text-white' : ""}`}
                onClick={() => handleBtns(category)}
              >
                {category}
              </button>
            ))}
          </article>
          <div className="mt-16 flex justify-center flex-wrap gap-7">
            {project.map((project, index) => (
              <ProjectCard key={`project-${index}`} {...project} />
            ))}
          </div>
        </div>
      </Section>
    </Reveal>
  );
};

export default Works;
