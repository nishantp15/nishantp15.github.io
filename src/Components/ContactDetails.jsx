import React from "react";
import "./Styles/ContactDetails.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function ContactDetails() {
  function redirect(url) {
    window.open(url, "_blank");
  }
  return (
    <div id="contact">
      <h1> Connect</h1>
      <div className="ContactDetails-SubSection">
        <div className="Individual-Contact-Details">
          <div>
            <MdOutlineMarkEmailRead className="contactIcon EmailIcon" />
            <h4>Email</h4>
          </div>
          <p>prajapati.nishant@outlook.com</p>
          <div
          id="contact-email"
            className="writemeEmail"
            onClick={() => {
              redirect("mailto:prajapati.nishant@outlook.com");
            }}
          >
            <p>Write to me</p>
            <TbSend className="sendIcon" />
          </div>
        </div>
        <div className="Individual-Contact-Details">
          <div>
            <BsLinkedin className="contactIcon LinkedInIcon" />
            <h4>LinkedIn</h4>
          </div>
          <p>/nishant-prajapati</p>
          <div
            className="connectLinkedin" id="contact-linkedin"
            onClick={() => {
              redirect("https://www.linkedin.com/in/nishant-prajapati/");
            }}
          >
            <p>Connect</p>
            <TbSend className="sendIcon" />
          </div>
        </div>
        <div className="Individual-Contact-Details">
          <div>
            <BsGithub className="contactIcon" />
            <h4>GitHub</h4>
          </div>
          <p>/nishantp15</p>
          <div
            className="visitGithub"
            id="contact-github"
            onClick={() => {
              redirect("https://github.com/nishantp15");
            }}
          >
            <p>Visit</p>
            <TbSend className="sendIcon" />{" "}
          </div>
        </div>
        <div className="Individual-Contact-Details">
          <div>
            <img
              className="contactIcon ContactInstagram"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              alt=""
            />
            <h4>Instagram</h4>
          </div>
          <p>/blank.nishant</p>
          <div
            id="followInstagram"
            onClick={() => {
              redirect("https://www.instagram.com/blank.nishant/");
            }}
          >
            <p>Follow</p>
            <TbSend className="sendIcon" />{" "}
          </div>
        </div>
        <div id="contact-phone">7088068960</div>
      </div>
    </div>
  );
}

export default ContactDetails;
