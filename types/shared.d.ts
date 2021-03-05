export type Member = {
  displayName: string;
  id: number;
  image: string;
  muted: boolean;
  role: string;
  ssrc: number;
};

export type Group = {
  id: number;
  image: string;
  name: string;
};

export type Room = {
  name: string;
  group?: Group;
  id: number;
  members: Member[];
};
