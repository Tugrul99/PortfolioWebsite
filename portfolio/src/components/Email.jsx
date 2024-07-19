import React, { useRef } from "react";
import gsap from "gsap";

const Email = () => {
  const textwider = useRef();

  const handleMouseEnter = () => {
    gsap.to(textwider.current, {
      x: -10,
      duration: 0.5,
      ease: "power1.in",
      color: "#64ffda",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textwider.current, { x: 0, duration: 0.5, color: "white" });
  };

  return (
    <div className="fixed right-12 text-general-opacity bottom-24 transform rotate-90 tracking-widest origin-right mr-5 after-vertical-line">
      <a
        id="mail"
        ref={textwider}
        href="mailto:tugrulaliyev99@gmail.com"
        className=" p-0 m-0 text-xs font-fira"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-block" }}
      >
        tugrulaliyev99@gmail.com
      </a>
    </div>
  );
};

export default Email;
