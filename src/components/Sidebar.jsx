import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
// import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { BiHomeAlt } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";



const SidebarContainer = styled.aside`

    display: block ;
    position: fixed ;
    z-index: 999;
    width: 35%;
    height: 100% ;
    background: #33383b;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    // transition: 0.9s ease-in-out;
    
   
    
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; 
    top: ${({ isOpen })=>(isOpen ? '0' : '-100%')};

    @media screen and (min-width: 768px)
    {
        display: none;
       
    }
    
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
`

const Icon = styled.div`
    position: absolute;
    top: 1.4rem ;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const SidebarWrapper = styled.div`
    color: #fff;
`

const SidebarMenu = styled.ul `
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(5,77px);

    @media screen and (max-width: 480px)
    {
      grid-template-rows: repeat(6,60px);
    }
`

const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none ;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    line-height : 100px;
    border : 0.2px solid black;
    padding: 0 24px;
    max-width: 1100px;

      &:hover {
        color:#F28968;
        color: linear-gradient(315deg, #738bdc 0%, #48c3eb 74%);
        transition: 0.2s ease-in;


      }
`

// const SidebarRouter = styled(LinkR)`
//    border-radius: 50px;
//    background: #01bf71 ;
//    white-space: nowrap ;
//    padding: 16px 64px ;
//    color: #010606 ;
//    font-size: 16px ;
//    outline: none;
//    border: none;
//    cursor: pointer;
//    transition: all 0.2s ease-in-out;
//    text-decoration: none;
      
//       &:hover {
//         transition: all 0.2 ease-in-out;
//         backgrount: #fff;
//         color: #010606;
//       }
// `


function Sidebar({ isOpen,toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>
              <BiHomeAlt />
              Home
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
            <RiProfileLine />
              About
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
            <MdMiscellaneousServices/>
              Services
            </SidebarLink>
            <SidebarLink to="products" onClick={toggle}>
            <MdProductionQuantityLimits />
              Products
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
            <BiMessageAltDetail />
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar