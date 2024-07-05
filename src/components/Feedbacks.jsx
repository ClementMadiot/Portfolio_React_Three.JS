import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { testimonials } from "../constants";
import Section from "./layout/Section";
import Subheading from "./layout/Subheading";

const FeedbacksCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="traking-wider text-lg">{testimonial}</p>
        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-base">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-sm">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback by ${name}`}
            width={40}
            height={40}
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <Section className="mt-12 bg-black-100 rounded-3xl">
      <div
        className='sm:px-16 px-6 sm:py-16 py-6 bg-tertiary rounded-2xl min-h-[300px]'
      >
        <Subheading title="Testimonials" desc="What people say" />
      </div>
      <div className='-mt-20 pb-14 flex justify-center flex-wrap gap-7'>
        {testimonials.map((item, index) => (
          <FeedbacksCard
            key={`testimonmial-${index}`}
            index={index}
            {...item}
          />
        ))}
      </div>
    </Section>
  );
};

export default Feedbacks;
