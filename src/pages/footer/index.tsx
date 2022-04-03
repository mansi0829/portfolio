import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="opacity-90 overflow-hidden py-8">
      <div className=" w-full bg-transparent opacity-50 dark:opacity-80 z-20 pt-3">
        <header className="lg:px-16 px-6 bg-transparent flex sm:flex-wrap items-center lg:py-0 py-2">
          <div className="text-xl flex-1 flex flex-wrap justify-between items-center text-black dark:text-white">
            <p>&copy; {new Date().getFullYear()} All rights
              reserved.
            </p>
          </div>
          <div>
            <ul className="flex justify-center  ">
              <li className="p-1 px-2 text-2xl hover:text-gray-400">
                <a
                  href="https://github.com/mansi0829"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="p-1 px-2 text-2xl hover:text-indigo-500">
                <a
                  href="https://twitter.com/mansi_gundre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="p-1 px-2 text-2xl hover:text-blue-400">
                <a
                  href="https://www.linkedin.com/in/mansi-gundre-a6a722207/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="p-1 px-2 text-2xl hover:text-pink-600">
                <a
                  href="https://www.instagram.com/mansii.iii.__/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Footer;
