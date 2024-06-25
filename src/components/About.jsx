import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import Section from "./layout/Section";
import Subheading from "./layout/Subheading";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full mb-4">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="object-contain"
          />
          <h3 className="text-white text-xl font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  const paragraphAbout = `I'm skilled software developer with experiece in TypeScript and Javascript, and expertise in frameworks like React and Three.js. I'm quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world problems. Let's work together ti bring your ideas to life!`;
  return (
    <Section
      id="about"
      className='padding max-w-7xl mx-auto relative z-0'
    >
      <Subheading
        title="Overview."
        desc="Introduction"
        paragraph={paragraphAbout}
      />

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((item, index) => (
          <ServiceCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default About;
