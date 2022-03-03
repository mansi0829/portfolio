import React from "react";
import About from "./about";
import Blogs from "./blogs";
import { Contact } from "./contact";
import Experience from "./experience";
import Footer from "./footer";
import Home from "./home";
import Projects from "./projects";

const index = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects/>
      {/* <Experience/> */}
      <Blogs />
      {/* <Contact/> */}
      <Footer />
    </div>
  );
};

export default index;
