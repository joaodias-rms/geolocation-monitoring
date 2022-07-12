import React from 'react';
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
  text_color?: string;
}

export function Button({
  title,
  color,
  width,
  height,
  iconName,
  loading,
  text_color,
  ...rest
}: ButtonProps) {
  return (
    <Container color={color} width={width} height={height} {...rest}>
      {iconName ? (
        <Icon name={iconName} size={24} color={theme.colors.text} />
      ) : null}
      <Title color={text_color}>{title}</Title>
    </Container>
  );
}
