import '../styles/globals.css'
import '../styles/app.css'
import 'aos/dist/aos.css'
import { ThemeProvider } from 'next-themes'
import * as React from 'react'
import Layout from '../components/Layout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
