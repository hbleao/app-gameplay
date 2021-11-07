import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';

import { 
  Appointment, 
  Button, 
  Background,
  CategorySelect, 
  ListHeader, 
  ListDivider, 
  Loading,
  Profile, 
} from '../../components';

import { theme } from '../../styles/theme';

import { COLLECTION_APPOINTMENTS } from '../../config';

import { RouteProps } from '../../routes/types';
import { AppointmentDataProps, Appointment as AppointmentProps } from '../../components/Appointment/types';

export function Home({ navigation }: RouteProps) {
  const [category, setCategory] = useState('1');
  const [appointments, setAppointments] = useState<AppointmentDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentsDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function handleLoadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    if(category) {
      const appointmentsByCategory = appointments.filter((appointment: AppointmentProps) => 
        appointment.category === category 
      );
      setAppointments(appointmentsByCategory);
      setIsLoading(false);
      return;
    }

    setAppointments(appointments);
    setIsLoading(false);
  }

  useFocusEffect(useCallback(() => {
    handleLoadAppointments();
  }, [category]))

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <View style={styles.buttonAdd}>
            <Button onPress={handleAppointmentCreate}>
              <MaterialCommunityIcons
                name="plus"
                color={theme.colors.heading}
                size={24}
              />
            </Button>
          </View>
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        {isLoading 
          ?
            <Loading />
          :
            <>
              <ListHeader 
                title="Partidas agendadas"
                subtitle={`Total ${appointments.length}`}
              />

              <FlatList
                keyExtractor={item => item.id}
                data={appointments}
                renderItem={({ item }) => (
                  <Appointment data={item} onPress={() => handleAppointmentsDetails(item)} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                contentContainerStyle={{ paddingBottom: 70 }}
                showsHorizontalScrollIndicator={false}
              />
            </>
        }
      </View>
    </Background>
  )
}