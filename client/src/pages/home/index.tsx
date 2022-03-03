import Image from "next/image";
import React from "react";
import workinggirl from "../../../static/workinggirl.png";

const Home = () => {
  return (
    <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-36">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          iste est, id quasi aspernatur aut natus eveniet commodi saepe nesciunt
          perspiciatis quis obcaecati, modi quidem magni dolores temporibus
          minus autem
        </p>
        <button className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
