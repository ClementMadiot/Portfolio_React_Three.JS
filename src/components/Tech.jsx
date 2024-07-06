import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import Section from "./layout/Section";
import Subheading from "./layout/Subheading";

const Tech = () => {
  return (
    <>
      <Subheading title='My Skill' desc='What I know' className='mt-4' />
    <Section id='skill' className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div id={tech.name} key={`technologie-${index}`} className="w-28 h-28">
          <BallCanvas name={tech.name} icon={tech.icon} />
        </div>
      ))}
    </Section>
    </>
  );
};

export default Tech;
