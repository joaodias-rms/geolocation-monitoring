import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TrackedWalk = styled.Text`
  font-size: 24px;
  font-family: ${({theme}) => theme.fonts.primaryMedium};
`;
