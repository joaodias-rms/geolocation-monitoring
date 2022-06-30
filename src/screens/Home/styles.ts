import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()+32}px;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
