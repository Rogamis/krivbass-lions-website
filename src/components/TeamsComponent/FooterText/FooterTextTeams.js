import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

function FooterTextTeams() {
  return (
    <Container fixed>
      <Box
        sx={{
          bgcolor: "white",
          height: "100%",
          width: "100%",
        }}>
        <Typography variant="h4" position='relative' color="black" gutterBottom margin={10}>
          About KL Teams
        </Typography>
        <Typography variant="h5" opacity= "0.4" gutterBottom margin={10}>
            Team life at Kryvbas Lions has never been lonely. 
          16 teams. 120 participants. 
          And everyone was ready to fight for victory. 
          Trainings for the conglomerate participants were created both by the community itself and by the mentors of Krivbass Lions. 
          Coaches. Each team could play a friendly match before the tournament 
          in which there was an opportunity: to develop tactics, 
          create new combinations, share experience.
        </Typography>
        <Typography variant="h4" position='relative' color="black" gutterBottom margin={10}>
          Mentors Krivbass Lions
        </Typography>
         <Typography variant="h5" opacity= "0.4" gutterBottom margin={10}>
            Mentors or coaches, were looking for teams to play, at a certain level of training. 
          This was done in order to avoid "playing with one goal". 
          Teams during general training had to be distributed according to the level of training, teamwork,
          and after the end of the game to get some experience
        </Typography>
        <Typography variant="h4" position='relative' color="black" gutterBottom margin={10}>
          Club managers watched your progress
        </Typography>
        <Typography variant="h5" opacity= "0.4" gutterBottom margin={10}>
            With a certain amount of progress, top esports club managers could offer you a special training package. To achieve this,
          the management of Krivbass Lions contacted the managers and showed your results both in training and in tournament competitions.
          A small summary was created in which were: your victories, the date of registration of the team, the full
          composition of the participants and the power of attorney of the conglomerate itself that you are a promising team.
          After there was a short interview in which your team got acquainted with the management of the club who is interested in
          taking you and getting acquainted with the terms of cooperation
          </Typography>
          <Typography variant="h4" position='relative' color="black" gutterBottom margin={10}>
          Protection from Lions 🦁
        </Typography>
        <Typography variant="h5" opacity= "0.4" gutterBottom margin={10}>
            Unfortunately, not all clubs are honest with their partners. 
          To protect the interests of the participants in the conglomerate, 
          a staff was opened that monitored the actions of the clubs.
        </Typography>
      </Box>
    </Container>
  );
}

export default FooterTextTeams