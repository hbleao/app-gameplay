import { RectButtonProps } from 'react-native-gesture-handler';

export type GuildProps = {
  id: string;
  name: string,
  icon: any,
  owner: boolean;
}

export type Appointment = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

export type AppointmentDataProps = RectButtonProps & {
  data: Appointment;
} 