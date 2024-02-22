import React from 'react';
import './skills.css';
import UIDesign from '../../omar-logo-zip-file/png/uidesign.png'
import WebDesign from '../../omar-logo-zip-file/png/webdesign.png'
import AppDesign from '../../omar-logo-zip-file/png/appdesign.png'
const Skills = () => {
  return (  
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a dedicated Computer Engineer with a passion for crafting efficient and reliable systems. My expertise lies in programming and hardware integration, where I leverage my skills in Research and Development to design and implement robust Digital Designs and embedded software solutions. With a meticulous approach to coding and a focus on optimization and problem solving, I bring a unique perspective to the world of Digital Design and Embedded Systems. Proficient in Hardware description langauge Verilog and Software programming languages such as C, C++, C#, and Python. I am adept at developing firmware for various microcontrollers and processors.</span>
        <div className='skillBars'>
            <div className='skillbar'>
                <img src={UIDesign} className='skillbarIMG'></img>
                <div className='skillbarTEXT'>
                    <h2>Digital Design</h2>
                    <p>Using hardware description languages like Verilog and my knowledge in Computer Archiecture to architect and optimize intricate digital systems. With a strong foundation in FPGA and ASIC design, I navigate the entire design workflow, from Research, Development and conceptualization to simulation and synthesis. My problem-solving skills shine as I tackle challenges ranging from low-level hardware optimizations to high-level system design, ensuring the seamless integration of digital components.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={WebDesign} className='skillbarIMG'></img>
                <div className='skillbarTEXT'>
                    <h2>Embedded Software Development</h2>
                    <p>With a deep understanding of microcontroller architectures and programming languages such as C and C++, I create embedded systems applications while ensuring they operate seamlessly and reliably. My experience spans across firmware development, driver implementation, real-time operating systems, writing libraries for integrated circuits "ICs", interpreting and implementing functionalities outlined in datasheets.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={AppDesign} className='skillbarIMG'></img>
                <div className='skillbarTEXT'>
                    <h2>Software Development</h2>
                    <p>Technical proficiency and a commitment to delivering robust and user-centric solutions. Proficient in C# within the .NET framework, I build scalable and efficient applications. My skills extend to database management, where I design and optimize databases to ensure seamless data storage and retrieval. In the realm of web development, I bring a creative and functional approach, creating dynamic and responsive web applications using React.js and Bootstrap.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
