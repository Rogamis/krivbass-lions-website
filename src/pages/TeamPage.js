import React from 'react'
import { Container } from "@mui/system";
import BackgroundTeamsPage from '../components/BackgroundComponent/componentBackTEAMS';
import TeamsGrid from '../components/TeamsComponent/GridTeams/teamsGrid';
import FooterTextTeams from '../components/TeamsComponent/FooterText/FooterTextTeams';

function TeamPage() {
  return (
    <Container>
      <BackgroundTeamsPage />
      <TeamsGrid />
      <FooterTextTeams />
    </Container>
  );
}

export default TeamPage;