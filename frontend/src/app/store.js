import { configureStore } from '@reduxjs/toolkit';
import frameReducer from '../features/frameSlice';

export const store = configureStore({
  reducer: {
    frame: frameReducer,
  },
});
