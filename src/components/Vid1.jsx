import React from 'react'
import ReactPlayer from 'react-player';
import '../css/vid.css'


function Vid1() {
  return (
    <>
    <h2>Video</h2>

    <div className='vid'>
        
        <ReactPlayer url='https://www.youtube.com/watch?v=0oLyDDEUOxA' />
    </div>
  </>
  )
}

export default Vid1