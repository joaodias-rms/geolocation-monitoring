import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
   width: 100%;
`;

export const Header = styled.View`
  height: ${getStatusBarHeight() + 32}px;
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
  font-size: ${RFValue(24)}px;
`;

export const AvatarContainer = styled.View`
   margin-top: 32px;
   align-items: center;
`;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({theme}) => theme.colors.main_background};
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.colors.main};
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 8px;
  bottom: 10px;
  right: 10px;
`;
