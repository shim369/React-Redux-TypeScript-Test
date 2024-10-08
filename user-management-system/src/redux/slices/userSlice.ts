import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user';


export interface UserState {
  profile: User | null;
  users: User[];
};

const initialState: UserState = {
  profile: null,
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<User>) => {
      state.profile = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setProfile, setUsers } = userSlice.actions;
export default userSlice.reducer;
