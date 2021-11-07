import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import { ButtonProps } from './types';

export function Button({ text, children, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      
      {children && <View style={styles.children}>
        {children}
      </View>}

      {text && <Text style={styles.text}>
        {text}
      </Text>}

    </RectButton>
  );
}
