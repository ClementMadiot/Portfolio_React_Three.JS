import {
  mobile,
  backend,
  creator,
  webDesign,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  sass,
  graphQL,
  netlify,
  OpenClassrooms,
  freecodecamp,
  logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webDesign,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "graphQL",
    icon: graphQL,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "netlify",
    icon: netlify,
  },
];

const experiences = [
  {
    title: "Formation Web Developer",
    company_name: "OpenClassrooms",
    icon: OpenClassrooms,
    iconBg: "#383E56",
    date: "Dec 2022 - Sep 2023",
    points: [
      "I graduated from the Web Developer program at OpenClassrooms, a leading online platform for tech education. This intensive program honed my web development skills through a blend of interactive courses, hands-on projects, and personalized mentorship.",
      "Building dynamic and interactive web applications using React.js and other related technologies.",
      "Utilizing technologies like MongoDB and Express.js to create functional databases for data storage and retrieval.",
    ],
  },
  {
    title: "Ongoing Web Development Training",
    company_name: "FreeCodeCamp",
    icon: freecodecamp,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "I am currently enrolled in the web development program at freeCodeCamp, a well-regarded online platform for coding education.",
      "I have completed the CSS module, gaining a strong understanding of styling web pages",
      "I am now working through the JavaScript module to enhance my programming skills",
    ],
  },
  {
    title: "Portfolio",
    company_name: "",
    icon: logo,
    iconBg: "#383E56",
    date: "Jun 2024 - Jul 2024",
    points: [
      "I developing a web sites using React.js, TailwindCSS and other related technologies.",
      "I implementing responsive design and ensuring cross-browser compatibility.",
      "I using Three.js to create dynamic and engaging animations",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials };
