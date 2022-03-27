import Image from 'next/image'
import React from 'react'
import logo1 from '../../../public/static/logo1.png'
import logo2 from '../../../public/static/logo2.png'

const Experience = () => {
  return (
    <div className='pt-4 hover:shadow-md'>
      <h1 className='text-2xl flex justify-center p-1 pt-12'>
        Currently Working at:
      </h1>
      <div className='flex justify-center'>
        <div className="p-5 mb-24">
          <a href="https://fossee.in/semester-long-internship/2022">
            <Image src={logo2} alt="fossee"/>
          </a>
        </div>
      </div>

    </div>
  )
}
export default Experience
