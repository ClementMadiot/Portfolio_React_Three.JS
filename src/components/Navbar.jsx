import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className='sm:px-10 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary'
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <p className="flex text-white xs:text-[18px] text-[15px] font-bold cursor-pointer">
          Clément &nbsp;
            <span className="sm:block hidden"> | Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-white" : "text-secondary"
              } hover:text-white xs:text-[18px] text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(item.title)}
            >
              <a className="block relative font-code tracking-wider uppercase text-n-1 transition-colors hover:text-n-2 " href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

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
      </div>
    </nav>
  );
};

export default Navbar;
