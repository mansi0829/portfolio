import '../styles/globals.css'
import '../styles/app.css'
import 'aos/dist/aos.css'
import { ThemeProvider } from 'next-themes'
import * as React from 'react'
import Layout from '../components/Layout'
import AOS from 'aos';
import { useEffect } from 'react';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Specify the duration of animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className='h-full'>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
