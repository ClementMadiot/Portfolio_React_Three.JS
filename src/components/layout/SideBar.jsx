
import React, { useState } from "react";

import { navLinks } from "../../constants";
import { menu, close } from "../../assets";

const SideBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden flex flex-1 justify-end items-center">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="object-contain cursor-pointer"
        width={28}
        height={28}
        onClick={() => setToggle(!toggle)}
      />
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-4 black-gradient absolute top-[3.8rem] right-0 mx-1 my-2 min-w-[120px] z-10 rounded-xl ring-0 slidebar`}
      >
        <ul className="list-none flex flex-col items-start gap-4">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-white" : "text-secondary"
              } font-poppins text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(item.title);
                setToggle(!toggle);
              }}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
