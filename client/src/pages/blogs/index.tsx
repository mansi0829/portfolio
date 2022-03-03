import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="py-8">
      <div className="flex justify-center items-center">
        <div className="max-w-3xl p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-md  shadow-cyan-700/50">
          <div className="mb-2">
            <h1 className="flex justify-center items-center">
              I do Write Sometimes
            </h1>
            <div className="h-3 text-3xl text-left text-indigo-600">“</div>
            <p className="px-4 text-center text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              tempore quod commodi quae deleniti repudiandae, ipsum eos
              dignissimos in temporibus, cupiditate sint iure. Vel dolorem sunt
              nemo obcaecati animi sapiente?
            </p>
            <div className="h-3 text-3xl text-right text-indigo-600">”</div>
            <div className="text-center">
              <h5 className="font-bold text-indigo-600">Mansi Gundre</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Student
              </p>
              <div className="py-3">
                <Link href={"/blogs/allblogs"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    More!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
