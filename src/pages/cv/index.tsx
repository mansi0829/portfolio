import Head from 'next/head'
import React from 'react'
import Card from '../../components/card'


const cv = () => {
  return (
    <>
      <Head>
        <title>Mansi Gundre | CV</title>
      </Head>
      <div className="timer-section">
        <div className="container">
          <div className="timer-container">
            <ul className="timer justify-center">
              <Card
                number="23"
                title="BA3 Intern"
                subtitle="Barclays"
                duration="June 2023 - August 2023"
                description="Created Shell Scripts for autosys and Worked on implemeting tracing for server logs."
                skills={['Shell Script', 'Java', 'Java Swing', 'OpenTracing', 'MySQL', 'Kibana']}
              />
              <Card
                number="22"
                title="Fossee Summer Fellow"
                subtitle="IIT Bombay"
                duration="April 2022 - August 2022"
                description="Worked on Email Validation System and implemented Full text search feature."
                skills={['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'Testing']}
              />
              <Card
                number="22"
                title="Microsoft Engage 2022"
                subtitle="Microsoft"
                duration="May 2022 - June 2022"
                description="Worked on Face Recognition Web-based application for attendance management system using OpenCV."
                skills={['ReactJs', 'Python', 'OpenCV', 'Face Recognition', 'MySQL']}
              />
              <Card
                number="22"
                title="Web Development Intern"
                subtitle="Kode It Solutions"
                duration="August 2021 - December 2021"
                description="Worked on Inhouse Project using react, firebase, material ui."
                skills={['ReactJs', 'FireBase', 'Material UI']}
              />
            </ul>
          </div>
        </div>
      </div></>
  )
}

export default cv