import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Dragan Kunac
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            className="mr-5 hover:text-white hover:underline underline-offset-8"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="mr-5 hover:text-white hover:underline underline-offset-8"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="mr-5 hover:text-white hover:underline underline-offset-8"
          >
            Experience
          </a>
          <a
            href="#recentcourses"
            className="mr-5 hover:text-white hover:underline underline-offset-8"
          >
            Recent Courses
          </a>
        </nav>
        <a
          href="http://www.github.com/dnkc"
          target="_blank"
          rel="noreferrer"
          className="mr-5 hover:text-white hover:underline underline-offset-8"
        >
          GitHub
        </a>
        <a target="_blank" rel="noreferrer" href="http://www.github.com/dnkc">
          <ArrowRightIcon className="w-4 h-4 ml-0 sm:hidden sm:block" />
        </a>
      </div>
    </header>
  );
}
