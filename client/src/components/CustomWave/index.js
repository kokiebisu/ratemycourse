import React from 'react';
import Wave from 'react-wavify';
import styled from 'styled-components';
export default function CustomWave(props) {
  return (
    <StyledWave
      fill="#569DEC"
      paused={false}
      options={{
        height: 10,
        amplitude: 7,
        speed: 0.35,
        points: 15
      }}
    />
  );
}

const StyledWave = styled(Wave)`
  transform: rotate(180deg);
`;
