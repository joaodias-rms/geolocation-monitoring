import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 227px;
  align-items: center;
`;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({theme}) => theme.colors.main};
  margin-top: 48px;
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
  padding-top: 24px;
`;

export const Title = styled.Text``;
