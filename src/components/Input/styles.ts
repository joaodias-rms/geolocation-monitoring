import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View`
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  margin-right: 24px;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 0 23px;
  color: ${({theme}) => theme.colors.shape_dark};
  font-family: ${({theme}) => theme.fonts.primaryRegular};
  font-size: ${RFValue(15)}px;
  border-radius: 10px;
  ${({isFocused, theme}) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;
