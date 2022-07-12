import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Login} from '../screens/Login';
import {TabRoutes} from './tabs.routes';

export const StackRoutes = () => {
  const {Screen, Navigator} = createStackNavigator();

  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Login" component={gestureHandlerRootHOC(Login)} />
      <Screen name="TabsRoutes" component={gestureHandlerRootHOC(TabRoutes)} />
    </Navigator>
  );
};
