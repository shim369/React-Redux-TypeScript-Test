import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

interface UserState {
  profile: { id: string; name: string } | null;
  users: User[];
}

const initialState: UserState = {
  profile: null,
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.profile = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setProfile, setUsers } = userSlice.actions;
export default userSlice.reducer;
