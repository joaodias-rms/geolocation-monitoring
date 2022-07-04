import React from 'react';
import {ActivityIndicator} from 'react-native';
import {RectButtonProps} from 'react-native-gesture-handler';

import {Container, Title} from './styles';
import theme from '../../global/theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

interface ButtonProps extends RectButtonProps {
  title: string;
  iconName?: React.ComponentProps<typeof Icon>['name'];
  color: string;
  loading?: boolean;
  width: number;
  height: number;
}

export function Button({
  title,
  color,
  width,
  height,
  iconName,
  loading,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <Container
      color={color}
      onPress={onPress}
      {...rest}
      width={width}
      height={height}>
      {iconName ? (
        <Icon name={iconName} size={24} color={theme.colors.text} />
      ) : null}
      <Title>{title}</Title>
    </Container>
  );
}
