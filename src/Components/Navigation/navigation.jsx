import React from 'react'
// import {FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../Styles/NavStyle.css";
// import Logo from '../Images/logo.png'
// import Name from '../Images/Name.png'
// import Images from "../Images/image";




function Navigation() {

const navRef = useRef();

// const showNavbar = () => {

  // navRef.current.classList.toggle("responsive_nav");

  return (

    <header>
          
        <img src={require('../Images/Name.png')} className="navName"  alt="Club Name"/>
        <img src={require('../Images/logo.png')} className="navImg"   alt="Club Logo"/>
              
      <nav  ref={navRef}>
        
        <a href='/#Home'>Home</a>
        <a href='/#About'>About</a>
        <a href='/#News'>News</a>
        <a href='/#Ladder'>Ladder</a>
        <a href='/#Sessions'>Session</a>
        <a href='/#Photos'>Photos</a>
        <a href='/#Forms'>Form</a>
        {/* <button className = "nav-btn nav-close-btn" onClick={showNavbar}>  */}
        {/* <FaTimes/> */}
  {/* </button> */}
      </nav>
      {/* <button className = "nav-btn" onClick={showNavbar}> */}
        {/* <FaBars/> */}
      {/* </button>  */}
    </header>
  );

  }
// }
export default Navigation
