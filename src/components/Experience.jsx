import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import Section from "./layout/Section";
import Subheading from "./layout/Subheading";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: experience.iconBg }}
      date={experience.date}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] rounded-md object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {" "}
          {experience.title}
        </h3>
        <p className="text-[16px] font-semibold text-secondary m-0">
          {experience.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((item, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white text-[14px] pl-1 tracking-wider"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <Section id='experience'>
      <Subheading className='mt-8' textVariant='textVariant' title='Work Experience' desc='What I have done so far' />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#fff">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
