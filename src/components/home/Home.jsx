import React from "react";
import styles from "./Home.module.css";
// import pic1 from "./../../assets/pic1.jpg";
// import vector from "./../../assets/19199025.jpg";
import "@fontsource/caveat";
import useMediaQuery from "@mui/material/useMediaQuery";
import ReactTyped from "react-typed";
// import { Link, NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import resume from "../../assets/Resume_shrutik.pdf";
import Navbar from "../Navbar";
const Home = () => {
  const match = useMediaQuery("(max-width:600px)");

  return (
    <div className={styles.container}>
      {match && <Navbar />}
      <Sidebar />
      <div className={styles.rightContainer}>
        <p>Hi!</p>
        {/* <img src={vector} alt="vectorimage" /> */}

        <p>
          <ReactTyped
            strings={[
              "I'm Shrutik",
              " I'm a Web Developer",
              "I code with passion",
              "I'm a frontend enthusiast",
            ]}
            typeSpeed={40}
            backSpeed={30}
            backDelay={1000}
            smartBackspace
            loop
          />
        </p>
        <p>
          Step into the captivating realm of stunning interfaces! Get ready to
          be immersed in extraordinary user experiences crafted with meticulous
          attention to detail and fueled by expertise in HTML, CSS, and
          React.js. With an unwavering commitment to seamless functionality and
          captivating design, I bring your digital visions to life. Join me on
          this journey as we redefine the boundaries of web experiences and
          create moments that leave a lasting impact.{" "}
        </p>
        <div className={styles.buttons}>
          <Link to="/contact">
            {" "}
            <button>HIRE ME</button>
          </Link>
          <button>
            <a href={resume} download="resume">
              DOWNLOAD CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
