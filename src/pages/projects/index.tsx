import Image from "next/image";
import React, { useEffect } from "react";
import home from "../../static/home.png";
import ojplatform from "../../static/ojplatform.png";
import blogapp from "../../static/blogapp.png";
import diet from "../../static/diet.png";
import antons from "../../static/antons.png";
import insurance from "../../static/insurance.png";
import attendance from "../../static/attendance.png"
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
        <div className="lg:flex justify-between flex-wrap max-w-8xl mx-auto px-8">
          {/* project 1 */}
          <div className="lg:mx-3 lg:mt-2 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300" data-aos="fade-up" data-aos-delay="0">
            <div className="flex-1 flex w-full max-w-md pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg hover:shadow-xl rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 hover:shadow-cyan-700 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  One Point Student Falculty Portal
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <span className="ml-1 text-gray-500">Developed a streamlined student and faculty verification portal for AICTE-affiliated colleges, reducing manual processing time. Integrated ReactJS, Tailwind CSS, and Redux for efficient state management. Implemented live image sharing for face verification with OTP Verification and integrated ML models with Flask backend for data extraction from Pan and Aadhar card.</span>
                    </div>
                  </div>
                  <div className="text-center flex flex-row  flex-wrap justify-between items-center text-xs font-bold">
                    <span className="w-11/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                      ReactJs, Redux, Tailwind CSS,<br /> Flask, OpenCV Face Recognition
                    </span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <Image
                      className="w-16 h-16 bg-cover  border-2 border-gray-700"
                      alt="office"
                      src={antons}
                    ></Image>
                  </div>
                  <div className="flex justify-center item-center">
                    <a href="https://sih-gules.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        View
                      </button>
                    </a>
                    <a href="https://github.com/Antons-SIH"
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
          <div className="lg:mx-3 lg:mt-2 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300" data-aos="fade-up" data-aos-delay="150">
            <div className="flex-1 flex w-full max-w-md pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg hover:shadow-xl rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 hover:shadow-cyan-700 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  PCSB Coding Platform
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <span className="ml-1 text-gray-500">Online Judge platform focusing on hosting coding contests and calculating real-time rankings. Utilized React, Redux, and TailwindCSS for user interface, integrating React Ace editor for coding. Server-side functionality implemented with Online Judge for compiling user input, Nginx for load balancing, and Redis for caching.</span>
                    </div>
                  </div>
                  <div className="text-center flex flex-row  flex-wrap justify-between items-center text-xs font-bold">
                    <span className="w-11/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                      ReactJs, Redux, Tailwind CSS <br />
                      NodeJs
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
          <div className="lg:mx-3 lg:mt-2 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="flex-1 flex w-full max-w-md pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg hover:shadow-xl rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 hover:shadow-cyan-700 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  Insurance Prediction
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <span className="ml-1 text-gray-500">Insurance prediction application using Django and React, integrating a machine learning model built with Linear Regression. The app predicts medical insurance costs based on user input such as age, BMI, children, smoking status, and illness history. Achieved a high accuracy rate validated by an R2 score. Implemented features for seamless user experience and deployed the application successfully.</span>
                    </div>
                  </div>
                  <div className="text-center flex flex-row  flex-wrap justify-between items-center text-xs font-bold">
                    <span className="w-11/12 mt-6 mx-1 p-1 rounded bg-red-200 text-red-600">
                      Linear Regression, NodeJS <br />
                      ReactJs, Redux, Tailwind CSS
                    </span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <Image
                      className="w-16 h-16 bg-cover  border-2 border-gray-700"
                      alt="office"
                      src={insurance}
                    ></Image>
                  </div>
                  <div className="flex justify-center item-center">
                    <a href="https://test-gamma-mocha.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        View
                      </button>
                    </a>
                    <a href="https://github.com/mozo-hackathon/avengHers_hackPrint2.0"
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
          <div className="lg:mx-3 lg:mt-12 flex flex-col flex-wrap items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300" data-aos="fade-up" data-aos-delay="450">
            <div className="flex-1 flex w-full max-w-md pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg hover:shadow-xl rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 hover:shadow-cyan-700 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  Diet Tracker
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <span className="ml-1 text-gray-500">Diet Tracker web app using Django. Enables secure user registration, authentication, and login/logout functionality. Users can view categorized and paginated food items, add new items with images, log consumed foods, and track weight over time.</span>
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
                      src={diet}
                    />
                  </div>
                  <div className="flex justify-center item-center">
                    <a href="https://diet-tracker-tohh.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        View
                      </button>
                    </a>
                    <a href="https://github.com/mansi0829/diet-tracker"
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
          <div className="lg:mx-3 lg:mt-12 flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300" data-aos="fade-up" data-aos-delay="600">
            <div className="flex-1 flex w-full max-w-md pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg hover:shadow-xl rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 hover:shadow-cyan-700 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  Portfolio
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <span className="ml-1 text-gray-500">Designed and developed a dynamic portfolio website using Next.js and TypeScript. Implemented a working contact form with seamless email functionality using EmailJS. Integrated interactive animations for an engaging user experience.</span>
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
          <div className="lg:mx-3 lg:mt-12 flex flex-col flex-wrap items-center transition ease-in-out delay-150 hover:-translate-y-8 duration-300" data-aos="fade-up" data-aos-delay="750">
            <div className="flex-1 flex w-full max-w-md pt-16 lg:pt-0">
              <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg hover:shadow-xl rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 hover:shadow-cyan-700 relative">
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300 leading-tight">
                  Attendance Management System
                </div>
                <div>
                  <div className="flex justify-between mt-6 text-xs font-bold">
                    <div className="flex items-start">
                      <span className="ml-1 text-gray-500">Developed a face recognition application using Flask, SQL, and React. Utilized OpenCV and face_recognition library to detect and recognize faces from webcam input. Implemented MySQL database for storing attendance records. Integrated Flask for backend API and React for interactive user interface, enabling real-time face recognition and attendance tracking.</span>
                    </div>
                  </div>
                  <div className="text-center flex flex-row flex-wrap justify-between items-center text-xs font-bold">
                    <span className="w-11/12 mt-6 mx-1 p-1 rounded bg-cyan-200 text-cyan-600">
                      Flask, OpenCV Face Recognition <br /> HTML, CSS, JavaScript.
                    </span>
                  </div>

                  <div className="mt-4 flex items-center">
                    <Image
                      className="w-16 h-16 bg-cover  border-2 border-gray-700"
                      alt=""
                      src={attendance}
                    />
                  </div>
                  <div className="flex justify-center item-center">
                    <a href="https://github.com/mansi0829/face-recognition#ui-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-500 hover:bg-blue-400 text-center text-blue-100">
                      <button >
                        View
                      </button>
                    </a>
                    <a href="https://github.com/mansi0829/face-recognition"
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
