import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducerSlices/userReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
