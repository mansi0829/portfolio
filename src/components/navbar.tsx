import Link from "next/link";
import React, { useState } from "react";
import Theme from "./theme";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed sticky1 w-full bg-transparent opacity-50 dark:opacity-80 z-20 pt-3">
      <header className="lg:px-16 px-6 bg-transparent flex flex-wrap items-center lg:py-0 py-2">
        <div className="name font-extrabold text-2xl flex-1 flex justify-between items-center text-black dark:text-white">
          <Link href="/">Mansi here : </Link>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900 dark:text-gray-100"
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
            <ul className="lg:flex items-center justify-between text-base text-gray-900  dark:text-gray-300  pt-4 lg:pt-0">
              <li>
                <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:dark:text-cyan-400 hover:border-cyan-400">
                  <Link href="/">
                    <a className="flex">
                      <p className="p-1">
                        <AiOutlineHome />
                      </p>
                      Home
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:dark:text-cyan-400 hover:border-cyan-400">
                  <Link href="/projects">
                    <a className="flex">
                      <p className="p-1">
                        <AiOutlineFundProjectionScreen />
                      </p>
                      Projects
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:dark:text-cyan-400 hover:border-cyan-400">
                  <Link href="/resume">
                    <a className="flex">
                      <p className="p-1">
                        <CgFileDocument />
                      </p>
                      Resume
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:dark:text-cyan-400 hover:border-cyan-400 lg:mb-0 mb-2">
                  <Link href="/contact">
                    <a className="flex">
                      <p className="p-1">
                        <AiOutlineUser />
                      </p>
                      Contact Me
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className="lg:p-2  px-0 block border-b-2 border-transparent  transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
                  <button className="bg-gray-700 text-white hover:dark:text-cyan-400 p-3 px-5 rounded-md">
                    <a href="https://github.com/mansi0829/Portfolio" target="blank" className="flex justify-center">
                      <CgGitFork style={{ fontSize: "1.0em" }} />{" "}
                      <AiFillStar style={{ fontSize: "1.0em" }} />
                    </a>
                  </button>
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
