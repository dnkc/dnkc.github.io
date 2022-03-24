import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projectsdata as projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white hover:underline hover:decoration-green-500 hover:underline-offset-4 hover:duration-1000">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Just some of the apps I have built, currently hosted on free
            platforms.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-8">
          {projects.map((project, idx) => (
            <div
              className="sm:w-1/2 px-4 mb-8"
              data-aos-duration="300"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out-back"
              key={idx}
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className="relative ">
                  <img
                    alt="gallery"
                    className="lg:absolute lg:inset-0 lg:w-full lg:h-full lg:object-cover lg:object-center sm:object-cover md:object-cover md:oject-center md:h-full md:w-full md:inset-0 md:absolute"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-green-500 bg-gray-900 hover:opacity-100 xsm:opacity-100 sm:opacity-100 lg:opacity-0">
                    <h2 className="tracking-smallest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle.toUpperCase()}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3 underline decoration-green-500 underline">
                      {project.title.toUpperCase()}
                    </h1>
                    <p
                      className={`leading-relaxed ${
                        project.subtitle === "Python & Bootstrap"
                          ? "text-red-600"
                          : ""
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
