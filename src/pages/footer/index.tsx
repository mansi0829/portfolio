import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {

  return (
    <div>
      <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 grid grid-cols-3 gap-4">
        <div>
          <p className="mt-9 text-base leading-6 text-center text-gray-400 ">
            Designed and Developed by Mansi Gundre
          </p>
        </div>
        <div>
          <p className="mt-1 text-base leading-6 text-center text-gray-400">
            &copy; {new Date().getFullYear()} All rights
            reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <ul className="flex justify-center px-8">
            <li className="p-2">
              <a
                href="https://github.com/soumyajit4419"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="p-2">
              <a
                href="https://twitter.com/Soumyajit4419"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="p-2">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="p-2">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
