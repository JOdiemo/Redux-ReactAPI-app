import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = 'https://randomuser.me/api/?results=5'
const initialState = {
  userItems: [],
  isLoading: true,
  amount: 5,
  error: null,
};
// export const getUserItems = createAsyncThunk('user/getUserItems',
//   async (_,) => {
//     try {
//       const resp = await axios(url);
//       console.log(resp);
//       return resp
//     } catch (error) {

//     }
//   });

  export const getUserItems = createAsyncThunk(
    'cart/getUserItems',
    async (name, thunkAPI) => {
      try {
        console.log(name);
        console.log(thunkAPI);
        const resp = await axios(url);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getUserItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;