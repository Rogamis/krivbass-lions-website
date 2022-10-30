import { Container, Typography, Box } from '@mui/material'
import React from 'react'

function MassMediaText() {
  return (
    <div
      style={{
        backgroundColor: "white",
        position: "absolute",
        left: 0,
        top: 700,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          position="relative"
          color="black"
          gutterBottom
          margin={11}
        >
          One of the important aspects of a good team is the media part.
        </Typography>

        <Typography variant="h5" opacity="0.4" gutterBottom margin={10}>
          Our bloggers are actively gaining an audience thanks to
          well-coordinated work. You can create a joint broadcast together with
          any other member of the conglomerate.
          <Typography variant="h5" opacity="0.4" gutterBottom margin={3}>
            For example: you have just created your channel on Twitch and to
            recruit new viewers you can call a blogger who already has a certain
            number of subscribers. Thus, there will be an exchange of audience.
          </Typography>
        </Typography>
        <Typography
          variant="h4"
          position="relative"
          color="black"
          gutterBottom
          margin={10}
        >
          SMM promotion from professionals
        </Typography>

        <Typography variant="h5" opacity="0.4" gutterBottom margin={10}>
          Our bloggers will help you get your first monetization. Don't
          hesitate! Our team of bloggers consists of people who are interested
          in personal growth. And even if you are not the strongest player, you
          can always rely on the media promotion of your own content.
        </Typography>
      </Box>
    </div>
  );
}

export default MassMediaText