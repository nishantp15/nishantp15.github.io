import React from "react";
import "./Styles/SocialButton.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TfiAngleRight } from 'react-icons/tfi';
import { useState } from "react";
const SocialButton = () => {
  function redirect(url) {
    window.open(url, "_blank");
  }

  let [displaySocialButton, setDisplaySocialButtons] = useState(true);

  function HideOrShowButtons(){
    if(displaySocialButton){
      setDisplaySocialButtons(false)
    }else{
      setDisplaySocialButtons(true)
    }
  }

  return (
    <>
    <div className={displaySocialButton ? "SocialButton" : "SocialButton hideButtons"}>
      <div>
        <BsLinkedin
          className="SocialLink-SideButton Social-LinkedIn"
          onClick={() => {
            redirect("https://www.linkedin.com/in/nishant-prajapati/");
          }}
        />
      </div>
      <div>
        <BsGithub
          className="SocialLink-SideButton Social-Github"
          onClick={() => {
            redirect("https://github.com/nishantp15");
          }}
        />
      </div>
      <div>
        <img
          className="SocialLinkInstagram"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
          onClick={() => {
            redirect("https://www.instagram.com/blank.nishant/");
          }}
        />
      </div>
    </div>
    <div className={displaySocialButton ? "showSocialButtons" : "showSocialButtons hideSocialButtons"} onClick={HideOrShowButtons}>
      <TfiAngleRight className={displaySocialButton ? "arrowIcon" : "arrowIconRotate"} />
    </div>
    </>
  );
};

export default SocialButton;
