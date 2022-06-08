import React from 'react'
import {Box, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: 60,

    }}>
        <Typography gutterTop textAlign={'center'}>
            @copyright 2022, All Rights Reserved
        </Typography>
    </Box>
  )
}

export default Footer