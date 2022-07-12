import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {SignUpFirstStep} from '../screens/SignUp/SignUpFirstStep';
import {Login} from '../screens/Login';
import {SignUpSecondStep} from '../screens/SignUp/SignUpSecondStep';

export function AuthRoutes() {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={gestureHandlerRootHOC(Login)} />
      <Screen
        name="SignUpFirstStep"
        component={gestureHandlerRootHOC(SignUpFirstStep)}
      />
      <Screen
        name="SignUpSecondStep"
        component={gestureHandlerRootHOC(SignUpSecondStep)}
      />
    </Navigator>
  );
}
