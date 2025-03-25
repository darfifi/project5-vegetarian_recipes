import { createSlice } from "@reduxjs/toolkit";

export const recipeIngredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        value: []
    },

    reducers: {
        resetIngredients: (state) => {
            state.value = []
        },

        setIngredients: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { resetIngredients, setIngredients } = recipeIngredientsSlice.actions;
export default recipeIngredientsSlice.reducer;
