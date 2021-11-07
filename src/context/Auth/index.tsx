import React, { createContext, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContextProps, AuthContextData, User, AuthorizationResponse } from './types';

export const AuthContext = createContext({} as AuthContextData);

import { discordService, api } from '../../services';

import { discordConfig, COLLECTION_USERS } from '../../config';

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(false);
  const { CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } = discordConfig;

  async function signIn() {
    try {
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      setIsLoading(true);

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

      if(type !== 'success' || params.error) return;

      const userInfo = await discordService.GetUser(params.access_token);

      await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userInfo));
      
      setUser(userInfo);
    } catch {
      throw new Error('Não foi possível autenticar.');
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    setUser({} as User);
    AsyncStorage.removeItem(COLLECTION_USERS);
  }

  async function loadUserStorageData() {
    const userDataSavedInStorage = await AsyncStorage.getItem(COLLECTION_USERS);

    if(userDataSavedInStorage) {
      const userLogged = JSON.parse(userDataSavedInStorage) as User;
      const userInfo = await discordService.GetUser(userLogged.token);
      setUser(userInfo);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}