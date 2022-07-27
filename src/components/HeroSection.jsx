import React from 'react'
import bgImg from '../pic/back_d.png'
import bgImgt from '../pic/back_two.png'
import { Zoom } from 'react-reveal'




import styled from 'styled-components'

const HeroContainer= styled.div`
  background: #fff;
  display: flex;
//   justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 485px;
  position: relative;
  z-index: 1;
  
  
`

const HeroBg = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden ;
`


const HeroContent = styled.div`
   z-index: 3;
   max-width: 1200px;
   position: absolute;
   padding: 8px 24px;
   display: flex;
   flex-direction: column ;
//    align-items: center;


`

const HeroH1 = styled.h1 `
   color: #F28968;
   font-size: 48px;
//    text-align: center;

   @media screen and (max-width: 768px)
   { 
     font-size: 40px;
   }

   @media screen and (max-width: 480px)
   {
     font-size: 32px;
   }
`

const HeroP = styled.p `
   margin-top: 24px;
   color: #fff;
   font-size: 24px;
//    text-align: center;
   max-width: 600px;

   @media screen and (max-width: 768px)
   { 
     font-size: 24px;
   }

   @media screen and (max-width: 480px)
   {
     font-size: 18px;
   }
`
const Heroimg = styled.image`
position: absolute;
right: 0px;
top: 60px;
@media screen and (max-width: 768px)
{ 
    display: none;
  
}



`



function HeroSection() {
  return (
    <div id='home'>
    <HeroContainer>
        <HeroBg>
            <img src={bgImg} alt="/"/>
        </HeroBg>
        <Heroimg>
            <img src={bgImgt} alt="/" />
            </Heroimg>
        <HeroContent>
            <Zoom duration={800}>
            
            <HeroH1>Votre partenaire à vos  </HeroH1>
            <HeroH1>travaux techniques</HeroH1>

            
            </Zoom>
        </HeroContent>

    </HeroContainer>
    </div>
  )
}

export default HeroSection