import React from "react";
import { experience } from "../data";

export default function Experience() {
  return (
    <div className="container px-5 py-18 mx-auto" id="experience">
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center hover:underline hover:decoration-green-500 hover:underline-offset-4 hover:duration-1000">
        Experience
      </h1>

      <div className="w-full lg:w-2/3 mx-auto  mt-8 relative">
        <span className=" inset-y-0 left-2/5  w-0.5 bg-grey-40 hidden md:block"></span>
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="h-full bg-gray-800 bg-opacity-40 p-8 rounded mb-12 border hover:border-green-500"
            data-aos-duration="400"
            data-aos-delay="200"
            data-aos-once="false"
            data-aos-easing="ease-in-out-back"
            data-aos={`${idx % 2 === 0 ? "fade-left" : "fade-right"}`}
          >
            <div className="md:pl-18">
              <div className="mt-1 ">
                <div className="md:pl-8 md:-mt-1">
                  <span className="font-body font-bold text-grey-40 block hover:underline hover:decoration-green-500 hover:underline-offset-4 ">
                    {exp.dates}
                  </span>
                  <span className="font-header font-bold text-xl text-white uppercase block pt-2 hover:underline hover:decoration-green-500 hover:underline-offset-4">
                    {exp.name}
                  </span>
                  <div className="pt-2 ">
                    {exp.description.map((each, idx) => (
                      <span
                        key={idx}
                        className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-12 "
                      >
                        <ul>
                          <li className="mb-6 hover:underline hover:decoration-green-500 hover:underline-offset-4">
                            {each}
                          </li>
                        </ul>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
