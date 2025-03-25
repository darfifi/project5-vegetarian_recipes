import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        value: {},
    },

    reducers: {

        resetRecipe: state => {
            state.value = {}
        },

        setRecipe: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { resetRecipe, setRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
