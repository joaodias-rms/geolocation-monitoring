import React from 'react';

import {Button} from '../../components/Button';
import {Container} from './styles';
import {handleStartLocation} from '../../functions/handleStartLocation';

export function Home() {
  return (
    <Container>
      <Button
        title="Start Tracking"
        color="#aaaaa"
        onPress={handleStartLocation}
      />
    </Container>
  );
}
