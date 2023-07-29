import { configureStore } from '@reduxjs/toolkit'
import userReducer from './store/users/userSlice'

const store = configureStore({
  reducer: {
    users: userReducer,
  },

});
export default store;
