import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import { GuildIcon } from '../GuildIcon';

import { categories } from '../../utils/categories';

import { theme } from '../../styles/theme';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { AppointmentDataProps } from './types';

export function Appointment({ data, ...rest }: AppointmentDataProps) {
  const [category] = categories.filter(category => category.id === data.category);
  const { owner } = data.guild;
  const { on, primary } = theme.colors;
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />

        <View style={styles.content}>
          <View style={styles.header}> 
            <Text style={styles.title}>
              {data.guild.name}
            </Text>
            
            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={ owner ? primary : on} />

              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}