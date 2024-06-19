import { technologies } from "../constants";
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "./layout/layout";

const Tech = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center gap-10">
{technologies.map((tech, index) => (
  <div key={`technologie-${index}`} className="w-28 h-28">
    <BallCanvas icon={tech.icon}/>
  </div>
))}
    </section>
  )
}

export default SectionWrapper(Tech,'');