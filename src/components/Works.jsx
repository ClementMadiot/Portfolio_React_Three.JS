import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, website } from "../assets";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

import SectionWrapper from "./layout/SectionWrapper";
import Subheading from "./layout/Subheading";
import Section from "./layout/Section";

const ProjectCard = ({ index, name, desc, tags, image, githubLink, webSiteLink }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      option={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-3xl sm:w-[360px] w-full mb-3"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
          <div
            className="gray-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:translate-y-[-2px] transition-transform "
            onClick={() => window.open(webSiteLink, "_blank")}
          >
            <img
              src={website}
              alt="web site link"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:translate-y-[-2px] transition-transform "
            onClick={() => window.open(githubLink, "_blank")}
          >
            <img
              src={github}
              alt="reposite github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 h-[150px]">
        <h3 className="text-white font-bold text[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-base">{desc}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {tags.map((tag, index) => (
          <p key={`tag-${index}`} className={`text-base ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  const paragraphWork =
    "Following projects showcases my skills and experience through real-words examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my abilities to solve complex problems, work with different thechnologies and manage projfects effenctively.";
  return (
    <>
    <Section id="project">
      <Subheading title="Projects" desc="my work" paragraph={paragraphWork} />

      <div className="w-full flex flex-col">
        <div className="mt-20 flex justify-center flex-wrap gap-7">
          {projects.map((item, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...item} />
          ))}
        </div>
      </div>

    </Section>
    </>
  );
};

export default SectionWrapper(Works, "");
