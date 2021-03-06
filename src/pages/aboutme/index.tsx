import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Github from '../github';
import Resume from '../resume';

const AboutMe = () => {
    return (
        <div>
            <Head>
                <title>Mansi Gundre | Aboutme</title>
            </Head>
            <div className="py-12 m-8">
                <div className="flex justify-center items-center">
                    <div className="max-w-3xl p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg shadow-md  shadow-cyan-700/50">
                        <div className="mb-2">
                            <p className=" text-xl px-4 text-center text-gray-600 dark:text-gray-400">
                                Hi, I am <h1 className='text-3xl'> <span className='font-bold'>Mansi</span> Gundre</h1>
                            </p>
                            <p className="text-xl px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                                An enthusiastic person who likes to explore different technology.
                            </p>
                            <p className="text-xl px-4 text-center text-gray-600 dark:text-gray-400">
                                Purpose | Hope | Logic
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Github />
        </div>
    )
}

export default AboutMe