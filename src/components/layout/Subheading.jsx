import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import TagLine from "./Tagline";

const Subheading = ({ title, desc, paragraph }) => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className=" flex flex-col items-center"
      >
        <TagLine className="flex mb-4 md:justify-center items-center">
          <p className='p text-bracket'>{desc}</p>
        </TagLine>
        <h2 className='h2'>{title}</h2>
      </motion.div>
      {paragraph && (
        <div className="w-full flex flex-col paddingX">
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
