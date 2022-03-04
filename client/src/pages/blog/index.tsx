import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
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
                <Link href={"/blog/blogs"}>
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
  );
};

export default Blogs;
