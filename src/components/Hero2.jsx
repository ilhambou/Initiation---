import React from 'react'
import test1 from '../pic/H1.jpg'
import "../css/Hero2.css"


function Hero2() {
  return (
    <div className='banner'>
        <div className='slider'>
            <img src={test1} alt='/' id='slideImg'/>

        </div>
        <div className='overlay'>
            
        </div>
       

    </div>
  )
}

export default Hero2