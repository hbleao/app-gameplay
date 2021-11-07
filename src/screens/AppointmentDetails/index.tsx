import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, Text, View, Share, Platform } from 'react-native';
import { useRoute } from '@react-navigation/core';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';
import { Fontisto } from '@expo/vector-icons';

import { styles } from './styles';

import { 
  Background, 
  Button, 
  ListHeader, 
  ListDivider, 
  Header, 
  Member,
  Loading
} from '../../components';

import { discordService } from '../../services/discordService';

import BannerPng from '../../assets/banner.png';

import { theme } from '../../styles/theme';
import { RouteProps } from '../../routes/types';

import { RouteParamsProps, GuildInfoProps } from './types';

export function AppointmentDetails({ navigation }: RouteProps) {
  const { params } = useRoute();
  const { guildSelected } = params as RouteParamsProps;
  const [guild, setGuild] = useState<GuildInfoProps>({} as GuildInfoProps);
  const [isLoading, setIsLoading] = useState(true);

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' 
    ? `Junte-se a ${guildSelected.guild.name}`
    : guild.instant_invite;

    Share.share({
      message,
      url: guild.instant_invite,
    });
  }

  async function handleGuildById() {
    try {
      const guildResponse = await discordService.GetGuildById(guildSelected.guild.id);
      setGuild(guildResponse);
    } catch (error) {
      Alert.alert('Verifique as configurações do servidor!');
    }
    finally {
      setIsLoading(false);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleOpenGuild() {
    // console.log(guild);r
    // Linking.openURL(guild.instant_invite);
  }

  useEffect(() => {
    handleGuildById();
  }, []);

  return (
    <Background>
      <Header 
        title="Detalhes" 
        handleGoBack={handleGoBack}  
        action={
          guildSelected.guild.owner &&
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerPng}
        style={styles.banner}
      >
        <View style={styles.contentBanner}>
          <Text style={styles.title}>
            { guildSelected.guild.name }
          </Text>

          <Text style={styles.subtitle}>
            {  guildSelected.description }
          </Text>
        </View>
      </ImageBackground>

      {isLoading
        ? <Loading />
        :
          <>
            <ListHeader
            title="Jogadores"
            subtitle={`Total ${guild.members.length}`}
          />

          <FlatList
            data={guild.members}
            style={styles.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
          />
        </>      
      }
      <View style={styles.footer}>
        <Button 
          onPress={handleOpenGuild}
          text="Entrar na partida"
        />
      </View>
    </Background>
  )
}