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
      <div className="bg-gray-300 dark:bg-gray-700 opacity-90 py-4 text-2xl overflow-hidden grid grid-cols-3 gap-4">
        <div>
          <p className="text-base leading-6 text-center text-gray-800 dark:text-gray-300 ">
            Designed and Developed by Mansi Gundre
          </p>
        </div>
        <div>
          <p className="text-base leading-6 text-center text-gray-800 dark:text-gray-300">
            &copy; {new Date().getFullYear()} All rights
            reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <ul className="flex justify-center px-8">
            <li className="p-1 px-2">
              <a
                href="https://github.com/mansi0829"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="p-1 px-2">
              <a
                href="https://twitter.com/mansi_gundre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="p-1 px-2">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="p-1 px-2">
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
      </div>
    </div>
  );
};

export default Footer;
