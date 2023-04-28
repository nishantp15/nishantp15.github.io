import resume from '../Media/Nishant_Prajapati_Resume_Fullstack_Web_Dev.pdf'
function DownloadResume(e) {
    e.preventDefault();
    const downloadUrl = `https://drive.google.com/uc?export=download&id=1jTLnglKOPH4NuEa6TY7IrSiqkf8tpkxa`
    const newPageUrl = `https://drive.google.com/file/d/1jTLnglKOPH4NuEa6TY7IrSiqkf8tpkxa/view?usp=share_link`
    window.location.href = downloadUrl
    window.open(newPageUrl, '_blank')

    // const anchor = document.createElement("a");
    // anchor.href = resume;
    // anchor.setAttribute(
    //   "download",
    //   "Resume_Nishant_Prajapati_FullStack_developer"
    // );
    // document.body.appendChild(anchor);
    // anchor.click();
    // anchor.remove();
    
  }

  export default DownloadResume;