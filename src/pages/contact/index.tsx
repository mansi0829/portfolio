import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

const Result = () => {
  return (
    <p className='py-2 flex text-2xl justify-center items-center'>Your message has been successfully sent. I will contact you soon</p>
  )
}

const Contact = () => {

  const form = useRef();
  const [result, showResult] = useState(false)
  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(`service_xsxqorv`, `template_edg1zfs`, form.current, `ZD0D0yTpc7hhtXKqD`)
    .then(
      (response) => {
        console.log('Email sent successfully:', response);
        showResult(true);
      },
      (error) => {
        console.error('Email sending failed:', error);
      }
    );
  };


  return (
    <>
      <Head>
        <title>Mansi Gundre | Projects</title>
      </Head>
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800 dark:text-gray-100">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Know more about me !!</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form ref={form} onSubmit={handleOnSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-blue-500 hover:bg-blue-400 border-0 py-2 px-8 focus:outline-none rounded text-lg" style={{ position: "relative", zIndex: 5, margin: "0 auto" }}>Submit</button>
              </div>
            </div>
          </form>
        </div>
        {result && <Result />}
      </div>
    </>
  );
};

export default Contact;
