import { motion } from "framer-motion";
import {
  brainwave,
  geritch,
  hookbank,
} from "../../assets"

export const Reveal = ({ children }) => {
  return (
    <motion.div
    whileInView={{ opacity: [0, 1] }}
    viewport={{ once: false }}
    transition={{ duration: 1.5, delay: 0.25 }}>
      {children}
    </motion.div>
  )
}

export const SlideReveal = ({ children }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.25 }}>
      {children}
    </motion.div>
  );
};

export const projects = [
  {
    id:1,
    name: "HookBank",
    desc: "Web design of an online bank, the web site propose the next generation payment method. A new way to make the payment an easy, reliable and secure.",
    categories: "React",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hookbank,
    githubLink:
      "https://github.com/ClementMadiot/Bank_modern_app_react-TailwindCSS",
    webSiteLink: "https://bank-modern-cm.netlify.app/",
  },
  {
    id:2,
    name: "Brainwave",
    desc: "Web application design that enables users to explore the Possibilities of AI Chatting with Brainwave, the open AI chap app",
    categories: "React",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react router",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    githubLink:
      "https://github.com/ClementMadiot/Brainwave_react_app_tailwindCSS",
    webSiteLink: "https://brainwave-ai-cm.netlify.app/",
  },
  {
    id:3,
    name: "Gerich Restaurant",
    desc: "Web design of the luxurious restaurant. Explore the handcrafted cocktails, Chef Kevin Luo's culinary vision, and a glimpse into the award-winning ambiance.",
    categories: "React",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: geritch,
    githubLink:
      "https://github.com/ClementMadiot/Web_Design_Gerich_Restaurant_React",
    webSiteLink: "https://main--geritch-restaurant-cm.netlify.app/",
  },
  {
    id:4,
    name: "Gerich Restaurant",
    desc: "Web design of the luxurious restaurant. Explore the handcrafted cocktails, Chef Kevin Luo's culinary vision, and a glimpse into the award-winning ambiance.",
    categories: "Javascript",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: geritch,
    githubLink:
      "https://github.com/ClementMadiot/Web_Design_Gerich_Restaurant_React",
    webSiteLink: "https://main--geritch-restaurant-cm.netlify.app/",
  },
];