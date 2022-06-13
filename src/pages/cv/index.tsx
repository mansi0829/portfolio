import React from 'react'

const cv = () => {
  return (

    <div className="timer-section">
      <div className="container">
        <div className="timer-container">
          <ul className="timer">
            <li className="step shadow-3xl ">
              <span>22</span>
              <div className="content">
                <h3 className='text-xl font-bold'>Fossee Summer Fellow<div className='text-sm font-light font-semibold'>March 2022 - Present</div> </h3>
                <p className='py-2'>
                  Worked on Email Validation System.
                </p>
                <span className="w-6/12 mt-6 mx-1 p-1 rounded bg-red-200 text-red-600">
                  Java
                </span><span className="w-6/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                  Spring Boot
                </span>
                <div className='py-4'>
                  <span className="w-6/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                    Spring MVC
                  </span>
                  <span className="w-6/12 mt-6 mx-1 p-1 rounded bg-violet-200 text-violet-600">
                    MySQL
                  </span>
                </div>
              </div>
            </li>
            <li className="step shadow-3xl">
              <span>22</span>
              <div className="content">
                <h3 className='text-xl font-bold'>Microsoft Engage 2022<div className='text-sm font-light font-semibold'>May 2022 - June 2022</div></h3>
                <p className='py-2'>
                  Worked on Face Rcognition Web based application for attendance management system using openCV.
                </p>
                <span className="w-6/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600 ">
                  ReactJs
                </span><span className="w-6/12 mt-6 mx-1 p-1 rounded bg-red-200 text-red-600">
                  Python
                </span><span className="w-6/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                  OpenCV
                </span>
                <div className='py-2'></div>
                <span className="w-6/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">
                  Face Recognition
                </span>
                <span className="w-6/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
                  MySQL
                </span>
              </div>
            </li>
            <li className="step shadow-3xl">
              <span>21</span>
              <div className="content">
                <h3 className='text-xl font-bold'>Kode It Solutions<div className='text-sm font-light '>August 2021 - December 2021</div></h3>
                <p className='py-2'>
                  Worked on Inhouse Project using react, firebase, material ui.
                </p>
                <span className="w-6/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600 ">
                  ReactJs
                </span><span className="w-6/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                  FireBase
                </span><span className="w-6/12 mt-6 mx-1 p-1 rounded bg-red-200 text-red-600">
                  Material Ui
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default cv