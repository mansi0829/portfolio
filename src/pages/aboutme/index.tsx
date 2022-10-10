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
                                I am a hard-working and driven individual who isn&apos;t afraid to face a challenge. I&apos;m passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who tries to be fair in everything I do.
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