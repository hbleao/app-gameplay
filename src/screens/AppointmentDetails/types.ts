import { Appointment } from '../../components/Appointment/types';
import { MemberProps } from '../../components/Member/types';

export type RouteParamsProps = {
  guildSelected: Appointment
}

export type GuildInfoProps = {
  id: string;
  name: string;
  members: MemberProps[];
  instant_invite: string;
  presence_count: number;
}