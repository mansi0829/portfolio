import React from 'react'
const Resume = () => {

    return (
        <div className='flex justify-center'>
            <div className=" px-0 block border-b-2 border-transparent">
                <button className="bg-gray-700 text-white hover:bg-gray-600 p-3 px-5 rounded-md">
                    <a href="resume.pdf" download="Resume.pdf">Resume</a>
                </button>
            </div>
        </div>
    )
}

export default Resume