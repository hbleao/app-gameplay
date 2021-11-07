import React from 'react';
import { StatusBar, LogBox } from 'react-native'
import { useFonts } from 'expo-font'; 
import AppLoading from 'expo-app-loading';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine']);

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import { Routes } from './src/routes';

import { useAuth } from './src/hooks/useAuth';

export default function App() {
  const { AuthProvider } = useAuth();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
