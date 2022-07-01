import React, {useState} from 'react';

import {
  Container,
  Header,
  Photo,
  PhotoButton,
  PhotoContainer,
  UserDataContainer,
} from './styles';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {launchImageLibrary} from 'react-native-image-picker';

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import {Input} from '../../components/Input';
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

      setAvatar(imageResult.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <PhotoContainer>
              <Photo source={{uri: 'https://github.com/joaodias-rms.png'}} />
              <PhotoButton onPress={handleSelectAvatar}>
                <Icon name="camera" size={24} color={theme.colors.text} />
              </PhotoButton>
            </PhotoContainer>
          </Header>
          <UserDataContainer style={{marginBottom: useBottomTabBarHeight()}}>
            <Input
              iconName="credit-card"
              placeholder="name"
              placeholderTextColor={theme.colors.text_info}
              autoCorrect={false}
              autoCapitalize="sentences"
            />
            <Input
              iconName="envelope"
              placeholder="email"
              placeholderTextColor={theme.colors.text_info}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </UserDataContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
