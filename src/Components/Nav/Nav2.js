import React,{useState} from 'react'
import './Nav2.css'
import bg from './bg.jpg'
import logo from './logo.png'
import { BiBed } from 'react-icons/bi';
import {BsCalendar2Date} from 'react-icons/bs'
import {GoPerson} from 'react-icons/go'
import Typewriter from "typewriter-effect";

const Nav2 = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset < 50 ? false : true);
        return () => (window.onscroll = null);
      };
      
  return (
      <>
    <div>
    <img className='img_bg' src={bg} alt=''/>
    
    {!isScrolled?<nav className='nav1'>
    <div className='para'>
        <div className='logo_tab'>
            <img  className='logo' src={logo} alt=''/>
            <div className='logo_text'>
                tmn's Roommate
            </div>
        </div>
    </div>
    <div className='head_text'>
    <h1 >Welcome to happiness.</h1>
    <Typewriter className='typing'
         onInit={(typewriter)=> {
            typewriter.typeString("Come, stay and enjoy your day.")
            .pauseFor(2000)
            .deleteAll()
            .typeString("We give you a legendary welcome, every time you come back.")
            .start()
         }}
       />
    <button type="button" className="btn login_btn btn-primary">Login / Register</button>
    </div>
    <div className='para_2'>
    <ul className="nav_bar">    
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
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Book Now</a>
        </li>  
    </ul>
    </div>
    </nav> :<nav className='nav2'>
    <div className='para1'>
        
    <div className='logo_all'>
            <img  className='logo1' src={logo} alt='Logo'/>
            <div className='logo_text1'>
                tmn's Roommate
            </div>
        </div>
        </div>
    <div className='para1_2'>
    <ul className="nav_bar">    
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
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Book Now</a>
        </li>  
    </ul>
    </div>
    </nav>}
    <section className='container'>
        <div className='search' >
        
        <label>
        <BiBed style={{marginLeft:"1rem"}}/>
            <input type="text" placeholder="Where are you going?"/>
            
        </label>
        <label>
        <BsCalendar2Date />
            <input type="text" placeholder="Chich-in - Check-out"/>
        </label>
        <label>
        <GoPerson />
            <input type="text" placeholder="2 adults : 1 child"/>
        </label>
        <div>
        <div className='line'/>
        <button type="button" className="btn search_btn btn-dark">Search</button>
        </div>
        </div>
        
    </section>
    </div>
    </>
  )
}

export default Nav2