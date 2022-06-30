import React from 'react';

import {Button} from '../../components/Button';
import {Container} from './styles';
import {handleStartLocation} from '../../functions/handleStartLocation';
import theme from '../../global/theme/theme';

export function Home() {
  return (
    <Container>
      <Button
        title="Start Tracking"
        color={theme.colors.main}
        onPress={handleStartLocation}
      />
    </Container>
  );
}
