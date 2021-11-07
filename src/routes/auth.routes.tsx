import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

const { Screen, Navigator } = createNativeStackNavigator();

import { theme } from '../styles/theme';

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false, 
        contentStyle: {
          backgroundColor: theme.colors.secondary90
        }
      }}
    >
      <Screen 
        name="Home" 
        component={Home} 
      />
      <Screen 
        name="AppointmentDetails" 
        component={AppointmentDetails} 
      />
      <Screen 
        name="AppointmentCreate" 
        component={AppointmentCreate} 
      />
    </Navigator>
  ) 
}