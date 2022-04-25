import { useEffect } from "react";
import { themeChange } from "theme-change";
import Link from "next/link";
const Navbar = () => {
  useEffect(() => {
    themeChange(false);
    // false parameter is required for react project
  }, []);

  return (
    <>
      <div
        className="navbar bg-base-100 sticky top-0 z-50 border-b-4 border-b-secondary"
        // data-theme={currentTheme}
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
                <Link href="/resume">Resume</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link
                  href="https://github.com/dnkc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" href="/resume">
            Dragan Kunac
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link
                href="https://github.com/dnkc"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <select className="btn" data-choose-theme>
            <option value="corporate">LIGHT</option>
            <option value="business">DARK</option>
            <option value="synthwave">SYNTH</option>
            <option value="cyberpunk">CYBERPUNK</option>
            <option value="aqua">AQUA</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
