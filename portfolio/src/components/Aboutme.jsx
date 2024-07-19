import React from "react";
import primg from "../assets/img/primg.jpg";
import { myLanguages } from "../constants";

const Aboutme = () => {
  return (
    <section className="h-[100vh] w-full text-center about-padding">
      <h3 className=" text-2xl text-about-color font-bold text-left pb-8 after-horizontal-line ">
        <span className="text-navhover font-fira text-md font-thin">01. </span>
        About Me
      </h3>
      <div className="flex">
        <div className="w-1/2 text-left text-general-opacity text-base">
          <p className="pb-7 text-justify">
            Togrul Aliyev, a skilled React developer, specializes in creating
            dynamic and responsive web applications. With expertise in HTML,
            CSS, JavaScript, and frameworks like Tailwind CSS and GSAP,
          </p>
          <p className="pb-7 text-justify">
            Togrul is dedicated to delivering high-quality, visually appealing
            projects. His passion for continuous learning ensures he stays
            updated with the latest industry trends.
          </p>
          <p className="text-justify">
            Togrul's background in political science and his pursuit of a
            master's degree in computer science demonstrate his diverse skill
            set and adaptability. His work is a blend of creativity and
            technical proficiency, making him a valuable asset in the web
            development field.
          </p>
          <p className="text-justify pt-7">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm before-arrow ">
            {myLanguages.map((language) => (
              <ul>
                <li>
                  <span className="text-green-300">▹</span>
                  {language}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="w-1/2 pl-40 font-fira ">
          <img
            src={primg}
            alt=""
            className="w-150 h-60 object-cover rounded-xl  hover:brightness-90 hover  ease-linear	 duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
