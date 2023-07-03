import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import Sidebar from "../sidebar/Sidebar";
// import Sidebar from "../sidebar/Sidebar";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";
import EmailJSResponseStatus from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "../Navbar";
// import { useMediaQuery } from "@mui/material";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const match = useMediaQuery("(max-width:600px)");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    EmailJSResponseStatus.sendForm(
      "service_09q97fv",
      "template_081sdli",
      form.current,
      "NTj0GfCot4mg-XtLh"
    ).then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        setIsLoading(false);
        toast.success("Message Successfully Sent!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className={styles.container}>
      {match && <Navbar />}
      <Sidebar />
      <div className={styles.rightContainer}>
        <p>GET IN TOUCH</p>
        <p>CONTACT ME</p>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="to_name" placeholder="Enter Name" />
          <label>Email</label>
          <input
            type="email"
            name="from_email"
            placeholder="example@gmail.com"
          />
          <label>Message</label>
          <textarea name="message" placeholder="Enter message..." />
          <input
            type="submit"
            value="Send"
            style={{
              backgroundColor: "#2c98f0",
              color: "white",
              marginTop: "20px",
              cursor: "pointer",
            }}
          />
        </form>
        {isLoading && (
          <div className={styles.loader}>
            <div className={styles.loaderCircle}></div>
          </div>
        )}
        {!isLoading && (
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
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
