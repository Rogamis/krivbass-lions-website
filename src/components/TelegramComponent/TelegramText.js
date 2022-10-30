import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function TelegramText() {
  return (
    <Container>
      <Typography
        variant="h3"
        align="center"
        color="teal"
        gutterBottom
        margin={20}
      >
        TELEGRAM PAGE
      </Typography>
      <Typography variant="h5" align="center" color="white" gutterBottom>
      </Typography>
    </Container>
  );
}

export default TelegramText