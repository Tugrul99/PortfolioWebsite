import React from "react";
import elbey from "../assets/img/elbey.jpg";
import { experienceTechnologies } from "../constants";

const Experience = () => {
  return (
    <section className="h-[80vh] text-left work-padding justify-start">
      <h3 className="text-2xl text-about-color font-bold pb-8 after-horizontal-line">
        <span className="text-navhover font-fira text-md font-thin">02. </span>
        Some Things I’ve Built
      </h3>

      <div className="relative mt-10">
        <div className="relative inline-block">
          <img className="h-96 w-auto rounded" src={elbey} alt="Elbey" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-katman bg-opacity-50 hover:bg-opacity-0 transition duration-300 rounded"></div>
        </div>
        <div>
          <div className="project-description absolute left-64 top-16 w-1/2 p-4">
            <p className="text-general-opacity">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
          <div className="technologies-list mt-1 flex space-x-6 text-about-color font-firacode text-sm font-light">
            {experienceTechnologies.map((tech, index) => (
              <ul key={index} className=" hover:text-navhover cursor-pointer">
                <li>{tech}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
