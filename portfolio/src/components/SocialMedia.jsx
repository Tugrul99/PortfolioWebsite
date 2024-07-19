import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconList } from "../constants/index";
import gsap from "gsap";

const SocialMedia = () => {
  const refs = useRef([]);

  const setRefs = (el, index) => {
    refs.current[index] = el;
  };

  const handleMouseEnter = (index) => {
    gsap.to(refs.current[index], {
      y: -10,
      duration: 0.5,
      ease: "power1.in",
      color: "#64ffda",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(refs.current[index], {
      y: 0,
      duration: 0.5,
      color: "white",
    });
  };

  return (
    <div className="fixed left-0 bottom-28 transform origin-left pl-10 after-vertical-social">
      <ul className="flex flex-col items-center space-y-5">
        {iconList.map((item, index) => (
          <li
            key={index}
            className="flex"
            ref={(el) => setRefs(el, index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ display: "inline-block" }}
          >
            <a href={item.href} className="text-general-opacity hover:text-navhover text-xl">
              <FontAwesomeIcon icon={item.icon}  />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
