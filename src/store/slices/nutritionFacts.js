import { createSlice } from "@reduxjs/toolkit";

export const nutritionFactsSlice = createSlice({
    name: 'nutritionFacts',
    initialState: {
        value: ''
    },

    reducers: {
        setNutritionFacts: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setNutritionFacts } = nutritionFactsSlice.actions;
export default nutritionFactsSlice.reducer;