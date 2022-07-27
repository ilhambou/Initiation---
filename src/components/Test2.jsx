import React from 'react'
import test1 from '../pic/test2.jpg'
import "../css/Test2.css"


function Test2() {
  return (
   <><h2>Les Services</h2>
    <div className='test' id='services'>
		
        <div class="ui-card">
        <img src={test1} alt="/"/>
	<div class="description">
		<h3>Réseaux ip</h3>
		<a href="pic.jsx">Réseaux Informatique</a><br />
		<a href="#">Réseaux intranet</a><br />
		<a href="#">Fibre optique</a><br />
		<a href="#">Voix ip </a><br />
		
		
	</div>
</div>
<div class="ui-card">
        <img src={test1} alt="/"/>
	<div class="description">
		<h3>xxxxxxxxxxxxxx</h3>
		<a href="#">yyyyyyyy</a><br />
		
	</div>
</div>
<div class="ui-card">
        <img src={test1} alt="/"/>
	<div class="description">
		<h3>xxxxxxxxxxxxxx</h3>
		<a href="#">yyyyyyyyyy</a>
	</div>
</div>

    </div></>	
  )
}

export default Test2