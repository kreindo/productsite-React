import React from 'react'
import mainVideo from '../assets/videos/video.mp4'

function VPTransparent() {
  return (
    <div className='mainVideo'>
        <video className= 'introVideo' src={mainVideo} autoPlay loop muted/>
    </div>
  )
}

export default VPTransparent