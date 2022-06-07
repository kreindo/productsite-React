import React from 'react'
import Container from '@mui/material/Container'
import VPTransparent from '../components/VPTransparent'
import Typography from '@mui/material/Typography'
import Desc from '../components/Desc'

function Content() {
  return (
    <Container maxWidth='sm' sx= {{ alignItems: 'center' }}>
        <Typography className='slide-top skewed-left no-mouse' variant={'h1'} sx={{my: 5}} align= 'center'>Hello</Typography>
        <VPTransparent/>
        <Desc/>
        <Desc/>
        <Desc/>
        <Desc/>
        <Desc/>
        <Desc/>
    </Container>
  )
}

export default Content