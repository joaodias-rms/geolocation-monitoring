import React, {useState} from 'react';

import {
  Container,
  Header,
  HeaderTop,
  Photo,
  PhotoButton,
  PhotoContainer,
  UserDataContainer,
  LastTracksContainer,
  LastTracksData,
  LastTracksTitle,
  LogoutButton,
} from './styles';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {launchImageLibrary} from 'react-native-image-picker';

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../global/theme/theme';

export function Profile() {
  const [avatar, setAvatar] = useState('');

  const handleSelectAvatar = async () => {
    const imageResult = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });
    if (imageResult.didCancel) {
      return;
    }
    if (imageResult.assets) {
      console.log(imageResult.assets[0].uri);

      setAvatar(imageResult.assets[0].uri!);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <LogoutButton>
                <Icon name="power-off" size={24} color={theme.colors.main} />
              </LogoutButton>
            </HeaderTop>
            <PhotoContainer>
              <Photo source={{uri: 'https://github.com/joaodias-rms.png'}} />
              <PhotoButton onPress={handleSelectAvatar}>
                <Icon name="camera" size={24} color={theme.colors.text} />
              </PhotoButton>
            </PhotoContainer>
          </Header>
          <LastTracksContainer>
            <LastTracksTitle>Last tracked walk</LastTracksTitle>
            <LastTracksData>
              8.5 Km traveled {'\n'}2 hours walking
            </LastTracksData>
          </LastTracksContainer>
          <UserDataContainer style={{marginBottom: useBottomTabBarHeight()}}>
            <Input
              iconName="credit-card"
              placeholder="Name"
              placeholderTextColor={theme.colors.text_info}
              autoCorrect={false}
              autoCapitalize="sentences"
            />
            <Input
              iconName="envelope"
              placeholder="Email"
              placeholderTextColor={theme.colors.text_info}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Button
              style={{marginTop: 12}}
              title="Save"
              color={theme.colors.main}
              width={200}
              height={40}
            />
          </UserDataContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
