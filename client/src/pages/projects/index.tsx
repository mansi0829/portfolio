import Image from "next/image";
import React from "react";
import office from "../../../static/office.png";

const Projects = () => {
  return (
    <div>
      <h2 className="pt-24 py-8 px-10 text-4xl flex  justify-center items-center">Projects</h2>
      <div className="lg:flex justify-between px-8">
        <div className="lg:mx-2 flex flex-col flex-wrap items-center">
          <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
            <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 relative">
              <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                A Connector
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

                  <div className="flex items-start ml-4">
                    <svg
                      className="text-gray-400 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect
                        xmlns="http://www.w3.org/2000/svg"
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      />
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                      />
                    </svg>
                    <span className="ml-1 text-gray-500">1 Month</span>
                  </div>
                </div>
                <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">
                    React
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
                    MongoDb
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                    Docker
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                    Node Js
                  </span>
                </div>
                <div className="mt-12 flex items-center">
                  <Image
                    className="w-16 h-16 bg-cover  border-2 border-gray-700"
                    alt=""
                    src={office}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mx-2 flex flex-col items-center">
          <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
            <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 relative">
              <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                PCSB-Coding Platform
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

                  <div className="flex items-start ml-4">
                    <svg
                      className="text-gray-400 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect
                        xmlns="http://www.w3.org/2000/svg"
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      />
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                      />
                    </svg>
                    <span className="ml-1 text-gray-500">2 Month</span>
                  </div>
                </div>
                <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                    React Js
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
                    Redux
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                    Node Js
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                    Tailwind CSS
                  </span>
                </div>
                <div className="mt-12 flex items-center">
                  <Image
                    className="w-16 h-16 bg-cover  border-2 border-gray-700"
                    alt="office"
                    src={office}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mx-2 flex flex-col items-center">
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

                  <div className="flex items-start ml-4">
                    <svg
                      className="text-gray-400 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect
                        xmlns="http://www.w3.org/2000/svg"
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      />
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                      />
                    </svg>
                    <span className="ml-1 text-gray-500">1 Month</span>
                  </div>
                </div>
                <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">
                    Next Js
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
                    TypeScript
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                    MongoDb
                  </span>
                  <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                    Node Js
                  </span>
                </div>
                <div className="mt-12 flex items-center">
                  <Image
                    className="w-16 h-16 bg-cover  border-2 border-gray-700"
                    alt=""
                    src={office}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
