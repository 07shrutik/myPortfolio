import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Navbar from "./components/Navbar";

const App = () => {
  // const match = useMediaQuery("(max-width:400px)");

  return (
    <div>
      <BrowserRouter>
        {/* {match && <Navbar />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
};

export default App;
