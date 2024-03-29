import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

import { theme } from '../../styles/theme';

import { BackgroundProps } from './types';

export function Background({ children }: BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;
  
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}