import React from "react";
import "../styles/globals.css";
import "../styles/app.css";
import "../styles/animation.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar";
import Footer from "./footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="logo.png" type="image/png" sizes="114x114" />
        <title>Mansi Gundre | Portfolio</title>
        <meta name="keywords" content="mansi gundre" />
        <meta name="description" content="mansi gundre portfolio" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
