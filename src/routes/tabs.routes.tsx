import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {Tracks} from '../screens/Tracks';

import Icon from 'react-native-vector-icons/FontAwesome5';
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
          fontSize: 14,
        },
        tabBarStyle: {
          height: 50,
          padding: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
      initialRouteName="Home">
      <Screen
        name="Home"
        component={gestureHandlerRootHOC(Home)}
        options={{
          tabBarIcon: ({color}) => <Icon name="map" size={24} color={color} />,
        }}
      />
      <Screen
        name="Profile"
        component={gestureHandlerRootHOC(Profile)}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={24} color={color} />,
        }}
      />
      <Screen
        name="Tracks"
        component={gestureHandlerRootHOC(Tracks)}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="route" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
