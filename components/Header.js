/* eslint-disable @next/next/no-html-link-for-pages */
import { useAppContext } from "../context/state";

export default function Header() {
  const { allThemes, currentTheme, setCurrentTheme } = useAppContext();
  const pickTheme = "Theme";
  return (
    <>
      <div
        className="navbar bg-base-100 sticky top-0 z-50"
        data-theme={currentTheme}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#courses">Courses</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl" href="#about">
            Dragan Kunac
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="https://github.com/dnkc"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-hover dropdown-left">
            <label tabIndex="0" className="btn m-1 bg-primary">
              {pickTheme.toUpperCase() + "S"}
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-45"
            >
              <li>
                {allThemes.themes.map((theme, idx) => (
                  <button
                    key={idx}
                    className="hover:bg-black hover:text-white"
                    onClick={() => {
                      setCurrentTheme(theme);
                    }}
                  >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </button>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
