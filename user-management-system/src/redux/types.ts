export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: string;
};

export type UserState = {
  profile: User | null;
  users: User[];
};

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};
