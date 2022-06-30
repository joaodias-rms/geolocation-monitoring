import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';

import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../global/theme/theme';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.primaryRegular,
        },
        tabBarStyle: {
          padding: Platform.OS === 'ios' ? 20 : 0,
          marginTop: 15,
        },
      }}
      initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="map" size={24} color={color} />,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={24} color={color} />,
        }}
      />
    </Navigator>
  );
}
