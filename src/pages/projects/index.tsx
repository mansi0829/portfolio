import Image from "next/image";
import React, {useEffect} from "react";
import home from "../../static/home.png";
import ojplatform from "../../static/ojplatform.png";
import blogapp from "../../static/blogapp.png";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Mansi Gundre | Projects</title>
      </Head>
      <div className=" z-100">
        <h2 className="pt-15 py-12 px-12 text-4xl flex justify-center items-center">
          Projects
        </h2>
        <div className="lg:flex justify-between px-16">
          {/* project 1 */}
          <div className="lg:mx-2 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300"  data-aos="fade-up" data-aos-delay="0">
            <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  Portfolio
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <svg
                        className="text-gray-400 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="ml-1 text-gray-500">Pune</span>
                    </div>

                  </div>
                  <div className="text-center flex flex-row flex-wrap justify-between items-center text-xs font-bold">
                    <span className="w-11/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                      NextJs, TypeScript
                    </span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <Image
                      className="w-16 h-16 bg-cover  border-2 border-gray-700"
                      alt=""
                      src={home}
                    />
                  </div>
                  <div className="flex justify-center item-center">
                    <a href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        View
                      </button>
                    </a>
                    <a href="https://github.com/mansi0829/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button>
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mx-2 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300"  data-aos="fade-up" data-aos-delay="300">
            <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  PCSB Coding Platform
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <svg
                        className="text-gray-400 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="ml-1 text-gray-500">Pune</span>
                    </div>
                  </div>
                  <div className="text-center flex flex-row  flex-wrap justify-between items-center text-xs font-bold">
                    <span className="w-11/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                      ReactJs, Redux, Tailwind CSS
                    </span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <Image
                      className="w-16 h-16 bg-cover  border-2 border-gray-700"
                      alt="office"
                      src={ojplatform}
                    ></Image>
                  </div>
                  <div className="flex justify-center item-center">
                    <a href="https://oj-client.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        View
                      </button>
                    </a>
                    <a href="https://github.com/PCSB-Web-Team/online-judge-client/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mx-2 flex flex-col flex-wrap items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300"  data-aos="fade-up" data-aos-delay="600">
            <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  Blog Application
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <svg
                        className="text-gray-400 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="ml-1 text-gray-500">Pune</span>
                    </div>
                  </div>
                  <div className="text-center flex flex-row flex-wrap justify-between items-center text-xs font-bold">
                    <span className="w-11/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">
                      Django, HTML, CSS, JavaScript.
                    </span>
                  </div>

                  <div className="mt-4 flex items-center">
                    <Image
                      className="w-16 h-16 bg-cover  border-2 border-gray-700"
                      alt=""
                      src={blogapp}
                    />
                  </div>
                  <div className="flex justify-center item-center">
                    <a href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        View
                      </button>
                    </a>
                    <a href="https://github.com/mansi0829/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default Projects;
