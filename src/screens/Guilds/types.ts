export type Props = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

export type GuildsProps = {
  handleGuildSelect: (guildSelect: Props) => void;
}