import { motion } from "framer-motion";

import { styles } from "../style";
import SectionWrapper from "./layout/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

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
    <section className="mt-12 bg-black-100 rounded-3xl">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What people say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((item, index) => (
          <FeedbacksCard
            key={`testimonmial-${index}`}
            index={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
