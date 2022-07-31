import React from 'react'
import reseau from '../pic/res.jpg'
import elec from '../pic/elec.jpeg'
import cam from '../pic/cam.jpeg'
import clim from '../pic/clim.jpeg'
import "../css/Test2.css"


function Test2() {
  return (
   <><h2>Les Services</h2>
    <div className='test' id='services'>
		
        <div class="ui-card">
        <img src={reseau} alt="/"/>
	<div class="description">
		<h3>Réseaux ip</h3><br />
		<a href="led">Réseaux Informatique</a><br />
		<a href="#">Réseaux intranet</a><br />
		<a href="#">Fibre optique</a><br />
		<a href="#">Voix ip </a><br />
		
		
	</div>
</div>
<div class="ui-card">
        <img src={elec} alt="/"/>
	<div class="description">
		<h3>Électricité Dominique</h3><br />
		<a href="#">Domotique bus et knx</a><br />
		<a href="#">Électricité industriel</a><br />
		<a href="#">Étéctricite bâtiment</a><br />
		<a href="#">Courant faible</a><br />
		<a href="#">Basse tension</a><br />
		<a href="#">Automate</a><br />


		
	</div>
</div>
<div class="ui-card">
        <img src={cam} alt="/"/>
	<div class="description">
		<h3>Surveillance control</h3><br />
		<a href="#">Camera surveillance ip</a><br />
		<a href="#">Alarme intrusion</a><br />
		<a href="#">Control d’accès</a><br />
		<a href="#">Videophone ip</a><br />
		<a href="#">Pointage</a><br />
	</div>
</div>
<div class="ui-card">
        <img src={clim} alt="/"/>
	<div class="description">
		<h3>Froid climatisation</h3><br />
		<a href="#">Désenfumage. Mécanique</a><br />
		<a href="#">Desenfumage. Natural</a><br />
		<a href="#">Splite system gainable</a><br />
		<a href="#">Splite system  mural</a><br />
		<a href="#">Extraction d’air</a><br />




	</div>
</div>

    </div>
	
	</>	
  )
}

export default Test2