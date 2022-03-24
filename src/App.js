import About from "./components/About";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
import NavbarTwo from "./components/NavbarTwo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import RecentCourses from "./components/RecentCourses";
import { useEffect } from "react";
import AOS from "aos";
// import { useAutoFocus } from "./hooks/useAutoFocus";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="text-gray-400 bg-gray-900 body-font">
        <NavbarTwo />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <RecentCourses />
        {/* <Contact /> */}
      </div>
    </>
  );
}

export default App;
