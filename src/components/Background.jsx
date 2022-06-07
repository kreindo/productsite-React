import React from 'react'
import Box from '@mui/material/Box'
import dCube from '../assets/images/1.png'

function Background() {
    return (
        <Box sx={{display: 'absolute'}}>
            <img style={{width: '40px'}} src={dCube} alt="bg" />
        </Box>
    )
}

export default Background