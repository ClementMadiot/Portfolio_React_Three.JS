/** @type {import('tailwindcss').Config} */
// import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        cp: "#915eff",
        bracket: '#ADA8C3',
        // tag project 
        gray: '#434343',
        black: '#000000',
        cyan: '#11998e',
        blue: '#2f80ed',
        lightBlue: '#56ccf2',
        green:'#38ef7d',
        pink: '#ec008c',
        orange: '#fc6767',
        red: '#f12711',
        yellow: '#f5af19',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xs:"960px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        sora: "var(--font-sora)",
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply font-sora font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2":
            {},
        },
        ".h2": {
          "@apply text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2 font-sora":
            {},
        },
        ".h3": {
          "@apply font-sora":
            {},
        },
        ".p": {
          "@apply sm:text-[18px] text-[14px] uppercase tracking-wider text-center font-code":
            {},
        },
        ".green-text-gradient": {
          "@apply bg-gradient-to-t from-cyan to-green bg-clip-text text-transparent":
            {},
        },
        ".blue-text-gradient": {
          "@apply bg-gradient-to-t from-blue to-lightBlue bg-clip-text text-transparent":
            {},
        },
        ".pink-text-gradient": {
          "@apply bg-gradient-to-t from-pink to-orange bg-clip-text text-transparent":
            {},
        },
        ".orange-text-gradient": {
          "@apply bg-gradient-to-t from-red to-yellow bg-clip-text text-transparent":
            {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
