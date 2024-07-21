import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../../constants";
import { logo} from "../../assets";
import SideBar from "./SideBar";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className='sm:px-10 px-6 w-full flex items-center py-3 fixed top-0 z-20 bg-main'
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
          <p className="flex lg:gap-1 text-white xs:text-[20px] text-[15px] font-bold cursor-pointer">
          Clément &nbsp;
            <span className="sm:block hidden"> |&nbsp; Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-white" : "text-secondary"
              } hover:text-white xs:text-[20px] text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(item.title)}
            >
              <a className="block relative font-code tracking-wider uppercase text-n-1 transition-colors hover:text-n-2 " href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        <SideBar/>
      </div>
    </nav>
  );
};

export default Navbar;
