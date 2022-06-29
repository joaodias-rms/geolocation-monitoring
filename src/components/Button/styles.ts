import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${({color, theme}) =>
    color ? color : theme.colors.mainBackground};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
`;
