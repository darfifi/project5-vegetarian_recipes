import { createSlice } from "@reduxjs/toolkit";

export const recipesListSlice = createSlice({
    name: 'recipesList',
    initialState: {
        value: [],
    },

    reducers: {
        resetList: state => {
            state.value = [];
        },
    
        setList: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { resetList, setList } = recipesListSlice.actions;
export default recipesListSlice.reducer;