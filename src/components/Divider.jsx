import React from 'react'
import {Typography, Box} from '@mui/material'

const Divider = () => {
  return (
    <Box sx={{my: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography variant='body2'>
            {'> --------------------------------------------- <'}
        </Typography>
    </Box>
  )
}

export default Divider