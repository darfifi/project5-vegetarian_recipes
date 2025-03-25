import { createSlice } from "@reduxjs/toolkit";


export const searchStringSlice = createSlice({
    name: 'searchString',
    initialState: {
        value: '',
    },

    reducers: {
        updateString: (state, action) => {
            state.value += action.payload;
        },
    }    
})

export const { updateString } = searchStringSlice.actions;
export default searchStringSlice.reducer;