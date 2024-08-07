export type User = {
    id: string;
    name: string;
  };
  
  export type AuthState = {
    isAuthenticated: boolean;
    user: User | null;
  };
  