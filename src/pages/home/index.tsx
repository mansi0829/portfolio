import Image from "next/image";
import React from "react";
import workinggirl from "../../static/workinggirl.png";
import Github from "../github";
import Type from "./typeAnimation";
import Link from "next/link";

const Home = () => {
  return (
    <div id="#home">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center mb-12">
        <div className="px-8 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl text-gray-800 dark:text-gray-50 text-center md:text-left font-bold mb-4">
            Mansi Gundre
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 text-center md:text-left font-bold mb-4">
            <Type />
          </p>
          <p className="text-xl text-gray-800 dark:text-gray-400 text-center md:text-left">
            Final Year Grad at <a className="text-cyan-600 hover:text-cyan-800 dark:hover:text-cyan-400 " href="https://pict.edu/">Pune Institute of Computer Technology.</a><br />
            The best thing about Boolean is that even if you are wrong, you are only off by a bit. <br />
            I like exploring music and uncovering patterns in algorithms. <br />
          </p>
          <Link href={{ pathname: '/contact' }}><button className="mt-6 text-white bg-blue-500 hover:bg-blue-400 border-0 py-2 px-8 focus:outline-none rounded text-lg" style={{ position: "relative", zIndex: 5 }}>
            {`Let's Connect!`}
          </button></Link>
        </div>
        <div className="lg:max-w-lg  md:w-1/2 w-5/6">
          <Image
            className="lg:h-80 md:h-64 h-40 mt-0 rounded-full "
            src={workinggirl}
            alt="mansi"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
