import React from 'react'
import './works.css';
import portfolio1 from '../../omar-logo-zip-file/png/1.png'
import portfolio2 from '../../omar-logo-zip-file/png/2.png'
import portfolio3 from '../../omar-logo-zip-file/png/3.png'
import portfolio4 from '../../omar-logo-zip-file/png/4.png'
import portfolio5 from '../../omar-logo-zip-file/png/5.png'
import portfolio6 from '../../omar-logo-zip-file/png/6.png'
const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
      <div className='cards'>
        <div className='card-container'>
            <div className='image-container'>
                <img src={portfolio3} />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h2>Portfolio Design</h2>
                </div>
                <div className='card-body'>
                    <p>Using my ReactJS knowledge to design a responsive and visually appealing Portfolio.</p>      
                </div>
            </div>
            <div className='BTN'>
                <button>
                    <a>Explore more</a>
                </button>
            </div>
        </div>
        <div className='card-container'>
            <div className='image-container'>
                <img src={portfolio1} />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h2>Restaurant Website</h2>
                </div>
                <div className='card-body'>
                    <p>Using my web development knowledge with Bootstrap5 to design a restaurant website.</p>      
                </div>
            </div>
            <div className='BTN'>
                <button>
                    <a href='https://omaralsrouji.github.io/restaurant-website/'>Explore more</a>
                </button>
            </div>
        </div>
        <div className='card-container'>
            <div className='image-container'>
                <img src={portfolio2} />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h2>Chrome Extension</h2>
                </div>
                <div className='card-body'>
                    <p>Using my JS knowledge to develop and deploy a chrome extension "lead tracker".</p>      
                </div>
            </div>
            <div className='BTN'>
                <button>
                    <a href='https://omaralsrouji.github.io/chrome-extension/'>Explore more</a>
                </button>
            </div>
        </div>
        <div className='card-container'>
            <div className='image-container'>
                <img src={portfolio4} />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h2>Business Website</h2>
                </div>
                <div className='card-body'>
                    <p>Designing, building, and deploying a business website upon special request.</p>      
                </div>
            </div>
            <div className='BTN'>
                <button>
                    <a href='https://clockandlockservices.com/'>Explore more</a>
                </button>
            </div>
        </div>
        <div className='card-container'>
            <div className='image-container'>
                <img src={portfolio5} />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h2>Web Business Card</h2>
                </div>
                <div className='card-body'>
                    <p>Using my ReactJS knowledge to design a mobile web business card.</p>      
                </div>
            </div>
            <div className='BTN'>
                <button>
                    <a href='https://omaralsrouji.github.io/business-card/'>Explore more</a>
                </button>
            </div>
        </div>
        <div className='card-container'>
            <div className='image-container'>
                <img src={portfolio6} />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h2>HTML E-Mail</h2>
                </div>
                <div className='card-body'>
                    <p>Using my web development knowledge design a custom HTML E-Mail for a business.</p>      
                </div>
            </div>
            <div className='BTN'>
                <button >
                    <a href='https://omaralsrouji.github.io/Ishbelia-business-email/`'>Explore more</a>
                </button>
            </div>
        </div>
      </div>     
      
    </section>
  );
}

export default Works
