import React from 'react'
import test1 from '../pic/test2.jpg'
import "../css/Test2.css"


function Test2() {
  return (
   <><h2>Les Services</h2>
    <div className='test'>
		
        <div class="ui-card">
        <img src={test1} alt="/"/>
	<div class="description">
		<h3>Mountain Morning</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
		<a href="#">Read More</a>
	</div>
</div>
<div class="ui-card">
        <img src={test1} alt="/"/>
	<div class="description">
		<h3>Mountain Morning</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
		<a href="#">Read More</a>
	</div>
</div>
<div class="ui-card">
        <img src={test1} alt="/"/>
	<div class="description">
		<h3>Mountain Morning</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
		<a href="#">Read More</a>
	</div>
</div>
<div class="ui-card">
        <img src={test1} alt="/"/>
	<div class="description">
		<h3>Mountain Morning</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
		<a href="#">Read More</a>
	</div>
</div>
    </div></>	
  )
}

export default Test2