import React from 'react'
import resume from '../Media/Nishant_Prajapati_Resume_Fullstack_Web_Dev.pdf'
const DummyHome = () => {
    function DownloadResume(){
  
        const anchor = document.createElement('a');
        anchor.href = resume;
        anchor.setAttribute('download','Resume_Nishant_Prajapati_FullStack_developer');
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
       
      
      }
  return (
    <div id="home"><button onClick={DownloadResume} id="resume-button-2">Download Resume</button></div>
  )
}

export default DummyHome