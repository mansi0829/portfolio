import React from "react";
import "../styles/globals.css";
import "../styles/app.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar";
import Footer from "./footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}

export default MyApp;
