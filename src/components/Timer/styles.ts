import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Second = styled.Text`
  font-size: 32px;
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  margin-right: 4px;
`;

export const Minute = styled.Text`
  font-size: 32px;
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  margin-right: 4px;
`;

export const Hour = styled.Text`
  font-size: 32px;
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  margin-right: 4px;
`;
