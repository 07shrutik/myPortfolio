import React from "react";
import styles from "./Project.module.css";
import Sidebar from "../sidebar/Sidebar";

import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "../Navbar";
const Project = () => {
  const match = useMediaQuery("(max-width:600px)");

  return (
    <div className={styles.container}>
      {match && <Navbar />}
      <Sidebar />
      <div className={styles.rightContainer}>
        <h2>My Projects</h2>
        <div className={styles.project}>
          <img
            src="https://img.freepik.com/free-icon/instagram_318-576268.jpg?size=626&ext=jpg&uid=R107775876&ga=GA1.2.1606550622.1665819561&semt=sph"
            alt="Project 2"
          />
          <h3>Instagram-Clone</h3>
          <p>
            The Insta Clone project is a web application designed to replicate
            the core features and functionalities of the popular social media
            platform Instagram. It provides users with the ability to sign up,
            log in, and create their profiles. Users can upload photos, apply
            filters, and share them with their followers. The project also
            includes features such as liking and commenting on posts, following
            other users, and exploring a feed of posts from followed accounts.{" "}
          </p>
          <div className={styles.links}>
            <a
              href="https://instagram-clone-8ta8.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AppLink
            </a>
            <a
              href="https://github.com/07shrutik/instaClone.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="https://img.freepik.com/free-vector/tweetstorm-concept-illustration_114360-652.jpg?size=626&ext=jpg&uid=R107775876&ga=GA1.2.1606550622.1665819561&semt=sph"
            alt="Project 2"
          />
          <h3>Twitter-Clone</h3>
          <p>
            The Twitter Clone project is a web application that replicates the
            main features of the popular social media platform Twitter. It
            allows users to create accounts, post tweets, follow other users,
            and engage in conversations through likes. The project aims to
            provide a similar user experience and interface as Twitter.
          </p>
          <div className={styles.links}>
            <a
              href="https://twiiter-clone00.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AppLink
            </a>
            <a
              href="https://github.com/07shrutik/twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="https://img.freepik.com/free-vector/task-management-abstract-concept-illustration_335657-2127.jpg?size=626&ext=jpg&uid=R107775876&ga=GA1.2.1606550622.1665819561&semt=ais"
            alt="Project 2"
          />
          <h3>Kanban Trello-Clone</h3>
          <p>
            The Kanban Trello Clone project is a web-based task management
            application inspired by Trello's Kanban board system. It enables
            users to create lists and cards to organize and track their tasks
            and projects. Users can easily move cards across different lists and
            collaborate with team members by assigning tasks and adding
            comments. The project focuses on providing a flexible and intuitive
            task management experience.
          </p>
          <div className={styles.links}>
            <a
              href="https://kanbanclone-nsbk.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              AppLink
            </a>
            <a
              href="https://github.com/07shrutik/kanbanTrello.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="https://img.freepik.com/free-icon/correct_318-924721.jpg?size=626&ext=jpg&uid=R107775876&ga=GA1.2.1606550622.1665819561&semt=sph"
            alt="Project 2"
          />
          <h3>GoogleDocs-Clone</h3>
          <p>
            The Google Docs Clone project is a collaborative document editing
            tool similar to Google Docs. Users can create, edit, and format
            text, add images , print and download document. The project aims to
            provide a feature-rich and user-friendly document editing
            experience.
          </p>
          <div className={styles.links}>
            <a
              href="https://googledoc.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AppLink
            </a>
            <a
              href="https://github.com/07shrutik/googleDoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src="https://img.freepik.com/free-vector/portfolio-management-previous-projects-samples-works-catalog-skills-presentation-successful-graphic-designer-web-developer-cartoon-character_335657-4.jpg?size=626&ext=jpg&uid=R107775876&ga=GA1.2.1606550622.1665819561&semt=ais"
            alt="Project 2"
          />
          <h3>My Portfolio Website</h3>
          <p>
            My portfolio website showcases my skills, projects, and
            work-experience as a web developer. It serves as a digital
            representation of my professional profile and provides an overview
            of my expertise in various technologies and frameworks. The website
            includes sections such as an about me, projects, skills, and contact
            information, allowing visitors to learn more about my work and get
            in touch with me. The design and layout of the website are carefully
            crafted to present my portfolio in an attractive and user-friendly
            manner.
          </p>
          <div className={styles.links}>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              AppLink
            </a>
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
