import React from 'react'
import './skill.css';
import uidesign from '../../assets/uidesign.jpg';
import appdesign from '../../assets/appdesign.jpg'
import webdesign from '../../assets/webdesign.png'

const Skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do </span>
        <span className='skillDesc'>i am skilled web designer with 1.4 year of experiance as reactjs developer</span>
        <div className="skillBars">
            <div className='skillBar'>
                <img src={uidesign} alt='skillBarimg..' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Ui design</h2>
                    <p>This is demo text ..............</p>
                </div>
            </div>
            <div className='skillBar'>
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
            </div>
        </div>
    </section>
  )
}

export default Skill;