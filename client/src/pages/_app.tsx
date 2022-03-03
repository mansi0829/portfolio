import React from "react";
import "../styles/globals.css";
import "../styles/app.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
