import { createSlice } from "@reduxjs/toolkit";

export const pageNumber = createSlice({
    name: 'pageNumber',
    initialState: {
        value: 0
    },

    reducers: {
        resetPageNumber: state => {
            state.value = 0;
        },
    
        incrementPageNumber: state => {
            state.value += 1;
        },
        
        decrementPageNumber: state => {
            state.value -= 1;
        }
    }
})

export const { resetPageNumber, incrementPageNumber, decrementPageNumber } = pageNumber.actions;
export default pageNumber.reducer;

