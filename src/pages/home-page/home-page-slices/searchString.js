import { createSlice } from "@reduxjs/toolkit";

import { useAxios } from "../../../customized-hooks/useAxios";

export const searchStringSlice = createSlice({
    name: 'searchString',
    initialState: {
        value: '',
    },

    updateString: (state, action) => {
        state.value += action.payload;
    },
})

export const { updateString } = searchStringSlice.actions;

export default searchStringSlice.reducer;