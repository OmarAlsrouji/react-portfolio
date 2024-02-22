import React,{useState} from 'react'
import './navbar.css'
import logo from '../../omar-logo-zip-file/png/logo-no-background.png';
import {Link} from 'react-scroll';
import menu from '../../omar-logo-zip-file/png/menu1.png';


const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='DesktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className='DesktopMenuListItem'>About</Link>
          {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='DesktopMenuListItem'>Portfolio</Link> */}
          <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='DesktopMenuListItem'>Contact</Link>
        </div>
        <button onClick={()=>{
          document.getElementById('contactt').scrollIntoView({behavior:'smooth'});
        }} className='desktopMenuBtn'>
        <i class="fa-solid fa-envelope"></i>Contact Me
        </button>
        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
          {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link> */}
          {/* <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Clients</Link> */}
          <Link activeClass='active' to='contactt' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>          
    </nav>
  )
}

export default Navbar
