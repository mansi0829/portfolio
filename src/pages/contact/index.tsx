import React from "react";

const Contact = () => {

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }

  return (
    <div className="min-h-screen">
      <div className="flex justify-center item-center pt-32">
        <div className="max-w-3xl p-4 px-8 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-md  shadow-cyan-700/50">
          <h1 className="text-2xl text-gray-800 dark:text-gray-100 p-3">
            Contact Me!
          </h1>
          <div className="py-4">
            <form method="post" onSubmit={handleOnSubmit}>
              <div className="py-2 text-xl text-gray-400">
                <input
                  className="appearance-none bg-transparent border-none shadow-lg hover:shadow-xl shadow-lg hover:shadow-2xl shadow-xl hover:shadow-2xl shadow hover:shadow-2xl shadow hover:shadow-xl shadow w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Full name"
                />
              </div>
              <div className="py-2 text-xl text-gray-400">
                <input
                  className="appearance-none bg-transparent border-none shadow-lg hover:shadow-xl shadow-lg hover:shadow-2xl shadow-xl hover:shadow-2xl shadow hover:shadow-2xl shadow hover:shadow-xl shadow w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div className="py-2 text-xl text-gray-400">
                <textarea
                  className="appearance-none bg-transparent border-none shadow-lg hover:shadow-xl shadow-lg hover:shadow-2xl shadow-xl hover:shadow-2xl shadow hover:shadow-2xl shadow hover:shadow-xl shadow w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  name="message"
                  placeholder="Message"
                  aria-label="Message"
                />
              </div>
              <div className="px-3">
                <button className="py-2 px-8 font-semibold rounded bg-blue-500 hover:bg-blue-400 rounded-full">
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
