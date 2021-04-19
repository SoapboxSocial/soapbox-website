export type Member = {
  username?: string;
  display_name: string;
  id: number;
  image: string;
  muted?: boolean;
  role?: number;
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
