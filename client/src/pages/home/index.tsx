import Image from "next/image";
import React from "react";
import workinggirl from "../../../static/workinggirl.png";

const Home = () => {
  return (
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
          In my Free time I do same DSA and listen Music.
        </p>
      </div>
    </div>
  );
};

export default Home;
