import { useContext } from 'react';

import { AuthContext, AuthProvider } from '../../context/Auth';

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("AuthContext does not provider!");
  
  const { user, signIn, isLoading } = context;

  return {
    user,
    AuthProvider,
    signIn,
    isLoading
  }
}