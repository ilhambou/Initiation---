import React from 'react'
import test1 from '../pic/test2.jpg'
import "../css/App.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



function Service() {
  
  return (
   <><h2>Les Services</h2>

    <div className="Container">
   

       <div className="Card">
        
            <img src={test1} alt="/"/>
        
           <div className="intro">
              <h1>informatique</h1>
              <p>xxx<span></span>xxxxxxxxxxxxxx</p>
           </div>
       </div>
       <div className="Card">
        
            <img src={test1} alt="/"/>
        
           <div className="intro">
              <h1>informatique</h1>
              <p>xxxx<span></span>xxxxxxxxxxxxxx</p>
           </div>
       </div>
       <div className="Card">
        
            <img src={test1} alt="/"/>
        
           <div className="intro">
              <h1>informatique</h1>
              <p>xxxx<span></span>xxxxxxxxxxxxxx</p>
           </div>
       </div>
       <div className="Card">
        
        <img src={test1} alt="/"/>
    
       <div className="intro">
          <h1>informatique</h1>
          <p>xxx<span></span>xxxxxxxxxxxxxx</p>
       </div>
   </div>
   <div className="Card">
        
        <img src={test1} alt="/"/>
    
       <div className="intro">
          <h1>informatique</h1>
          <p>xxx<span></span>xxxxxxxxxxxxxx</p>
       </div>
   </div>
   
    
   </div>

   </>
    
    
  )
}

export default Service