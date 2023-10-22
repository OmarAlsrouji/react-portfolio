import React from 'react';
import './skills.css';
import UIDesign from '../../omar-logo-zip-file/png/uidesign.png'
import WebDesign from '../../omar-logo-zip-file/png/webdesign.png'
import AppDesign from '../../omar-logo-zip-file/png/appdesign.png'
const Skills = () => {
  return (  
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly Websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS, and JavaScript as well as design softwares like Figma and Illustrator, and Frontend frameworks like React, Bootstrap, TailwindCSS.</span>
        <div className='skillBars'>
            <div className='skillbar'>
                <img src={UIDesign} className='skillbarIMG'></img>
                <div className='skillbarTEXT'>
                    <h2>UI/UX Design</h2>
                    <p>I design User-friendly Interfaces and Implement Special Functionalities within Applications.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={WebDesign} className='skillbarIMG'></img>
                <div className='skillbarTEXT'>
                    <h2>Website Design</h2>
                    <p>I Transform Specific and Special Requests and Ideas into Responsive Websites and Deploy them to be seen by Customers.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={AppDesign} className='skillbarIMG'></img>
                <div className='skillbarTEXT'>
                    <h2>App Design</h2>
                    <p>I Design and Deploy Fully Functional Applications to be Used by Customers and Business Owners.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
