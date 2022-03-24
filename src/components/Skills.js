import { BadgeCheckIcon, ChipIcon, HomeIcon } from "@heroicons/react/solid";
import React from "react";
import { skills, civil_skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 hover:underline hover:decoration-green-500 hover:underline-offset-4 hover:duration-1000">
            Software Languages & Frameworks
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            The ones I am most familiar with, but I am constantly learning and
            upgrading my skills.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-2 sm:w-1/2 w-full hover:bg-gray-800 hover:rounded"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="false"
              data-aos-easing="ease-in-out-back"
              data-aos={`${idx % 2 === 0 ? "fade-left" : "fade-right"}`}
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-green-500">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4 " />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center">
            <HomeIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 hover:underline hover:decoration-green-500 hover:underline-offset-4 hover:duration-1000">
              Civil Engineering
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-8">
              Tools I use in my current day to day work.
            </p>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {civil_skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-2 sm:w-1/2 w-full hover:bg-gray-800 hover:rounded"
                  data-aos-duration="400"
                  data-aos-delay="200"
                  data-aos-once="false"
                  data-aos-easing="ease-in-out-back"
                  data-aos={`${idx % 2 === 0 ? "fade-right" : "fade-left"}`}
                >
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-green-500">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
