import Link from "next/link";
import React, { useState, ReactNode } from "react";
import Theme from "./theme";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/aboutme",
  },
  {
    name: "Projects",
    path: "/projects/",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <div className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:dark:text-cyan-400 hover:border-cyan-400">
    <Link href={path}>{children}</Link>
  </div>
);

const Navbar = (props) => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div >
      <nav
        className=" flex flex-wrap items-center justify-between px-5 py-3 ">
        <div className=" w-full bg-transparent opacity-50 dark:opacity-80 z-20 px-4 mx-auto flex flex-wrap items-center  justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="name font-extrabold text-3xl flex-1 flex justify-between items-center text-black dark:text-white">
              <Link href="/">Mansi here : </Link>
            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
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
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded " : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="list-none lg:ml-auto">
              <li className="flex flex-col lg:flex-row">
                {Links.map(({ name, path }) => (
                  <NavLink key={path} path={path}>
                    <a onClick={() => setNavbarOpen(!navbarOpen)}>{name}</a>
                  </NavLink>
                ))}
              </li>
            </ul>
            <Theme />
          </div>
        </div >
      </nav >
    </div >

  );
};
export default Navbar;
