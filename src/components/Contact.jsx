import { useState, useRef } from "react";
import { motion } from "framer-motion";
import EmailJS from "@emailjs/browser";

import { SectionWrapper } from "./layout/layout";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};
  return (
    <section
      id="contact"
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
        method="get"
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input id="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium " />
          </label>
        </form>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "");
