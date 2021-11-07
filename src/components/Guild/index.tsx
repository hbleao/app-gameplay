import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

import { GuildIcon } from '../GuildIcon';

import { theme } from '../../styles/theme';

import { GuildDataProps } from './types';

export function Guild({ data, ...rest }: GuildDataProps) {

  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.7} 
      {...rest}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>
          <Text style={styles.owner}>
            {data.owner ? 'Administrador' : 'Convidado' }
          </Text>
        </View>
      </View>

      <Feather 
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  )
}
