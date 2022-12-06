import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'
import Home from './home'

const HomePage = () => {

  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  return (
    <>
      <Head>
        <title>Mansi | Home</title>
      </Head>
      <Home />
    </>
  )
}



export default HomePage
