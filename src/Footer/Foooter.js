import React from 'react'
import Logo from"../assets/logo.svg";
import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
function Foooter() {
  return (
    <footer className='footer'>
         <div className='w-36 h-36 '>
            <img className='w-full h-full object-contain' src={Logo} alt="logo"/>
         </div>
         <div className='text-center my-3 pl-3 md:pl-0 '>
            <p>Lorem ipsum dolor,sit amet consectetur adipisicing elit.</p>
            <p>incidunt concequuntur amet culpa cum itaque neque</p>
         </div>
         <div className='flex flex-wrap items-center justify-center gap-5 md:gap-8 p-3 md:p-0'>
            <Link to="/" className='nav-links'>About</Link>
            <Link to="/" className='nav-links'>Careers</Link>
            <Link to="/" className='nav-links'>History</Link>
            <Link to="/" className='nav-links'>Services</Link>
            <Link to="/" className='nav-links'>Projects</Link>
            <Link to="/" className='nav-links'>Blog</Link>
         </div>
         <div className='flex items-center gap-8 flex-wrap'>
          <div className='nav-links cursor-pointer w-6 h-6'><BsFacebook className='w-full h-full'/></div>
          <div className='nav-links cursor-pointer w-6 h-6'><FaInstagram className='w-full h-full'/></div>
          <div className='nav-links cursor-pointer w-6 h-6'><BsTwitterX className='w-full h-full'/></div>
          <div className='nav-links cursor-pointer w-6 h-6'><FaGithub className='w-full h-full'/></div>
          <div className='nav-links cursor-pointer w-6 h-6'><FaDribbble className='w-full h-full'/></div>       
         </div>

    </footer>
  )
}

export default Foooter