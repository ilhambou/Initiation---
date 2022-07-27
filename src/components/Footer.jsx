import React from 'react'
import '../css/Footer.css'
import { AiOutlineYoutube,AiFillFacebook } from "react-icons/ai";


function Footer() {
  return (
    <div>
       
    <footer class="footer-distributed">

        <div class="footer-left">
            <br />
            <h3>FISLANE</h3>

            <p class="footer-links">
                <br/>
            Nous sommes a votre service pour tout rensiegemnet et etude de vous projet technique

            </p>

        </div>

        <div class="footer-center">
            

            <div>
                <i class="fa fa-envelope"></i>
               
                
               
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <br />
                   N° A411 15 TR2 - Amal 2 - Bensergao - Agadir
                   RC. : 27927 - IF : 15182293 - Patente : 55020705 - CNSS : 4384236
                   ICE: 001427456000086
                   CIB. N° : 101010212110234731000987 / B.P.- Bouargane - Agadir            </p>
            <div class="footer-icons">
                
                <a href="https://www.youtube.com/channel/UCrh_8eLPQ5maSn_So0tSySw/videos"><div className='logo'><AiOutlineYoutube /></div></a>
                <a href="#"><div className='logo2'><AiFillFacebook /></div></a>
            </div>
        </div>
    </footer>

    </div>
  )
}

export default Footer