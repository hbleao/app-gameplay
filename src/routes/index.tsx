import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';


import { SignIn } from '../screens/SignIn';

import { useAuth } from '../hooks/useAuth';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}