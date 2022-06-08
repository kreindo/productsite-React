import React from 'react'
import Box from '@mui/material/Box'
import dCube from '../assets/images/1.png'

function Background() {
    return (
        <Box sx={{display: 'sticky'}}>
            <img style={{width: '5em'}} src={dCube} alt="bg" />
        </Box>
    )
}

export default Background