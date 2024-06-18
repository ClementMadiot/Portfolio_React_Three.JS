import { motion } from "framer-motion";

import { styles } from "../../style";
import { staggerContainer } from "../../utils/motion";

const Sections = (Component, idName) => function HOC() {
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{
      once: true,
      amount: 0.2
    }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <Component/>
    </motion.section>
  )
};

export default Sections;