import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import test1 from '../pic/test6.jpg'
import test2 from '../pic/test6.jpg'
import test3 from '../pic/test6.jpg'
import styled from 'styled-components'
import { hover } from '@testing-library/user-event/dist/hover'

const D = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-gap: -10px;
`


const Maincontainer= styled.div`
  
    position: absolute;
    width: 250px;
    height: 320px;
    background: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
   
    
    
  
  
`
const Thecard= styled.div `

position: relative;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 10px;
transform-style: preserve-3d;
transition: all 0.8s ease;

&:hover{
    transform: rotateY(180deg);

}

`
const Thefront = styled.div`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #ffc728;
  color: #000;
  

`

const Theback = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 10px;
backface-visibility: hidden;
overflow: hidden;
background: #fafafa;
color: #333;
text-align: center;
transform: rotateY(180deg);
`

function Services() {

  return (

    <D>
    <Maincontainer>
        
        

        <Thecard>

             <Thefront>
                
                 <img src={test1} alt="/"/>
                 <p>information</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>
    
        <Thecard>

<Thefront>
    <img src={test1} alt="/"/>
    <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
</Thefront>

<Theback><h1>Informatique</h1>
     <br/><br/><br/>
     <ul>
          <li>
              xxxxxxxxxxxxxxxxxxx
          </li>
          <br/>
           <li>
              xxxxxxxxxxxxxxxxxx
          </li>
          <br/>
          <li>
              xxxxxxxxxxxxxxxxx
          </li>
          <br/>
       </ul>
 </Theback>

</Thecard>
<Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>

        <Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>
        <Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>
        <Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>
        <Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>
        <Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>
        <Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>
        <Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>
        <Thecard>

             <Thefront>
                 <img src={test1} alt="/"/>
                 <p>This is the front of the card. It contains important information. Please see overleaf for more details.</p>
             </Thefront>

             <Theback><h1>Informatique</h1>
                  <br/><br/><br/>
                  <ul>
                       <li>
                           xxxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                        <li>
                           xxxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                       <li>
                           xxxxxxxxxxxxxxxxx
                       </li>
                       <br/>
                    </ul>
              </Theback>

        </Thecard>




</Maincontainer>
  
</D>
   
  )
}

export default Services