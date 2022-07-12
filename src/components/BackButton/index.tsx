import React from 'react';

import {Container} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {BorderlessButtonProps} from 'react-native-gesture-handler';
import theme from '../../global/theme/theme';

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({color, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon
        name="angle-left"
        size={32}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
