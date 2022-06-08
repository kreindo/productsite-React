import React from 'react'
import {Box, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
        backgroundColor: '#F8D842',
        boxShadow: "0 0 2px 5px rgb(0, 0, 0, .2)",
        width: '100%',
        height: 60,

    }}>
        <Typography paddingTop={'10px'} textAlign={'center'}>
            @copyright 2022, All Rights Reserved
        </Typography>
    </Box>
  )
}

export default Footer