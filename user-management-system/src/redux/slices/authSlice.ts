import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';

const token = localStorage.getItem('authToken');
const user = token ? JSON.parse(localStorage.getItem('user') || 'null') : null;

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
};

const initialState: AuthState = {
  isAuthenticated: !!token,
  user: user,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
