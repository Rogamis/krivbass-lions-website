import { Container } from '@mui/system';
import React from 'react'
import BackgroundMassMedia from '../components/BackgroundComponent/componentBackMASSMEDIA';
import MassMediaContent from '../components/MassMediaComponent/MassMediaContent';
import MassMediaText from '../components/MassMediaComponent/MassMediaText';

const MassMediaPage = () => {
  return (
      <Container>
        <BackgroundMassMedia />
        <MassMediaContent />
        <MassMediaText />
      </Container>
  );
}

export default MassMediaPage;