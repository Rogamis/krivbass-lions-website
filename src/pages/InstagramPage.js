import React from 'react'
import { Typography } from '@mui/material';
import { Container } from "@mui/system";

function InstagramPage() {
  return (
    <Container>
      <Typography
        variant="h3"
        align="center"
        color="teal"
        gutterBottom
        margin={20}
      >
        INSTAGRAM
      </Typography>
      <Typography variant="h5" align="center" color="white" gutterBottom>
        {/* Please add something here */}
      </Typography>
    </Container>
  );
}

export default InstagramPage