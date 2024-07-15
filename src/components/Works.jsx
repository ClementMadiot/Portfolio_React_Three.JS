import { useState } from "react";
import SectionWrapper from "./layout/SectionWrapper";
import Section from "./layout/Section";
import Subheading from "./layout/Subheading";
import { projects } from "../constants";

import ProjectCard from "./layout/ProjectCard";
// import Buttons from "./layout/Buttons";

const Works = () => {
  const [items, setItems] = useState(projects);
  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === "All") {
      setItems(projects);
    } else if (word === "React") {
      const filtered = projects.filter((item) => item.categories[0].react === true);
      setItems(filtered);
    } else if (word === "Javascript") {
      const filtered = projects.filter(
        (item) => item.categories[0].javascript === true);
      setItems(filtered);
    }
  };

  const menuProjects = [...new Set(projects.map((val) => val.category))];
  const paragraphWork =
    "Following projects showcases my skills and experience through real-words examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my abilities to solve complex problems, work with different thechnologies and manage projfects effenctively.";
  return (
    <>
      <Section id="project">
        <Subheading title="Projects" desc="my work" paragraph={paragraphWork} />

        <div className="w-full flex flex-col">
          <article className="flex justify-center mt-2">
            <button
              className={`text-white bg-slate-700 p-1 px-2 mx-3 font-medium`}
              value="All"
              onClick={handleBtns}
            >
              All
            </button>
            {menuProjects.map((val, index) => (
              <button
                key={index}
                className="text-white bg-slate-700 p-1 px-2 mx-3 font-medium"
                value={val}
                onClick={handleBtns}
              >
                {val}
              </button>
            ))}
          </article>
          <div className="mt-16 flex justify-center flex-wrap gap-7">
            {items.map((item, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...item} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default SectionWrapper(Works, "");
