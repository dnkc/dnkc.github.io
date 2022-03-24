import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hover:underline hover:decoration-green-500 hover:underline-offset-4 hover:duration-1000">
            Dragan Kunac
            <br className="hidden lg:inline-block" />
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hover:underline hover:decoration-green-500 hover:underline-offset-4 hover:duration-1000">
            Civil Engineer &lt;/&gt; Full Stack Engineer
          </h1>
          <p className="leading-relaxed">
            I am a civil engineer currently looking to switch over to a software
            role. Most familiar with the MERN stack, along with Django / Python
            through self-learning.
          </p>
          {/* <p className="mb-8 leading-relaxed">
            This website is my first attempt at working with Tailwind CSS.
          </p> */}
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              See My Past Work
            </a>
            {/* <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a> */}
          </div>
        </div>
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div> */}
      </div>
    </section>
  );
}
