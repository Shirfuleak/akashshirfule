import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/ak.jpg';
import menu from '../../assets/menu.webp';
import contactimg from '../../assets/contactme.jpg'
import  { Link } from "react-scroll";
const Navbar = () => {
  const [showmenu,setShowmenu]=useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>

        <Link activeClass='active' to='intro'  spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio </Link>
        <Link activeClass='active' to='clients'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
        {/* <Link activeClass='active' to='contact'  spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link> */}
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
        <img src={contactimg} alt='' className='desktopMenuImg'/>Contact Me
        </button>

        <img src={menu} alt='logo' className='mobMenu' onClick={()=> setShowmenu(!showmenu)} />
        <div className='navMenu' style={{display:showmenu?'flex':'none'}}>
        <Link activeClass='active' to='intro'  spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Home</Link>
        <Link activeClass='active' to='skills'  spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Clients</Link>
        <Link activeClass='active' to='works'  spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>About </Link>
        <Link activeClass='active' to='clients'  spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact'  spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowmenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar