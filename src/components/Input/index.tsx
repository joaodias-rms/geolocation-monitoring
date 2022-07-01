import React, {useState} from 'react';

import {Container, IconContainer, InputText} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInputProps} from 'react-native';
import theme from '../../global/theme/theme';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Icon>['name'];
  value?: string;
}

export function Input({iconName, value, ...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleIsFocused = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <Container>
      <IconContainer>
        <Icon name={iconName} size={24} color={theme.colors.main} />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        onFocus={handleIsFocused}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}
