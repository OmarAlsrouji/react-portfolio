import React,{useRef} from 'react'
import './contact.css'
import Company1 from '../../omar-logo-zip-file/png/company1.png';
import Company2 from '../../omar-logo-zip-file/png/company2.png';
import Company3 from '../../omar-logo-zip-file/png/company3.png';
import linkedin from '../../omar-logo-zip-file/png/linkedin.png';
import whatsapp from '../../omar-logo-zip-file/png/whatsapp.png';
import github from '../../omar-logo-zip-file/png/github.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vadod1s','template_6hm0olb',form.current,'Y_91JcWjTAxJd_zKG').then((result)=> {
            console.log(result.text);
            e.target.reset();
            alert("Email Sent!");
        }, (error)=> {
            console.log(error.text);
        });
    };
  return (
    <section id='contactPage'>
      {/* <div className='clients'>
        <h1 className='contactPageTitle'>
            My Employers
        </h1>
        <p className='clientDesc'>Along with doing solo projects, I have had the opportunity to work with a number of companies in Dubai and Istanbul, Which are </p>
        <div className='clientIMGS'>
            <img className='clientIMG' src={Company1}/>
            <img className='clientIMG' src={Company2}/>
            <img className='clientIMG' src={Company3}/>
        </div>
      </div> */}
      <div id='contactt' className='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Fill out the form below to discuss any work opportunities</span>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <input type="text" className='name' placeholder='Your Name' name='from_name'></input>
            <input type="email" className='email' placeholder='Your E-Mail' name='from_email'></input>
            <textarea name='message' rows='5' className='msg' placeholder='Your Message'></textarea>
            <button className='submitBtn' value='Send' type='submit'>Submit</button>
            <div className='links'>
                <a href='https://www.linkedin.com/in/omar-alsrouji-ba7a29253/'><img className='link' src={linkedin}/></a>
                <a href='https://wa.me/+905385073933'><img className='link' src={whatsapp}/></a>
                <a href='https://github.com/OmarAlsrouji'><img className='link' src={github}/></a>
                
            </div>
        </form>
      </div>

    </section>
  )
}

export default Contact
