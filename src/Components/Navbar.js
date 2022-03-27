import React from "react";
import "./Style.css";
import logo from "./logo.png";
export default function NavBar({isModalOpen,setIsModalOpen}) {
  return (
    <nav>
      <ul>
        <li className="logo">
          <img src={logo} alt="" />
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Rooms</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Book Now</a>
        </li>

        <li id="Login" onClick={()=>{setIsModalOpen((prev)=>!prev)}}>
          <button href="">Login</button>
        </li>
        <li id="sign" onClick={()=>{setIsModalOpen((prev)=>!prev)}}>
          <button href="">SignUp</button>
        </li>
        {/* <li id="sign">
          <a href="">SignUp</a>
        </li> */}
      </ul>
    </nav>
  );
}
