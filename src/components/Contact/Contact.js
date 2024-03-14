import React, { useRef } from 'react'
import './contact.css';
import client1 from '../../assets/client1.webp';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.jpg';

import x from '../../assets/X_icon.png';
import facebook from '../../assets/facebook.webp';
import instagram from '../../assets/Instagram_icon.png.webp';
import youtube from '../../assets/youtube.png'

import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_mfwja2v', 'template_ovnqego', form.current, {
            publicKey: 'aI6jA323ts-Ow6daX',
          })
          .then(
            (result) => {
              console.log(result);
              e.target.reset();
              alert('Thanks ,  email sent ....!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                fgdbhjbgjksgklasjgfldjahiojhlkfjklhlkmjkklnbhgijok;jlhgcfhjklhgjkljhgfhjuikoplokijuhyghujiop[lokijhughujiko]
            </p>
            <div className='clientImgs'>
                <img src={client1} alt=''  className='clientImg'/>
                <img src={client2} alt=''  className='clientImg'/>
                <img src={client3} alt=''  className='clientImg'/>
                <img src={client4} alt=''  className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact ME</h1>
            <span className='contactDesc'>Please fill out the following form </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='y0ur name' className='name' name='your_name'/>
                <input type='email' placeholder='y0ur email' className='email' name='your_email'/>
                <textarea name='message' rows='5' placeholder='your message' className='msg'  ></textarea>
                <button type='submit' className='submitBtn' value='send'>Submit</button>
                <div className='links'>
                    <img src={facebook} alt=''  className='link'/>
                    <img src={x} alt=''  className='link'/>
                    <img src={youtube} alt=''  className='link'/>
                    <img src={instagram} alt=''  className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact