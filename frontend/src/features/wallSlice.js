import { createSlice } from '@reduxjs/toolkit';


const wallSlice = createSlice({
    name: 'wall',
    initialState: {
      length: '',
      margin: '',
      desiredGap: '',
    },
    reducers: {
      setLength: (state, action) => {
        state.length = action.payload;
      },
      setMargin: (state, action) => {
        state.margin = action.payload;
      },
      setDesiredGap: (state, action) => {
        state.desiredGap = action.payload;
      },
    },
  });
  

export const { setLength, setMargin, setDesiredGap } = wallSlice.actions;
export default wallSlice.reducer;