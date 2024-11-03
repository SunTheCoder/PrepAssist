import { createSlice } from '@reduxjs/toolkit';

const frameSlice = createSlice({
  name: 'frame',
  initialState: {
    frames: [], // Initialize as an empty object to store frames as key-value pairs
  },
  reducers: {
    setFrames: (state, action) => {
      state.frames = action.payload; // Replace the entire frames object with new data
    },
    addFrame: (state, action) => {
      const { frame } = action.payload; // Assume payload has { key: 'frame_one', frame: { width: 10, height: 15 } }
      state.frames.push(frame) // Add or update a specific frame in the object
      console.log('state',state.frames)
    },
    updateFrame: (state, action) => {
      const { key, newDimensions } = action.payload;
      if (state.frames[key]) {
        state.frames[key] = { ...state.frames[key], ...newDimensions }; // Update existing frame's dimensions
      }
    },
  },
});

export const { setFrames, addFrame, updateFrame } = frameSlice.actions;
export default frameSlice.reducer;
