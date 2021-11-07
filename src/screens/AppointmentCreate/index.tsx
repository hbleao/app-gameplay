import React, { useState } from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import uuid from 'react-native-uuid'
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import { 
  Header, 
  CategorySelect, 
  GuildIcon, 
  SmallInput, 
  Textarea, 
  Background, 
  Button, 
  ModalView 
} from '../../components';

import { theme } from '../../styles/theme';

import { Guilds } from '../Guilds';

import { COLLECTION_APPOINTMENTS } from '../../config';

import { RouteProps } from '../../routes/types';
import { GuildProps } from '../../components/Guild/types';

export function AppointmentCreate({ navigation }: RouteProps) {
  const [category, setCategory] = useState('1');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseModal() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSaveFormData() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([
      ...appointments, newAppointment
    ]));

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <ScrollView>
          <Header
            title="Agendar Partida" 
            handleGoBack={handleGoBack}
          />

          <Text style={styles.category}>
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={handleCategorySelect}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon
                  ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                  : <View  style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.guildName}>
                    {guild.name ? guild.name : 'Selecione o servidor'}
                  </Text>
                </View>

                <Feather 
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>

            <View style={styles.field}>

              <View>
                <Text style={styles.label}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput 
                    onChangeText={setDay}
                    maxLength={2} 
                  />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput 
                    onChangeText={setMonth}
                    maxLength={2} 
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>
                  Hora e mínuto
                </Text>
                <View style={styles.column}>
                  <SmallInput 
                    onChangeText={setHour}
                    maxLength={2} 
                  />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput 
                    onChangeText={setMinute}
                    maxLength={2} 
                  />
                </View>
              </View>
            </View>

            <View style={styles.textareaContainer}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.charactersLimit}>
                Max 100 caracteres
              </Text>
            </View>

            <Textarea
              multiline
              onChangeText={setDescription}
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button 
                text="Agendar" 
                onPress={handleSaveFormData}
              />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal} closeModal={handleCloseModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}