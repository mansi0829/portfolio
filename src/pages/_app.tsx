import React from "react";
import "../styles/globals.css";
import "../styles/app.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar";
import Footer from "./footer";
import Head from "next/head";
import Animation from "../components/animation";
import ScrollToTop from "react-scroll-to-top";

function MyApp({ Component, pageProps }) {
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
      <ScrollToTop smooth color="blue" />
      <Animation />
    </ThemeProvider>
  );
}

export default MyApp;
