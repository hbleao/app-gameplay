import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Appointment } from '../components/Appointment/types';

type RootStackParamList = {
  Home: any;
  SignIn: any;
  AppointmentDetails: { 
    guildSelected: Appointment
  };
  AppointmentCreate: any;
};

export type RouteProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;