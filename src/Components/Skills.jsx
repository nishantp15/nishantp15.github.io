import React from "react";
import "./Styles/Skills.css";

function Skills() {
  const languages = [
    {
      img: "https://icon-library.com/images/java-icon-png/java-icon-png-2.jpg",
      techname: "Java",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
      techname: "JavaScript",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      techname: "Python",
    }
    
  ];
  const frontendFrameworks = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      techname: "React.Js",
    },
    {
      img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      techname: "Redux",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      techname: "HTML",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      techname: "CSS",
    },
    {
      img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png',
      techname: "SASS",
    },
    {
      img: "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67",
      techname: "Chakra UI",
    },
    {
      img:'https://mui.com/static/logo.png',
      techname: "Material UI",
    },
  ];

  const backendFramework = [{
    img: "https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png",
    techname: "MongoDB",
  },
  {
    img: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
    techname: "Node.Js",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    techname: "Express.Js",
  }]

  const deployment = [{
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    techname: "Git",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    techname: "AWS (EC2)",
  }
]

  return (
    <div id="skills">
      <h1> SKILLS </h1>
      <div className="Skills-SubSection">
        <h2>TECHNICAL SKILLS</h2>
      </div>
      <h3>Languages</h3>
      <div className="Skills-Display">
        {languages.map((ele,i) => {
          return (
            <div key={i+1} className="Individual-Skill-Container">
              <div className="Tech-Image">
                <img src={ele.img} alt="Img" />
              </div>
              <div>
                <h4> {ele.techname} </h4>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Frontend Frameworks</h3>
      <div className="Skills-Display">
        {frontendFrameworks.map((ele,i) => {
          return (
            <div key={i+1} className="Individual-Skill-Container">
              <div className="Tech-Image">
                <img src={ele.img} alt="" />
              </div>
              <div>
                <h4> {ele.techname} </h4>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Backend Frameworks</h3>
      <div className="Skills-Display">
        {backendFramework.map((ele,i) => {
          return (
            <div key={i+1} className="Individual-Skill-Container">
              <div className="Tech-Image">
                <img src={ele.img} alt="" />
              </div>
              <div>
                <h4> {ele.techname} </h4>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Deployment</h3>
      <div className="Skills-Display">
        {deployment.map((ele,i) => {
          return (
            <div key={i+1} className="Individual-Skill-Container">
              <div className="Tech-Image">
                <img src={ele.img} alt="" />
              </div>
              <div>
                <h4> {ele.techname} </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
