import React, { useRef } from "react";
import ScrollIntoView from "react-scroll-into-view";
import "./Styles/Nav.css";
import { CgMenuGridR } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { IoConstruct } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { MdOutlineMoreTime } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
// import resume from "../Media/Nishant_Prajapati_Resume_Fullstack_Web_Dev.pdf";
import DownloadResume from "./ResumeLink";
function Navbar() {
  let x = useRef();
  let [isActive, setISActive] = useState(true);
  let [date, setDate] = useState(new Date());
  let [dateDisplay, setDateDisplay] = useState("");
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    let dateArr = new Date().toDateString().split(" ");
    let dateString = `${dateArr[0]}, ${dateArr[1]} - ${dateArr[2]}, ${dateArr[3]}`;
    setDateDisplay(dateString);
    console.log(5);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  function ActiveClass() {
    if (isActive) {
      setISActive(false);
    } else {
      setISActive(true);
    }
  }

  // function DownloadResume(e) {
  //   e.preventDefault();
  //   const newPageUrl = `https://drive.google.com/file/d/1jTLnglKOPH4NuEa6TY7IrSiqkf8tpkxa/view?usp=share_link`
  //   window.open(newPageUrl, '_blank')

  //   const anchor = document.createElement("a");
  //   anchor.href = resume;
  //   anchor.id = "resume-link-1"
  //   anchor.setAttribute(
  //     "download",
  //     "Resume_Nishant_Prajapati_FullStack_developer"
  //   );
  //   document.body.appendChild(anchor);
  //   anchor.click();
  //   // anchor.remove();
    
  // }

  // function DateDisplayFun(){
  //   let dateArr = date.toDateString().split(" ")
  //   let dateString = `${dateArr[0]}, ${dateArr[1]} - ${dateArr[2]}, ${dateArr[3]}`
  //   setDateDisplay(dateString)
  //   console.log(5);
  // }

  // DateDisplayFun();

  function Scroll(id) {
    const ele = document.getElementById(id);
    ele.scrollIntoView({ behavior: "smooth" });
  }

  function css(id) {
    // e.target.stye.color="rgb(76, 232, 240)"
    // console.log(isActive);
  }
  return (
    <>
      <div id="nav-menu">
        <div id="menu-left">
          <p>{dateDisplay}</p>
          <p>{date.toLocaleTimeString()}</p>
        </div>
        <div id="menu-right" ref={x}>
          <ScrollIntoView selector="#home" className="nav-link home">
            <p onClick={() => css(0)}> Home </p>
          </ScrollIntoView>
          <ScrollIntoView selector="#about" className="nav-link about">
            <p onClick={() => css(0)}> About </p>
          </ScrollIntoView>
          <ScrollIntoView selector="#skills" className="nav-link skills">
            <p id="1" onClick={() => css(1)}>
              Skills
            </p>
          </ScrollIntoView>
          <ScrollIntoView selector="#projects" className="nav-link projects">
            <p onClick={() => css(2)}> Projects </p>
          </ScrollIntoView>
          <ScrollIntoView selector="#contact" className="nav-link contact">
            <p onClick={() => css(3)}> Contact Details </p>
          </ScrollIntoView>
          <ScrollIntoView selector="#resume-button-1" className="nav-link resume">
          <button onClick={DownloadResume} id="resume-button-1">
          Download Resume
        </button>
        </ScrollIntoView>
        </div>
        
      </div>

      <div id="Nav-Mobile">
        <div
          className={
            isActive === true
              ? "footer-menu-mobile inactive-menu"
              : "footer-menu-mobile"
          }
        >
          <div
            className="footer-menu-sections"
            onClick={() => {
              Scroll("Header");
            }}
          >
            <BiUserCircle className="footer-menu-icon" />
            <p className="footer-menu-sections-detail">About Me</p>
          </div>
          <div
            className="footer-menu-sections"
            onClick={() => {
              Scroll("Skills-Container");
            }}
          >
            <IoConstruct className="footer-menu-icon" />
            <p className="footer-menu-sections-detail">Skills</p>
          </div>
          <div
            className="footer-menu-sections"
            onClick={() => {
              Scroll("Projects-Container");
            }}
          >
            <MdOutlineWorkOutline className="footer-menu-icon" />
            <p className="footer-menu-sections-detail">Projects</p>
          </div>
          <div
            className="footer-menu-sections"
            onClick={() => {
              Scroll("ContactDetails");
            }}
          >
            <GrContact className="footer-menu-icon" />
            <p className="footer-menu-sections-detail">Contact</p>
          </div>
          <div
            className="footer-menu-sections"
            onClick={() => {
              Scroll("#");
            }}
          >
            <BsPencilSquare className="footer-menu-icon" />
            <p className="footer-menu-sections-detail">Blog</p>
          </div>
          <div
            className="footer-menu-sections"
            onClick={() => {
              Scroll("#");
            }}
          >
            <MdOutlineMoreTime className="footer-menu-icon" />
            <p className="footer-menu-sections-detail">More</p>
          </div>
        </div>
        <div className="menu-bar">
          <div id="menubar-left">
            <p>{dateDisplay}</p>
            <p>{date.toLocaleTimeString()}</p>
          </div>
          <div id="menubar-right">
            <CgMenuGridR
              onClick={ActiveClass}
              className={isActive === true ? "menu-icon-grid" : "inactive"}
            />
            <RxCross1
              onClick={ActiveClass}
              className={isActive === true ? "inactive" : "menu-icon-cross"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
