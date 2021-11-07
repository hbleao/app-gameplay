import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

import { styles } from './styles';

import { useAuth } from '../../hooks/useAuth';

export function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar UrlImage={user.avatar} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {user.firsName}
          </Text>
        </View>

        <Text style={styles.message}>
            Hoje é dia de vitória
          </Text>
      </View>
    </View>
  )
}
