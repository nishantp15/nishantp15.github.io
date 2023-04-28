import React from "react";
import "./Styles/About.css";
import profileImage from "../Media/download-removebg-preview (1).jpg";
// import resume from '../Media/Nishant_Prajapati_Resume_Fullstack_Web_Dev.pdf'
function About() {
  function DownloadResume(e) {
    window.open('https://drive.google.com/file/d/1jTLnglKOPH4NuEa6TY7IrSiqkf8tpkxa/view?usp=share_link')
    window.location.href = `https://drive.google.com/uc?export=download&id=1jTLnglKOPH4NuEa6TY7IrSiqkf8tpkxa`
    // e.preventDefault();
    // const anchor = document.createElement("a");
    // anchor.href = resume;
    // anchor.id = "resume-link-2"
    // anchor.setAttribute(
    //   "download",
    //   "Resume_Nishant_Prajapati_FullStack_developer"
    // );
    // document.body.appendChild(anchor);
    // anchor.click();
    // // anchor.remove();
    
  }
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
            <p  id="user-detail-intro">
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
                <span style={{fontWeight: "bold",}}>
                  Email:</span>&nbsp;prajapati.nishant@outlook.com
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
            <button onClick={DownloadResume} id="resume-button-2">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
