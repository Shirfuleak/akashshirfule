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
        <span className='introText'>I'm <span className='introName'>Akash</span><br/>Website Designer </span>
         <p className='introPara'>I am skilled web Designer with experiance in creating <br/> visually appealing and user friendly design</p>
         <Link><button className='btn'><img src={hireme} alt='Hireme' className='btnImg'/> Hire me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro