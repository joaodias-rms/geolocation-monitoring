import React from 'react';

import {Container, Header, HeaderTitle, SubTitle, Form, Footer} from './styles';

import {useNavigation} from '@react-navigation/native';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import theme from '../../global/theme/theme';

export function Login() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('TabsRoutes');
  }

  function handleNewUser(){
    navigation.navigate('SignUpFirstStep')
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Welcome!</HeaderTitle>
        <SubTitle>Let's start tracking your walks</SubTitle>
      </Header>
      <Form>
        <Input iconName="envelope" autoCapitalize="words" placeholder="Email" />
        <Input iconName="lock" autoCapitalize="none" placeholder="Password" />
      </Form>
      <Footer>
        <Button
          title="Login"
          width={250}
          height={40}
          color={theme.colors.main}
          onPress={handleLogin}
        />
        <Button
          title="Sign In"
          width={250}
          height={40}
          color={theme.colors.line}
          text_color={theme.colors.main}
          onPress={handleNewUser}
        />
      </Footer>
    </Container>
  );
}
