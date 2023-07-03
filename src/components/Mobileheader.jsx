import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Mobileheader.module.css";
const Mobileheader = () => {
  return (
    <div className={styles.container}>
      <ul>
        <NavLink exact to="/" className={styles.link}>
          <li>HOME</li>
        </NavLink>
        <NavLink exact to="/about" className={styles.current}>
          <li>ABOUT</li>
        </NavLink>
        <NavLink exact to="/project" className={styles.current}>
          <li>PROJECTS</li>
        </NavLink>
        <NavLink exact to="/skills" className={styles.current}>
          <li>SKILLS</li>
        </NavLink>
        <NavLink exact to="/work" className={styles.current}>
          <li>EXPERIENCE</li>
        </NavLink>
        <NavLink exact to="/contact" className={styles.current}>
          <li>CONTACT</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Mobileheader;
