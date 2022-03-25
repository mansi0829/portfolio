import Image from "next/image";
import Link from "next/link";
import React from "react";
import workinggirl from "../../../static/workinggirl.png";
import Experience from "../experience";
import Github from "../github";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto md:mt-0 pt-20 md:space-x-10 md:grid grid-cols-3 justify-center md:pt-36 pb-28">
        <div className="grid justify-center items-center  order-1 col-span-1">
          <Image
            className="lg:h-80 md:h-64 h-40 mt-0 rounded-full"
            src={workinggirl}
            alt=""
          />
        </div>
        <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1 className="text-4xl text-gray-800 dark:text-gray-50 text-center md:text-left font-bold mb-4">
            Mansi Gundre
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 text-center md:text-left font-bold mb-4">
            Software Engineer
          </p>
          <p className="text-xl text-gray-800 dark:text-gray-400 text-center md:text-left">
            Sophomore at <a className="text-cyan-600 hover:text-cyan-800 dark:hover:text-cyan-400 " href="https://pict.edu/">Pune Institute of Computer Technology.</a><br />
            An Enthusiatic Learner trying to expore Web Devlopment, Cloud and
            DevOps. <br />
            In my free time I do some DSA and listen music. <br />
          </p>
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
                  <Link href={"/contact"}>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                      Connect!
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
