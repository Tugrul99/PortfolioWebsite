import React from "react";
import { navList } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  return (
    <header className="w-full px-8 py-5 overscroll-none ">
      <nav className="flex  fixed w-full justify-between items-center px-24 pt-3
      ">
        <div className="text-white">
          <p></p>
        </div>
        <div className="flex items-center text-white font-fira space-x-0
        ">
          {navList.map((nav, index) => (
            <div
              className="px-5 text-xs cursor-pointer transition-all hover:text-navhover  duration-300 ease-in-out"
              key={nav}
            >
              <span className="text-navhover">{`0${index + 1 }`}.</span> {nav}
            </div>
          ))}
          <button
            id="navButton"
            className="bg-transparent font-mono py-2 px-4 border border-navhover text-navhover rounded text-sm  "
          >
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
