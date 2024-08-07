import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  profile: { id: string; name: string } | null;
}

const initialState: UserState = {
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
