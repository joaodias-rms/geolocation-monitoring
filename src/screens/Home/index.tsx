import React, {useState} from 'react';

import {Button} from '../../components/Button';
import {Container, TrackedWalk} from './styles';
import {handleStartLocation} from '../../functions/handleStartLocation';
import theme from '../../global/theme/theme';
import {Timer} from '../../components/Timer';
import {View} from 'react-native';

export function Home() {
  const [running, setRunning] = useState(true);
  const [kilometers, setKilometers] = useState(0);
  const [meters, setMeters] = useState(0);
  function test() {
    setRunning(!running);
  }
  return (
    <Container>
      {running ? <Timer /> : <View />}
      <Button
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
        <View />
      )}
    </Container>
  );
}
