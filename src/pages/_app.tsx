import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/app.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar";
import Footer from "./footer";
import Head from "next/head";
import Animation from "../components/animation";
import AOS from "aos";

import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href="logo2.png" type="image/png" sizes="114x114" />
        <title>Mansi Gundre | Portfolio</title>
        <meta name="keywords" content="mansi gundre" />
        <meta name="description" content="mansi gundre portfolio" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Animation />
    </ThemeProvider>
  );
}

export default MyApp;
