import {FlatListProps, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Walk} from '../../database/models/walk';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px 32px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({theme}) => theme.fonts.primaryMedium};
  color: ${({theme}) => theme.colors.main};
`;

export const TracksList = styled(
  FlatList as new (props: FlatListProps<Walk>) => FlatList,
).attrs({
  contentContainerStyle: {
    padding: 24,
    showVerticalScrollIndicator: false,
  },
})``;
