import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/useAuth';

import { ListDivider, Guild, Loading } from '../../components';

import { discordService } from '../../services';

import { styles } from './styles';

 import { GuildsProps } from './types';

export function Guilds({handleGuildSelect}: GuildsProps) {
  const { user } = useAuth();
  const [guilds, setGuilds] = useState<GuildsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function handleGetGuilds () {
    const guildsResponse = await discordService.GetGuilds(user.token);
    setGuilds(guildsResponse);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading 
        ? <Loading />
        : <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild 
              data={item} 
              onPress={() => handleGuildSelect(item)} 
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 70, paddingTop: 103 }}
          ListHeaderComponent={() => <ListDivider isCentered />}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          style={styles.guilds}
        />
      }
    </View>
  )
}