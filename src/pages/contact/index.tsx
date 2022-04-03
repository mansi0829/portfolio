import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <p className='py-2'>Your message has been successfully sent. I will contact you soon</p>
  )
}

const Contact = () => {

  const form = useRef();
  const [result, showResult] = useState(false)
  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(`service_xsxqorv`, `template_edg1zfs`, form.current, `ZD0D0yTpc7hhtXKqD`)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true);
  };


  return (
    <div className="min-h-screen">
      <div className="flex justify-center item-center pt-32">
        <div className="max-w-3xl p-4 px-8 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-md  shadow-cyan-700/50">
          <h1 className="text-2xl text-gray-800 dark:text-gray-100 px-24 py-5">
            Contact Me!
          </h1>
          <div className="py-4">
            <form method="post" onSubmit={handleOnSubmit}>
              <div className="py-2 text-xl text-gray-400">
                <input
                  className="appearance-none bg-transparent border-none shadow-lg hover:shadow-2xl w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  aria-label="Full name"
                />
              </div>
              <div className="py-2 text-xl text-gray-400">
                <input
                  className="appearance-none bg-transparent border-none shadow-lg hover:shadow-2xl w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div className="py-2 text-xl text-gray-400">
                <textarea
                  className="appearance-none bg-transparent border-none shadow-lg hover:shadow-2xl w-full text-gray-700 dark:text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  name="message"
                  placeholder="Message"
                  aria-label="Message"
                />
              </div>
              <div className="px-3">
                <button className="py-2 px-8 font-semibold bg-blue-500 hover:bg-blue-400 rounded-full">
                  Submit
                </button>
                <div>
                  {result ? <Result /> : null}
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
