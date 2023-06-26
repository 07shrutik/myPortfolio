import React from "react";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Skills.module.css";
import RateSkill from "./RateSkill";
const Skills = () => {
  let myskills = [
    { skillName: "React-js", rating: "73%", color: "#2c98f0" },
    { skillName: "JavaScript", rating: "74%", color: "#ec5453" },
    { skillName: "HTML", rating: "82%", color: "#f9bf3f" },
    { skillName: "CSS", rating: "85%", color: "#a84cb8" },
    { skillName: "Redux", rating: "78%", color: "#2fa499" },
    { skillName: "Recoil", rating: "80%", color: "#da7bb2" },
  ];
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightContainer}>
        <p>MY SPECIALITY</p>
        <p>My Skills.</p>
        <div className={styles.skill}>
          {myskills.map((skill) => (
            <>
              <RateSkill
                name={skill.skillName}
                rating={skill.rating}
                bgcolor={skill.color}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
