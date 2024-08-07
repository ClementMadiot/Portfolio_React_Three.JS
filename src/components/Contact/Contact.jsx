import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import Earth from "./Earth";
import { slideIn } from "../../utils/motion";
import Section from ".././layout/Section";
import Subheading from ".././layout/Subheading";

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Clement",
          from_email: form.email,
          to_email: "clementmadiot09@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setform({
          name: "",
          email: "",
          message: "",
        }),
          (error) => {
            setLoading(false);

            console.log(error);

            alert("Ahh, Something went wrong. Please try again");
          };
      });
  };
  return (
    <Section
      id="contact"
    >
      <div className="xl:mt-12 xl:flex-row flex justify-center gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl sm:max-w-full xl:min-w-[450px] max-w-[280px]"
        >
          <Subheading title='Contact' desc='Get in touch' />
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
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                rows={6}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="hidden lg:flex xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <Earth />
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
