import React from "react";
import { moocs } from "../data";

export default function RecentCourses() {
  return (
    <div className="container px-2 py-16 mx-auto" id="recentcourses">
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center hover:underline hover:decoration-green-500 hover:underline-offset-4 hover:duration-1000 ">
        Courses & Certificates
      </h1>
      <div className="w-full lg:w-2/3 mx-auto  mt-8 relative">
        <span className=" inset-y-0 left-2/5  w-0.5 bg-grey-40 hidden md:block"></span>
        {moocs.map((exp, idx) => (
          <div
            tabindex="0"
            key={idx}
            className="collapse h-full p-4 rounded mb-12 border collapse-plus hover:border-green-500 text-white"
          >
            <div className="collapse-title text-xl font-bold ">
              <span className="underline underline-offset-4 hover:decoration-green-500  hover:duration-1000">
                {exp.name}
              </span>{" "}
              -{" "}
              <a
                className="underline underline-offset-4 hover:decoration-blue-500 hover:text-blue-500 hover:duration-200"
                target="_blank"
                rel="noreferrer"
                href={exp.link}
              >
                {exp.company}
              </a>
            </div>
            <div className="collapse-content">
              <span className="text-base xl:w-2/4 lg:w-3/4 mx-auto mb-12 focus:border-green-500">
                {exp.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
