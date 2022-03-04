import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center item-center mt-24">
        <div className="card">
          <h1 className="title text-gray-800 dark:text-gray-100">
            Contact Me!
          </h1>
          <p className="subtitle">
            <form action="">
              <div className="p-2 text-xl text-gray-400">
                <label htmlFor="name">Name : </label>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Name"
                  aria-label="Full name"
                />
              </div>
              <div className="p-2 text-xl text-gray-400">
                <label htmlFor="name">Email : </label>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div className="p-2 text-xl text-gray-400">
                <label htmlFor="name">Message : </label>
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Message"
                  aria-label="Message"
                />
              </div>
            </form>
          </p>
          <button className="py-3 px-8 font-semibold rounded bg-blue-500 hover:bg-blue-400 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
