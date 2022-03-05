import Image from "next/image";
import Link from "next/link";
import React from "react";
import workinggirl from "../../../static/workinggirl.png";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:pt-36 pb-28">
        <div className="grid justify-center items-center order-1 col-span-1">
          <Image
            className="lg:h-80 md:h-64 h-40 rounded-full"
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
            An Enthusiatic Learner trying to expore Web Devlopment, Cloud and
            DevOps. <br />
            In my free time I do some DSA and listen music.
          </p>
        </div>
      </div>
      <div className="py-8">
      <div className="flex justify-center items-center">
        <div className="max-w-3xl p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-md  shadow-cyan-700/50">
          <div className="mb-2">
            <div className="h-3 text-3xl text-left text-indigo-600">“</div>
            <p className="name text-4xl px-4 text-center text-gray-600 dark:text-gray-400">
              not all who wonder are lost !
            </p>
            <div className="h-3 text-3xl text-right text-indigo-600">”</div>
            <div className="text-center">
              <h5 className="font-bold text-indigo-600">Mansi Gundre</h5>
              <p>I do write sometimes...</p>
              <div className="py-3">
                <Link href={"/blog"}>
                  <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                    here!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
