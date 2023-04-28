import React from "react";
import "./Styles/About.css";
import profileImage from "../Media/download-removebg-preview (1).jpg";
import DownloadResume from "./ResumeLink";

function About() {
  
  return (
    <div id="about" className="about section">
      <div id="welcome">
        <h1> WELCOME! </h1> <h1 id="user-detail-name"> Hi, I 'm Nishant</h1>
        <p> A Full Stack Web Developer and An Enthusiast Learner. </p>
      </div>

      <div id="profile">
        <div id="profile-Image">
          <img src={profileImage} alt="" className="home-img" />
        </div>
        <div id="About">
          <h2> About</h2>
          <div id="about-details">
            <p id="user-detail-intro">
              I am a full - stack web developer and enthusiast learner capable
              of writing efficient and clean codes and debugging existing ones
              to meet business - centric requirements and give users a smooth
              experience.The skillset that I bring to the table includes but is
              not limited to Java, JavaScript, React.js, Node.js, MongoDB, HTML,
              CSS, etc. <br /> <br />I have just started my journey in software
              and web development domain but my previous experience gives me an
              edge to understand business processes and requirements which
              enables me to bring project requirements to reality. My diverse
              experience includes Operations Management, Project Management,
              Quality Management, Business Risk Analysis, Process
              Standardization, Process Design and Improvement, Business Finance,
              and Legal Documentation.
            </p>
          </div>
          <div id="contact-details">
            <div>
              <p>
                <span style={{ fontWeight: "bold" }}>Email:</span>
                &nbsp;prajapati.nishant@outlook.com
              </p>
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Nationality:
                </span>
                &nbsp;Indian
              </p>
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Languages:
                </span>
                &nbsp;English, Hindi
              </p>
            </div>
            {/* <Button onClick={DownloadResume} className="button-5" download id="resume-button-2">
              Resume
            </Button> */}
            <button onClick={DownloadResume} id="resume-button-2">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
