import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  background-color: ${({color}) => color};
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  margin-top: 8px;
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.primaryRegular};
  color: ${({theme}) => theme.colors.text};
`;
