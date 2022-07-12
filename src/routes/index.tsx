import React from 'react';

import {TabRoutes} from './tabs.routes';
import { StackRoutes } from './stack.routes';
import { AuthRoutes } from './auth.routes';
import {NavigationContainer} from '@react-navigation/native';


export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
