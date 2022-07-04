import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  color: string;
  height: number;
  width: number;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: ${({width})=>width}px;
  height: ${({height})=>height}px;
  align-items: center;
  justify-content: center;
  background-color: ${({color}) => color};
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.primaryRegular};
  color: ${({theme}) => theme.colors.text};
`;
