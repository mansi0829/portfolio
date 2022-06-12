import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi"

import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // const isMounted = useIsMounted()
  return (
    <div className="opacity-90 relative py-8 z-50">
      <div className=" w-full bg-transparent opacity-50 dark:opacity-80 z-20 pt-3">
        <header className="lg:px-16 px-6 bg-transparent flex sm:flex-wrap items-center lg:py-0 py-2">
          <div className="text-xl flex-1 flex flex-wrap justify-between items-center text-black dark:text-white">
            <p>&copy; {new Date().getFullYear()} All rights
              reserved.
            </p>
          </div>
          <div>
            <ul className="flex justify-center  ">
              <li className="relative before:absolute p-1 px-2 text-2xl transform transition duration-500 hover:scale-125">
                <Link
                  href="https://github.com/mansi0829"
                >
                  <a target="_blank"
                    rel="noopener noreferrer"><AiFillGithub /></a>

                </Link>
              </li>
              <li className="p-1 px-2 text-2xl  transform transition duration-500 hover:scale-125">
                <a
                  href="https://www.linkedin.com/in/mansi-gundre-a6a722207/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="p-1 px-2 text-2xl  transform transition duration-500 hover:scale-125">
                <a
                  href="https://www.instagram.com/mansii.iii.__/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="p-1 px-2 text-2xl  transform transition duration-500 hover:scale-125">
                <a
                  href="mailto:mansigundre1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiMail />
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
