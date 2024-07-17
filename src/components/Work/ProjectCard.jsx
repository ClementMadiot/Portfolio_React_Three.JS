import React from "react";
import { Tilt } from "react-tilt";

import { github, website } from "../../assets";

const ProjectCard = ({
  name,
  desc,
  tags,
  image,
  githubLink,
  webSiteLink,
}) => {
  return (
      <Tilt
        options={{
          max: 12,
          scale: 1.03,
        }}
        className="bg-tertiary p-5 rounded-3xl sm:w-[360px] w-full mb-3"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div className="bg-gradient-to-r from-gray to-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:translate-y-[-2px] transition-transform " onClick={() => window.open(webSiteLink, "_blank")}
            >
              <img src={website} alt="web site link" className="w-1/2 h-1/2 object-contain" />
            </div>
            <div className="bg-gradient-to-r from-gray to-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:translate-y-[-2px] transition-transform " onClick={() => window.open(githubLink, "_blank")}
            >
              <img src={github} alt="reposite github" className="w-1/2 h-1/2 object-contain"/>
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
  );
};

export default ProjectCard;
