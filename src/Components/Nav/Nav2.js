import React,{useState} from 'react'
import './Nav2.css'
import bg from './bg.jpg'
import logo from './logo.png'
import { BiBed } from 'react-icons/bi';
import {BsCalendar2Date} from 'react-icons/bs'
import {GoPerson} from 'react-icons/go'
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Nav2 = () => {
    
    const [isScrolled, setisScrolled] = useState(false);
    window.onscroll = () => {
        setisScrolled(window.pageYOffset < 50 ? false : true);
        return () => (window.onscroll = null);
      };
      
  return (
      <>
    <div>
    <img className='img_bg' src={bg} alt=''/>
    
    <nav className={!isScrolled?'nav1':'nav2'}>
    <div className={!isScrolled?'para':'para1'}>
        <div className={!isScrolled?'logo_tab':'logo_all'} >
            <img className={!isScrolled?'logo':'logo1'}  src={logo} alt=''/>
            <div className={!isScrolled?'logo_text':'logo_text1'} >
                tmn's Roommate
            </div>
        </div>
    </div>
    
    <div className={!isScrolled?'para_2':'para1_2'} >
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
    </nav> 
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
        
        <Link className="btn search_btn btn-dark" to="/search">
        Search
                </Link>
        </div>
        </div>
        
    </section>
    </div>
    
    </>
  )
}

export default Nav2