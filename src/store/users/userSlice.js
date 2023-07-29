import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userItems: [],
  isLoading: true,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: [],
});

export default userSlice.reducer;