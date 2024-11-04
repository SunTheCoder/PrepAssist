import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    name: 'groups',
    initialState: {
      groups: [],
    },
    reducers: {
        setGroup: (state, action) => {
            let group = action.payload
            state.groups.push(group);
            
        }
    }

});

export const { setGroup } = groupSlice.actions;
export default groupSlice.reducer;