import React from "react";
import styles from "./About.module.css";
import Sidebar from "../sidebar/Sidebar";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import pic1 from "../../assets/pic1.jpg";
import Navbar from "../Navbar";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { useMediaQuery } from "@mui/material";
const About = () => {
  const match = useMediaQuery("(max-width:600px)");
  return (
    <div className={styles.container}>
      {match && <Navbar />}
      <Sidebar />
      <div className={styles.rightContainer}>
        <div className={styles.heading}>
          <p>About me.</p>

          {match && <img src={pic1} alt="Portfolio Image" />}
        </div>
        <p>
          Hi, I'm Shrutik Mahajan, a 23 year old passionate frontend developer
          from Burhanpur, Madhya Pradesh. I recently completed my BTech in
          computer science engineering, which has equipped me with a strong
          foundation in technical knowledge. With expertise in React.js,
          JavaScript, HTML, CSS, Redux and Recoil I specialize in creating
          captivating user experiences.
        </p>
        <div className={styles.socialIcons}>
          <FacebookIcon
            className={styles.icons}
            sx={{
              color: "#3b5998",
              fontSize: "3rem",
              transition: "all .5s ease-in-out",
              ...(match && {
                fontSize: "2rem",
              }),
            }}
          />
          <NavLink
            exact
            to="mailto:shrutikmahajan1414@gmail.com"
            target="_blank"
          >
            <MailOutlineIcon
              className={styles.icons}
              sx={{
                color: "#d14836",
                // background: "white",
                fontSize: "3rem",
                transition: "all 0.5s ease-in-out",
                ...(match && {
                  fontSize: "2rem",
                }),
                // marginLeft: "17px",
              }}
            />
          </NavLink>
          <NavLink
            exact
            to="https://www.linkedin.com/in/shrutik-mahajan-237632218"
            target="_blank"
          >
            <LinkedInIcon
              className={styles.icons}
              sx={{
                color: "#287bbc",
                fontSize: "3rem",
                // marginLeft: "17px",
                transition: "all .5s ease-in-out",
                ...(match && {
                  fontSize: "2rem",
                }),
              }}
            />
          </NavLink>
          <NavLink exact to="https://github.com/07shrutik" target="_blank">
            <GitHubIcon
              className={styles.icons}
              sx={{
                color: "black",
                fontSize: "3rem",
                // marginLeft: "17px",
                transition: "all .5s ease-in-out",
                ...(match && {
                  fontSize: "2rem",
                }),
              }}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
