/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import SoftwareSkills from "./SoftwareSkills.js";
import CivilSkills from "./CivilSkills.js";
import CoursesCerts from "./CoursesCerts.js";
import { useAppContext } from "../context/state";
import About from "./About.js";
import Projects from "./Projects.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";

export default function Main() {
  const { currentTheme } = useAppContext();

  return (
    <div className="grotesk max-w-8xl mx-auto" data-theme={currentTheme}>
      <section className="w-full">
        <About />
        <Projects />
        <div id="skills">
          <div
            className="
                max-w-8xl
                mx-auto
                my-auto
                md:mx-3
                grid
                grid-cols-1
                md:grid-cols-2
                px-12
                md:flex
                md:content-evenly
              "
          >
            <SoftwareSkills />
            <div className="divider lg:divider-horizontal"></div>
            <CivilSkills />
          </div>
        </div>
        <Experience />
        <CoursesCerts />
        <Contact />
      </section>
    </div>
  );
}
