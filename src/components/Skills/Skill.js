import React from 'react'
import './skill.css';
import uidesign from '../../assets/reactjsicon.png';
import appdesign from '../../assets/appdesign.jpg'
import webdesign from '../../assets/webdesign.png'

const Skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do </span>
        {/* <span className='skillDesc'>I am skilled web designer with 1.4 year of experiance as reactjs developer</span> */}
        {/* <span className='skillDesc'>I am skilled and passionate frontend developer with experiance in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTMl , CSS , ReactJS and JavaScript. </span> */}
        <div className="skillBars">
            <div className='skillBar'>
                <img src={uidesign} alt='skillBarimg..' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>ReactJS Developer</h2>
                    {/* <p>I have work experiance as a ReactSJ developer in orgnization</p>
                     */}
                     {/* <p>ReactJS Developer with 2 year of professional experiences in User Interface Development.
            Tech Stack : ReactJS, JavaScript , Bootstrap, Html , CSS , NodeJS , ExpressJS.</p> */}
            <p>I am skilled and passionate frontend developer with experiance in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTMl , CSS , ReactJS and JavaScript.</p>
                </div>
            </div>
            {/* <div className='skillBar'>
                <img src={webdesign} alt='skillBarimg..' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>web design</h2>
                    <p>This is demo text ..............</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={appdesign} alt='skillBarimg..' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App design</h2>
                    <p>This is demo text ..............</p>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Skill;