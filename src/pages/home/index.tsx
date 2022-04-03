import Image from "next/image";
import Link from "next/link";
import React from "react";
import workinggirl from "../../static/workinggirl.png";
import Github from "../github";
import Type from "./typeAnimation";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center mb-32">
        <div className="px-8 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl text-gray-800 dark:text-gray-50 text-center md:text-left font-bold mb-4">
            Mansi Gundre
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 text-center md:text-left font-bold mb-4">
            <Type />
          </p>
          <p className="text-xl text-gray-800 dark:text-gray-400 text-center md:text-left">
            Sophomore at <a className="text-cyan-600 hover:text-cyan-800 dark:hover:text-cyan-400 " href="https://pict.edu/">Pune Institute of Computer Technology.</a><br />
            An Enthusiatic Learner trying to expore Web Devlopment, Cloud and
            DevOps. <br />
            In my free time I do some DSA and listen music. <br />
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="lg:h-80 md:h-64 h-40 mt-0 rounded-full "
            src={workinggirl}
            alt=""
          />
        </div>
      </div>
      <div className="mb-8">
        <div className="flex justify-center items-center">
          <div className="max-w-3xl p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-md  shadow-cyan-700/50">
            <div className="mb-2">
              <div className="h-3 text-3xl text-left text-indigo-600">“</div>
              <p className="name text-4xl px-4 text-center text-gray-600 dark:text-gray-400">
                Being what we want to become each day.
              </p>
              <div className="h-3 text-3xl text-right text-indigo-600">”</div>
              <div className="text-center">
                <div className="py-3">
                  {/* eslint-disable-next-line @next/next/link-passhref */}
                  <Link href="/contact">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                      <a>Connect!</a>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Github />
    </div>
  );
};

export default Home;
