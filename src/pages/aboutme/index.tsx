import React from 'react';
import Resume from '../resume';

const AboutMe = () => {
    return (
        <div>
            <div className="flex items-center justify-center px-5 pt-40 mb-20 ">
                <div className="shadow-lg rounded bg-gray-100 dark:bg-gray-800 shadow-cyan-700/50 relative text-white text-2xl transition ease-in-out delay-150 hover:-translate-y-8 duration-300" >
                    <div className="border-b border-gray-800 px-8 py-3">
                        <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div><div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="px-8 py-6">
                        <p><em className="text-blue-400">const</em> <span className="text-green-400">aboutMe</span> <span className="text-pink-500"></span> <em className="text-blue-400">= () =&gt; </em></p>
                        <p>&nbsp;&nbsp;<span className="text-pink-500">return</span> ( </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">&apos;Mansi Gundre&apos;</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;position: <span className="text-yellow-300">&apos;fullstack-developer&apos;</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;hobbies: <span className="text-yellow-300">&apos;travel | drawing | sports&apos;</span>,</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;website: <span className="text-yellow-300">&apos;<a href="https://mansigundre.in" target="_blank" rel="noreferrer" className="text-yellow-300 hover:underline focus:border-none">https://mansigundre.in</a>&apos;</span>,</p>
                        <p>&nbsp;&nbsp;)</p>
                        <p className='py-3'></p>
                        <p><Resume /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe