import React from "react";
import { AiFillChrome, AiFillGithub } from "react-icons/ai";

const Project = ({ image, github, site, description, title }) => {
  return (
    <div className="mb-4 flex flex-col sm:grid sm:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 sm:pr-5">
      <a target="blank_" href={site} className="group h-48 col-span-3 md:h-80">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg"
        />
      </a>

      <div className="flex flex-col col-span-3 p-4 mx-auto my-auto">
        <h2 className="text-gray-200 font-bold text-xl leading-10">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="flex flex-row justify-between text-white gap-4 mx-auto pb-4">
        <a target="blank_" className="flex align-items" href={github}>
          <AiFillGithub className="w-[55px] h-auto" />
        </a>
        <a target="blank_" className="flex align-items" href={site}>
          <AiFillChrome className="w-[55px] h-auto" />
        </a>
      </div>
    </div>
  );
};

export default Project;
