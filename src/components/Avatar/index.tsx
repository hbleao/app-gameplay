import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

import { theme } from '../../styles/theme';

import { AvatarProps } from './types';

export function Avatar({ UrlImage }: AvatarProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
    style={styles.container}
    colors={[secondary50, secondary70]}
  >
    <Image 
      source={{ uri: UrlImage }} 
      style={styles.avatar}
    />
  </LinearGradient>
  )
}
