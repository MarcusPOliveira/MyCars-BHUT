import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Car } from '../screens/Car';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='car'
        component={Car}
      />
    </Navigator>
  )
}
