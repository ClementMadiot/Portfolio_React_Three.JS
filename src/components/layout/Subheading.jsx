import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";

const Subheading = ({ title, desc, paragraph }) => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-16 mb-4">
        <p className={`p`}>
          {desc}
        </p>
        <h2 className={`h2  `}>
          {title}
        </h2>
      </motion.div>
      {paragraph && (
        <div className="w-full flex flex-col">
          <motion.p
            variants={fadeIn()}
            className="mt-4 text-secondary text-lg max-w-3xl"
          >
            {paragraph}
          </motion.p>
        </div>
      )}
    </>
  );
};

export default Subheading;
