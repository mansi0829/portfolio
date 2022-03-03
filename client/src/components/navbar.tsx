import Link from "next/link";
import React from "react";
import Theme from "./theme";

const Navbar = () => {
  return (
    <div className="antialiased bg-gray-200 opacity-50 dark:opacity-80">
      <header className="lg:fixed lg:w-full lg:px-16 px-6 bg-black dark:bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center text-white dark:text-black">
          <Link href="/">Home </Link>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-white dark:text-gray-700 pt-4 lg:pt-0">
              <li>
                <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                  <Link href="/about">About</Link>
                </div>
              </li>
              <li>
                <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                  <Link href="/projects">Projects</Link>
                </div>
              </li>
              <li>
                <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                  <Link href="/blogs/allblogs">Blogs</Link>
                </div>
              </li>
              <li>
                <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
                  <Link href="#">Contact Me</Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <Theme />
      </header>
    </div>
  );
};
export default Navbar;
