import React from 'react'
import './intro.css'
import bg from '../../omar-logo-zip-file/png/omar.png'
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Omar.   </span><br/>Frontend Engineer</span>
            <p className='introPara'>I am a skilled web designer with experience in creating<br/> visually appealing and user friendly website</p>
            <div className='btn'>
              <Link activeClass='active' to='contactt' spy={true} smooth={true} offset={-50} duration={500}><i class="fa-solid fa-suitcase"></i>Hire Me</Link>
            </div>
        </div>
        <img src={bg} className='bg'></img>
    </section>
  )
}

export default Intro;
