import React from 'react'
import './work.css';
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.png'

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
    {/* <button className='workBtn'>See More</button> */}
   </section>
  )
}

export default Work;