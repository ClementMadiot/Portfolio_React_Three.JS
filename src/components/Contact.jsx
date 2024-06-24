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
          {/* name  */}
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          {/* email  */}
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          {/* message */}
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              type="text"
              name="name"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              rows={6}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
            />
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">{loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas/>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
