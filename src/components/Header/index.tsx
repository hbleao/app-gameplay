import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

import { theme } from '../../styles/theme';

import { HeaderProps } from './types';

export function Header({ title, action, handleGoBack }: HeaderProps) {
  const { secondary100, secondary40, heading } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather 
          name="arrow-left"
          size={28}
          color={heading}
        />
      </BorderlessButton>
      <Text style={styles.title}>
        {title}
      </Text>
      {action 
        ? <View>{action}</View>
        : <View style={{ width: 24 }} />
      }
    </LinearGradient>
  )
}