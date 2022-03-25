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
    <div className="bg-gray-300 dark:bg-gray-700 opacity-90 text-2xl overflow-hidden">
      <div className="flex flex-wrap -mx-2 ">
        <div className="w-full md:w-1/2 lg:w-1/4 px-2">
          <div className="h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>Designed and Developed By Mansi Gundre</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-2">
          <div className="h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>&copy; {new Date().getFullYear()} All rights
              reserved.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-2">
          <div className="h-12 text-sm text-grey-dark flex items-center justify-center">
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
      </div>

    </div>
  );
};

export default Footer;
