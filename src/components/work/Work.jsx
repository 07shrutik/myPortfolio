import React from "react";
import styles from "./work.module.css";
import Sidebar from "../sidebar/Sidebar";

const Work = () => {
  const work = [
    {
      workname: "Teaching Assistant at FunctionUp",
      workduration: "Apr 2023 - Present",
      desc: "As a Teaching Assistant for FunctionUp Frontend Development Cohort, I provided invaluable support and guidance to students, ensuring their successful understanding and application of frontend development principles in an engaging learning environment.",
    },
    {
      workname: "Frontend Developer Trainee at Function Up",
      workduration: "Jan 2023 - Present",
      desc: "As a Frontend Developer Trainee at Function Up, I honed my skills in frontend development through hands-on projects and mentorship. I collaborated with the team to create responsive and user-friendly web interfaces, gaining practical experience in HTML, CSS, JavaScript, and modern frontend frameworks like React.js.",
    },
    {
      workname: "Web Development Intern at RedGates IT Solutions",
      workduration: "June 2022 - Sept 2022",
      desc: "As a Web Development Intern at ReadGates, I actively contributed to web application and website design, development, and maintenance. I collaborated with the team to implement new features, troubleshoot issues, and enhance user experience.",
    },
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightContainer}>
        <p>EXPERIENCE</p>
        <p>WORK EXPERIENCE</p>
        {work.map((item) => (
          <>
            <div className={styles.work}>
              <h2>
                {item.workname} <span>{item.workduration}</span>
              </h2>
              <p>{item.desc}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Work;
