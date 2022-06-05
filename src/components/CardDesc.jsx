import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const CardDesc = () => {
  return (
    <Box gutterBottom>
        <div>
        <Paper elevation={4}/>
        <Paper elevation={4}/>
        </div>
        <div>
            <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, exercitationem iure ut facilis veritatis quaerat incidunt in, hic eveniet, sunt eligendi! Neque deserunt corporis repudiandae at veritatis pariatur facilis ipsum.</Typography>
        </div>
    </Box>
  )
}

export default CardDesc