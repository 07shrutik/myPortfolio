import React from "react";
import styles from "./Sidebar.module.css";
import pic1 from "../../assets/pic1.jpg";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={styles.leftContainer}>
      <img src={pic1} alt="Portfolio Image" />
      <h1>Shrutik Mahajan</h1>
      <p>Frontend Web Developer Trainee </p>
      <ul>
        <NavLink
          exact
          to="/"
          activeStyle={{ color: "red" }}
          className={styles.link}
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          exact
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.current : styles.link
          }
        >
          <li>ABOUT</li>
        </NavLink>
        <NavLink
          exact
          to="/project"
          className={({ isActive }) =>
            isActive ? styles.current : styles.link
          }
        >
          <li>PROJECTS</li>
        </NavLink>
        <NavLink
          exact
          to="/skills"
          className={({ isActive }) =>
            isActive ? styles.current : styles.link
          }
        >
          <li>SKILLS</li>
        </NavLink>
        <NavLink
          exact
          to="/work"
          className={({ isActive }) =>
            isActive ? styles.current : styles.link
          }
        >
          <li>EXPERIENCE</li>
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.current : styles.link
          }
        >
          <li>CONTACT</li>
        </NavLink>
      </ul>
      <p>
        Made with ❤️ by <span>Shrutik</span>
      </p>
    </div>
  );
};

export default Sidebar;
