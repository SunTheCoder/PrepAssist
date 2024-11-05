import { createSlice } from '@reduxjs/toolkit';

const arrangementSlice = createSlice({ 
    name: 'Arrangement',
    initialState: {
        arrangements: {},
    },
    reducers: {
        setArrangement: (state, action) => {
            const nextArrangementNumber = Object.keys(state.arrangements).length + 1;
            const newArrangementKey = `arrangement${nextArrangementNumber}`;

             let currFrames = action.payload;
             let areas = []
             currFrames.forEach(frame => areas.push(frame.width * frame.height))
             //  console.log('Areas:', areas)
             areas.sort((a, b) => a-b);

             let evens = []
             let odds = []

             areas.forEach((area, i) => {
                 if (i % 2 === 0) evens.push(areas[i])
                 else odds.push(areas[i])
             })

             odds.reverse()

             let merged = evens.concat(odds)

             state.arrangements[newArrangementKey] = merged
        }
    }





})

export const { setArrangement } = arrangementSlice.actions;
export default arrangementSlice.reducer;