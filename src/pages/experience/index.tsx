import Image from 'next/image'
import React from 'react'
import logo1 from '../../../static/logo1.png'
import logo2 from '../../../static/logo2.png'

const Experience = () => {
  return (
    <div>
      <h1 className="flex justify-center item-center text-3xl pt-20">Experience: </h1>
      <div className="flex justify-center item-center">
        <div className="p-10 pt-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <a href="https://fossee.in/semester-long-internship/2022">
            <Image src={logo2} />
          </a>
        </div>
        <div className="p-10 pt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
          <a href="https://kodeitsolutions.com/">
            <Image src={logo1} />
          </a>
        </div>
      </div>

    </div>
  )
}
export default Experience
