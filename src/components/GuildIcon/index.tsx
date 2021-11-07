import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import DiscordSvg from '../../assets/discord.svg';

import { discordConfig } from '../../config';

import { GuildIconProps } from './types';

export function GuildIcon ({ guildId, iconId }: GuildIconProps) {
  const { CDN_IMAGE,  } = discordConfig;
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {iconId 
        ? 
          <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
          />
        : 
          <DiscordSvg  width={40} height={40} />
      }
    </View>
  )
}
