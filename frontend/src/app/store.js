import { configureStore } from '@reduxjs/toolkit';
import frameReducer from '../features/frameSlice';
import wallReducer from '../features/wallSlice';
import groupReducer from '../features/groupSlice';
import arrangementReducer from '../features/arrangementSlice';
// import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    frame: frameReducer,
    wall: wallReducer,
    group: groupReducer,
    arrangement: arrangementReducer
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


export default store;