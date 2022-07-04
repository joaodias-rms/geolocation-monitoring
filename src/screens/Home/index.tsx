import React, {useState} from 'react';

import {Button} from '../../components/Button';
import {Container, TrackedWalk} from './styles';
import theme from '../../global/theme/theme';
import {Timer} from '../../components/Timer';

export function Home() {
  const [running, setRunning] = useState(false);
  const [kilometers, setKilometers] = useState(0);
  const [meters, setMeters] = useState(0);
  function test() {
    setRunning(!running);
  }
  return (
    <Container>
      {running ? <Timer /> : null}
      <Button
        width={150}
        height={150}
        iconName="map"
        title={running ? 'Stop Tracking' : 'Start Tracking'}
        color={running ? theme.colors.success : theme.colors.main}
        onPress={test}
      />
      {running ? (
        <TrackedWalk>
          {kilometers}
          .
          {meters}
          KM
        </TrackedWalk>
      ) : (
        null
      )}
    </Container>
  );
}
