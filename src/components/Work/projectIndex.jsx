import { motion } from "framer-motion";
import {
  brainwave,
  geritch,
  hookbank,
  foodie,
  capture,
  jadoo,
} from "../../assets";

export const Reveal = ({ children }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      viewport={{ once: false }}
      transition={{ duration: 1.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export const SlideReveal = ({ children }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export const projects = [
  {
    id: 1,
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
        color: "cyan-text-gradient",
      },
    ],
    image: hookbank,
    githubLink:
      "https://github.com/ClementMadiot/Bank_modern_app_react-TailwindCSS",
    webSiteLink: "https://bank-modern-cm.netlify.app/",
  },
  {
    id: 2,
    name: "Brainwave",
    desc: "Web application design that enables users to explore the Possibilities of AI Chatting with Brainwave, the open AI chap app.",
    categories: "React",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "cyan-text-gradient",
      },
      {
        name: "react router",
        color: "orange-text-gradient",
      },
    ],
    image: brainwave,
    githubLink:
      "https://github.com/ClementMadiot/Brainwave_react_app_tailwindCSS",
    webSiteLink: "https://brainwave-ai-cm.netlify.app/",
  },
  {
    id: 3,
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
        color: "text-lightBlue",
      },
    ],
    image: geritch,
    githubLink:
      "https://github.com/ClementMadiot/Web_Design_Gerich_Restaurant_React",
    webSiteLink: "https://main--geritch-restaurant-cm.netlify.app/",
  },
  {
    id: 4,
    name: "Capture",
    desc: `Loading page who proposes a range of professional photography services. "Capture" has smooth animations, I build a stunning slide-based interfaces for showcasing comments.`,
    categories: "Javascript",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "text-lightBlue",
      },
      {
        name: "html",
        color: "red-text-gradient",
      },
    ],
    image: capture,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Capture",
    webSiteLink: "https://web-design-capture.netlify.app/",
  },
  {
    id: 5,
    name: "Jadoo",
    desc: `Loading page serves as a jadoo booking. I added a touch of dynamism as users load the site. I create stunning slides-based interfaces for displaying comments.`,
    categories: "Javascript",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "text-lightBlue",
      },
      {
        name: "html",
        color: "red-text-gradient",
      },
    ],
    image: jadoo,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Jadoo",
    webSiteLink: "https://web-design-jadoo.netlify.app/",
  },
  {
    id: 6,
    name: "Foodie",
    desc: `Foodie is a fully responsive landing page using Javascript, It's a deliveries restaurant who proposes healthy food.`,
    categories: "Javascript",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "text-lightBlue",
      },
      {
        name: "html",
        color: "red-text-gradient",
      },
    ],
    image: foodie,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Foodie_React",
    webSiteLink: "https://foodie-cm.netlify.app/",
  },
];
