import { ReactNode } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

export type ButtonProps = RectButtonProps & {
  text?: string;
  children?: ReactNode;
}
