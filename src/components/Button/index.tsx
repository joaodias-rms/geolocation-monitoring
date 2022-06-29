import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Container, Title} from './styles';
import theme from '../../global/theme/theme';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
}

export function Button({title, color, loading, onPress, ...rest}: ButtonProps) {
  return (
    <Container color={color} onPress={onPress} {...rest}>
      {loading ? (
        <ActivityIndicator color={theme.colors.main} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
