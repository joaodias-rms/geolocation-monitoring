import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {BackButton} from '../../../components/BackButton';
import {Button} from '../../../components/Button';
import {Input} from '../../../components/Input';

import * as Yup from 'yup';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  FormContainer,
  ButtonContainer,
  FormTitle,
} from './styles';

import theme from '../../../global/theme/theme';

export function SignUpFirstStep() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório'),
        name: Yup.string().required('Nome é obrigatório'),
      });
      const data = {name, email};
      await schema.validate(data);
      navigation.navigate('SignUpSecondStep', {user: data});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa', error.message);
      }
    }
  }

  return (
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton onPress={handleGoBack} color={theme.colors.main} />
            </HeaderTop>
            <HeaderTitle>Let's register some infos</HeaderTitle>
          </Header>
          <FormContainer>
            <FormTitle>1. Personal Data</FormTitle>
            <Input
              iconName="user"
              placeholder="Name"
              autoCapitalize="words"
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName="envelope"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
          </FormContainer>
          <ButtonContainer>
            <Button
              width={150}
              height={40}
              color={theme.colors.shape}
              text_color={theme.colors.cancel}
              title="Cancel"
              onPress={handleGoBack}
            />
            <Button
              width={150}
              height={40}
              color={theme.colors.main}
              title="Continue"
              onPress={handleNextStep}
            />
          </ButtonContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
