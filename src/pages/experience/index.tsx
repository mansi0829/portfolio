import Image from 'next/image'
import React from 'react'
import logo1 from '../../../static/logo1.png'
import logo2 from '../../../static/logo2.png'

const Experience = () => {
  return (
    <div className='pt-4'>
      <div className='flex'>
      <h1 className='pt-5 text-2xl'>Currently working at: </h1>
        <div className="m-8 transform h-52  w-1/6  transition duration-500 hover:scale-125">
          <a href="https://fossee.in/semester-long-internship/2022">
            <Image src={logo2} />
          </a>
        </div>
      </div>

    </div>
  )
}
export default Experience
