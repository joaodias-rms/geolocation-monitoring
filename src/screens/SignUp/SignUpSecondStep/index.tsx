import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  AvatarContainer,
  PhotoContainer,
  Photo,
  PhotoButton,
} from './styles';

import {BackButton} from '../../../components/BackButton';

import {launchImageLibrary} from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../../global/theme/theme';
import UserSVG from '../../../assets/user.svg';

export function SignUpSecondStep() {
  const navigation = useNavigation();
  const [avatar, setAvatar] = useState('');
  function handleGoBack() {
    navigation.goBack();
  }

  const handleSelectAvatar = async () => {
    const imageResult = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (imageResult.didCancel) {
      return;
    }
    if (imageResult.assets) {
      setAvatar(imageResult.assets[0].uri!);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton onPress={handleGoBack} color={theme.colors.main} />
        </HeaderTop>
        <HeaderTitle>Now let's personalize you'r profile</HeaderTitle>
      </Header>
      <AvatarContainer>
        <PhotoContainer>
          <UserSVG color={theme.colors.cancel} width={80} height={80}/>
          <PhotoButton onPress={handleSelectAvatar}>
            <Icon name="camera" size={24} color={theme.colors.text} />
          </PhotoButton>
        </PhotoContainer>
      </AvatarContainer>
    </Container>
  );
}
