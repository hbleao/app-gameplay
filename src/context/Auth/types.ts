import { AuthSessionResult } from "expo-auth-session";
import { ReactNode } from "react";

export type AuthContextProps = {
  children: ReactNode;
}

export type User = {
  id: string;
  username: string;
  firsName: string;
  avatar: string;
  email: string;
  token: string;
}

export type AuthorizationResponse = AuthSessionResult & {
  params: {
    access_token: string;
    error?: string;
  }
}

export type AuthContextData = {
  user: User;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}
