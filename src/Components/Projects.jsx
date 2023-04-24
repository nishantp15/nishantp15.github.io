import React from "react";
import "./Styles/Projects.css";
import JioMart from "../Media/JioMart.png";
import NetMeds from "../Media/NetMeds.png";
import thehorse from "../Media/thehorse.png";
import Faballey from '../Media/Faballey.png'
function Projects() {
  function redirect(url) {
    window.open(url, "_blank");
  }
  return (
    <div id="Projects-Container">
      <h1> Projects </h1>
      <div id="Project-Disp">
        {/* 1 */}
        <div className="Indiv-Project-Box">
          <h3> Faballey - Fullstack clone </h3>
          <div className="ProjectImage">
            <img src={Faballey} alt="" />
          </div>
          <h4> Description: </h4>
          <p>
            FabAlley.com is an online fashion store offering
            design-differentiated and fashionable clothing and accessories for
            woman on-the-go.
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Tech Stack Used:- 
            </span>
            <b> Frontend: </b> React.js, Redux, Chakra UI, HTML, CSS <br />
            <b>Backend: </b> Express.js, Node.js, MongoDB
          </p>
          <div id="linkstoproject">
            <div
              className="IconDiv"
              onClick={() => {
                redirect(
                  "https://github.com/nishantp15/FullStack-FaballeyClone"
                );
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </div>
              <p>Github</p>
            </div>
            <div
              className="IconDiv"
              onClick={() => {
                redirect("https://faballey-85796.web.app/");
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/868/868090.png"
                  alt=""
                />
              </div>
              <p> Live Demo</p>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div className="Indiv-Project-Box">
          <h3> The Horse Clone </h3>
          <div className="ProjectImage">
            <img src={thehorse} alt="" />
          </div>
          <h4> Description: </h4>
          <p>
            The Horse is an E - commerce platform based in Australia that offers
            one of its kind fashion & beauty products.
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Tech Stack Used: </span> React.js, Redux, Chakra UI, HTML, CSS, JSON Server <br /> <br />
          </p>
          <div id="linkstoproject">
            <div
              className="IconDiv"
              onClick={() => {
                redirect(
                  "https://github.com/mayankCreation0/TheHorse.com.auClone"
                );
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </div>
              <p>Github</p>
            </div>
            <div
              className="IconDiv"
              onClick={() => {
                redirect("https://thehorse.netlify.app/");
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/868/868090.png"
                  alt=""
                />
              </div>
              <p> Live Demo</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="Indiv-Project-Box">
          <h3> NetMeds Clone </h3>
          <div className="ProjectImage">
            <img src={NetMeds} alt="" />
          </div>
          <h4> Description: </h4>
          <p>
            NetMeds is an Indian Startup, that sells pharmaceutical products and
            provides online medical consultation across India.
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
              }}
            >Tech Stack Used: </span> JavaScript, HTML, CSS, JSON Server <br /> <br />
          </p>
          <div id="linkstoproject">
            <div
              className="IconDiv"
              onClick={() => {
                redirect("https://github.com/Meshabaz/Netmeds-clone");
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </div>
              <p> Github </p>
            </div>
            <div
              className="IconDiv"
              onClick={() => {
                redirect("https://beautiful-donut-393183.netlify.app/");
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/868/868090.png"
                  alt=""
                />
              </div>
              <p> Live Demo</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="Indiv-Project-Box">
          <h3> JioMart Clone </h3>
          <div className="ProjectImage">
            <img src={JioMart} alt="" />
          </div>
          <h4> Description: </h4>
          <p>
            JioMart is an Indian e - commerce company, headquartered in
            Maharashtra, India.It sells Grocery, Electronics, Apparels, Beauty,
            Personal Care & other products through its online platform.
          </p>
          <p>
            <span style={{fontWeight: "bold" }} >
              Tech Stack Used: </span> JavaScript, HTML, CSS
          </p>
          <div id="linkstoproject">
            <div
              className="IconDiv"
              onClick={() => {
                redirect("https://github.com/anuj-midha247/JIO_MART_CLONE");
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
              </div>
              <p> Github </p>
            </div>
            <div
              className="IconDiv"
              onClick={() => {
                redirect("https://verdant-bavarois-8d0744.netlify.app/");
              }}
            >
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/868/868090.png"
                  alt=""
                />
              </div>
              <p> Live Demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
