import styled from 'styled-components/native';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 227px;
  align-items: center;
  padding: 0 24px;
`;

export const HeaderTop = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${getStatusBarHeight()}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({theme}) => theme.colors.main};
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

export const UserDataContainer = styled.View`
  margin-top: 50px;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

export const LastTracksContainer = styled.View`
  margin-top: 36px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const LastTracksTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryBold};
  font-size: ${RFValue(18)}px;
`;

export const LastTracksData = styled.Text`
  font-family: ${({theme}) => theme.fonts.primaryRegular};
  font-size: ${RFValue(12)}px;
`;

export const Title = styled.Text``;
