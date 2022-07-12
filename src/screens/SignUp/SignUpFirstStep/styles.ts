import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  height: ${getStatusBarHeight()}px;
  margin-top: 32px;
  width: 100%;
  align-items: flex-start;
  padding: 0 24px;
`;

export const HeaderTop = styled.View`
  margin-bottom: 12px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryBold};
  font-size: ${RFValue(28)}px;
`;

export const FormTitle = styled.Text`
  margin-bottom: 25px;
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  font-size: ${RFValue(18)}px;
`;

export const FormContainer = styled.View`
  margin-top: 90px;
  padding: 0 16px;
  justify-content: space-around;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 150px;
`;
