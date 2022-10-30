import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import VideoComponent from './VideoComponent'

const TextUpPost =()=> {
  return (
    <Container>
      <VideoComponent />
      <Typography
        variant="h3"
        align="center"
        color="white"
        gutterBottom
        margin={10}
      >
        Welcome
      </Typography>
      <Typography variant="h5" align="center" color="white" gutterBottom>
      </Typography>
    </Container>
  );
}

export default TextUpPost