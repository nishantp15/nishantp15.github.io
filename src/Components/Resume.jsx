import React from "react";
import "./Styles/ResumeComp.css";
import resume from '../Media/Nishant_Prajapati_Resume_Fullstack_Web_Dev.pdf'
const Resume = () => {
    function DownloadResume(){
  
        const anchor = document.createElement('a');
        anchor.href = resume;
        anchor.setAttribute('download','Resume_Nishant_Prajapati_FullStack_developer');
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
       
      
      }
  return (
    <div id="resume" className="Resume1">
      
        <button onClick={DownloadResume} id="resume-link-1">Download Resume</button>
      
    </div>
  );
};

export default Resume;
