import { createSlice } from '@reduxjs/toolkit';

const arrangementSlice = createSlice({ 
    name: 'Arrangement',
    initialState: {
        arrangement: [],
    },
    reducers: {
        setArrangement: (state, action) => {
             let currFrames = action.payload;
             let areas = []
             currFrames.forEach(frame => areas.push(frame.width * frame.height))
             console.log('Areas:', areas)
             areas.sort((a, b) => a-b);


            state.arrangement.push(areas)
        }
    }





})

export const { setArrangement } = arrangementSlice.actions;
export default arrangementSlice.reducer;