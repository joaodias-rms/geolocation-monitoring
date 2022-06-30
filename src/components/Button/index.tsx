import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Container, Title} from './styles';
import theme from '../../global/theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ButtonProps extends RectButtonProps {
  title: string;
  color: string;
  loading?: boolean;
}

export function Button({title, color, loading, onPress, ...rest}: ButtonProps) {
  return (
    <Container color={color} onPress={onPress} {...rest}>
      <Icon name="map" size={24} color={theme.colors.text} />
      <Title>{title}</Title>
    </Container>
  );
}
