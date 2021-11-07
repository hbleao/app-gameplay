import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import { Avatar } from '../Avatar';

import { theme } from '../../styles/theme';

import { MemberProps } from './types';

export function Member({ data }: MemberProps) {
  const isOnline = data.status === 'online';
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar  UrlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <View  
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? on : primary }
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>

        </View>
      </View>
    </View>
  )
}
