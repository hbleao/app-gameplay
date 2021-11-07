import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import { theme } from '../../styles/theme';

import { CategoryProps } from './types';

export function Category({ 
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: CategoryProps) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
      <LinearGradient
        style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
        colors={[ checked ? secondary85 : secondary70, secondary40 ]}
      >
        {hasCheckBox && (
          <View style={checked ? styles.checked : styles.check} />
        )}
        <Icon  width={48}  height={48} />
        <Text style={styles.title}>
          {title}
        </Text>
      </LinearGradient>
    </LinearGradient>
    </RectButton>
  );
}
