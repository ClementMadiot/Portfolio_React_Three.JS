import React, { useState } from "react";

import { navLinks } from "../../constants";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const SideBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden flex flex-1 justify-end items-center">
      <HiMenuAlt2
        className={`w-[28px] h-[28px] cursor-pointer rotate-180 ${
          toggle ? "hidden" : "flex"
        }`}
        color="#fff"
        onClick={() => setToggle(true)}
      />
      {toggle && (
        <>
          <IoClose
            className="w-[28px] h-[28px] cursor-pointer"
            color="#fff"
            onClick={() => setToggle(false)}
          />
          <div className="p-6 bg-gradient-to-r from-gray to-black  absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="list-none flex flex-col justify-end flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } font-poppins font-medium text-[18px] hover:text-white transition duration-200 ease-out cursor-pointer`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}
                >
                  <a onClick={() => setToggle(false)} href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
