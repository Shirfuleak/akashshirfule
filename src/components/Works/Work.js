import React from 'react'
import './work.css';
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/porfolio2.jpg'
import portfolio3 from '../../assets/porfolio3.jpg'
import portfolio4 from '../../assets/porfolio4.jpg'
import portfolio5 from '../../assets/porfolio5.webp'
import portfolio6 from '../../assets/porfolio6.png'

const Work = () => {
  return (
   <section id='works'>
    <h2 className='worksTitle'>My portfolio</h2>
    <span className='workDesc'>i take prode of paying attention</span>
    <div className='worksImgs'>
        <img className='worksImg' alt='' src={portfolio1}/>
        <img className='worksImg' alt='' src={portfolio2}/>
        <img className='worksImg' alt='' src={portfolio3}/>
        <img className='worksImg' alt='' src={portfolio4}/>
        <img className='worksImg' alt='' src={portfolio5}/>
        <img className='worksImg' alt='' src={portfolio6}/>
    </div>
    <button className='workBtn'>See More</button>
   </section>
  )
}

export default Work;