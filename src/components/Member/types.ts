export type Member = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

export type MemberProps = {
  data: Member;
} 