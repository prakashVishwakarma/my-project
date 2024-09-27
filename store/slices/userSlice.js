import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsaer: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { fetchUsaer } = userSlice.actions;
export default userSlice.reducer;
