import React from "react";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 2.5,
      ease: "slow(0.7,0.7,false)",
    });
  });
  return (
    <section className="w-full h-[110vh]  text-center hero-padding  ">
      <div className=" w-full flex justify-center items-center flex-col text-left ">
        <div
          id="hero"
          className="w-full flex  flex-col items-start text-center   "
        >
          <p className="ml-1 text-navhover font-mono font-thin text-md pb-7">
            Hi, my name is
          </p>
          <div className="h1-main-text  text-white w-full text-left">
            <h1 className="pb-3">Toghrul Aliyev.</h1>
            <h2 className="text-general-opacity w-full ">
              I build things for the web.
            </h2>
          </div>
          <div className="text-justify">
            <p className="text-general-opacity text-left max-w-lg pt-7 text-md text-light">
              I’m a software developer specializing in building exceptional
              digital experiences. Currently, I’m focused on creating
              accessible, human-centered products that prioritize user needs and
              deliver high-quality solutions.
            </p>
          </div>
          <div className="pt-10">
            <button className="text-navhover bg-transparent font-semiboldpy-2 px-5 py-4 border border-navhover rounded ">
              Check out my cousin!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
