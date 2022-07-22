import React from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { BiHomeAlt,BiMenuAltRight,BiMessageAltDetail } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdMiscellaneousServices  } from "react-icons/md";




const Nav = styled.nav`
    justify-content: space-between;
    // background: #fff;
    background-color: #f6f6f6;
    background-image: linear-gradient(315deg, #f6f6f6 0%, #e9e9e9 74%);
    height: 85px;
    display: flex;
    align-items: center;
    font-size: 1rem ;
    position: sticky;
    top: 0;
    z-index: 10;
    padding : 0 0.2rem;
    
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;


    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`

    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 1;
    padding: 0 24px;
    max-width: 1100px;
    

`
const Navlogo = styled(LinkR)`

    color: #113A68;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    align-items: center;
    margin-left: 30px ;
    font-weight: bold;
    text-decoration: none;
    
    
`

const MobileIcon = styled.div`
    display: none ; 
    @media screen and (max-width: 768px)
    {
        display: block;
        top: 0;
        right: 0;
        font-size: 1.9rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        

        
        
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-style: none;
    text-align: center;
    margin-right: 24px;
    
    

    @media screen and (max-width: 768px)
    {
        display: none ;
    }
`

const NavItem = styled.li`
    height: 85px;
`

const NavLinks = styled(LinkS)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none ;
    padding: 0 1rem ;
    height: 100% ;
    cursor: pointer;
    &.active
       {
          border-bottom: 3px solid #01bf71
       } 

   
  
    position: relative;
    transition: all .8s ease;

    &::after{
        position: absolute;
        content: '';
       
        left: 0;
        right: 0;
        width: 100%;
        height: 2px;
      
    }

    &:hover{
        // color: #738bdc;
        // color: linear-gradient(315deg, #738bdc 0%, #48c3eb 74%);
        color:#F28968;
        
        z-index: 1;
        transition: all .02s ease;

    }

    &:hover::after{
        height: 50%;
        z-index: -1;
        border: solid;
        border-radius: 50px / 40px;
    }
    

    
`






const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
    <Navlogo to=''>FISLANE</Navlogo>
    
        <NavbarContainer>
       
        
        <NavMenu>
            
            <NavItem>  
                <NavLinks to='home'>
                    <BiHomeAlt />
                       <hr/><hr/>
                        Home
                    </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='about'>
                    <RiProfileLine />
                       <hr/><hr/>
                       About
                    </NavLinks>
            </NavItem>

            <NavItem>
                <NavLinks to='services'>
                    <MdMiscellaneousServices/>
                        <hr/><hr/>
                        Services
                    </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='products'>
                    <MdProductionQuantityLimits />
                        <hr/><hr/>
                        Products
                    </NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='contact'>
                    <BiMessageAltDetail />
                       <hr/><hr/>
                       Contact
                    </NavLinks>
            </NavItem>
        </NavMenu>
        <MobileIcon onClick={toggle}>
            <BiMenuAltRight />
        </MobileIcon>
        </NavbarContainer>
     
    </Nav>
    </>
  )
}

export default Navbar

