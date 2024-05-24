import React from 'react'
import './intro.css';
import bg from '../../assets/akash.jpg'
import hireme from '../../assets/hireme.png';
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hello</span>
        <span className='introText'>I'm <span className='introName'>Akash</span><br/>Frontend Developer </span>
         <p className='introPara'>I am skilled Frontend Developer with experiance in creating <br/> visually appealing and user-friendly websites.</p>
         <a href="/Akash_Shirfule_CV.pdf" download="Akash_Shirfule_CV.pdf" ><button className='btn' ><img src={hireme} alt='Hireme' className='btnImg' /> Download Resume</button></a>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro