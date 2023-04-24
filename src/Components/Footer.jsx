import React from "react";
import "./Styles/Footer.css";
import { RiCopyrightLine } from "react-icons/ri";
function Footer() {
  return <div id="Footer">
    <div><h4>Thank you for visiting !</h4></div>
    <div><RiCopyrightLine/> &nbsp; <p> 2023 All rights reserved.</p></div>
    <div>Designed by Nishant Prajapati</div>
    <div>Last updated: 11-Feb, 2023</div>
    <p id="github-streak-stats" ><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=nishantp15&show_icons=true&locale=en&layout=compact" alt="nishantp15" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=nishantp15&show_icons=true&locale=en" alt="nishantp15" /></p>

  </div>;
}

export default Footer;
