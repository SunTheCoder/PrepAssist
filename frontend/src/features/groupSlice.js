import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
    name: 'groups',
    initialState: {
      groups: {},
    },
    reducers: {
        setGroup: (state, action) => {
            const nextGroupNumber = Object.keys(state.groups).length + 1;
      const newGroupKey = `group${nextGroupNumber}`;
      
      // Use action.payload as the value for the new group
      state.groups[newGroupKey] = action.payload;
            
        }
    }

});

export const { setGroup } = groupSlice.actions;
export default groupSlice.reducer;