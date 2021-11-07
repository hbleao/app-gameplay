import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { ListDividerProps } from './types';
 
export function ListDivider({ isCentered }: ListDividerProps) {
  return (
    <View
      style={[
        styles.container, 
        isCentered 
        ? { marginVertical: 12 } 
        : { marginTop: 2, marginBottom: 31 }
      ]} 
    />
  )
}