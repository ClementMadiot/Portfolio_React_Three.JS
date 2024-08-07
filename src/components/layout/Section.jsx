import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const Section = ({ className, id, children }) => {
  return (
    <motion.section
      id={id}
      className={` sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0
    ${className || ""}`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
