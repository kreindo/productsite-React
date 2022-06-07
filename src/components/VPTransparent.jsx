import React from 'react'
import mainVideo from '../assets/videos/video.mp4'
import Box from '@mui/material/Box'

function VPTransparent() {
  return (
    <Box className='mainVideo'>
        <video className= 'introVideo' src={mainVideo} autoPlay muted/>
    </Box>
  )
}

export default VPTransparent