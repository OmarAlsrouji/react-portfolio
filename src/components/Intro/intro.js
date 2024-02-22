import React from 'react'
import './intro.css'
import bg from '../../omar-logo-zip-file/png/omar.png'
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Omar.   </span><br/>Computer Engineer</span>
            <p className='introPara'>I am a skilled Digital Designer with experience in Research & Development of <br/> Digital Systems and Design and a strong background in Embedded Systems Software</p>
            <div className='btn'>
              <Link activeClass='active' to='contactt' spy={true} smooth={true} offset={-50} duration={500}><i class="fa-solid fa-suitcase"></i>Click for Contact</Link>
            </div>
        </div>
        <img src={bg} className='bg'></img>
    </section>
  )
}

export default Intro;
