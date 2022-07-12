import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-around;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  width: 100%;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryBold};
  font-size: ${RFValue(32)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryRegular};
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.main_background};
`;

export const Form = styled.View`
  padding: 24px;
  margin-top: 32px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${getBottomSpace() + 32}px;
`;
