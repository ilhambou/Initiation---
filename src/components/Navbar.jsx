import React from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { BiHomeAlt,BiMenuAltRight } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
import { GrServices,GrContact } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";



const Nav = styled.nav`
    justify-content: space-between;
    background: #fff;
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

    color: black;
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
`






const Navbar = () => {
  return (
    <>
    <Nav>
    <Navlogo to=''>Epselon</Navlogo>
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
                    <GrServices/>
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
                    <GrContact />
                       <hr/><hr/>
                       Contact
                    </NavLinks>
            </NavItem>
        </NavMenu>
        <MobileIcon>
            <BiMenuAltRight />
        </MobileIcon>
        </NavbarContainer>
     
    </Nav>
    </>
  )
}

export default Navbar
