import React from "react";
import "../styles/globals.css";
import "../styles/app.css";
import "../styles/animation.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar";
import Footer from "./footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <div className="animateme">
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
