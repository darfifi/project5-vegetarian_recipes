import { createSlice } from "@reduxjs/toolkit";

export const modalStatusSlice = createSlice({
    name: 'modalStatus',
    initialState: {
        value: {
            loading: false,
            error: {
                status: false,
                name: '',
                message: ''
            }
        },
    },

    reducers: {
        resetModalStatus: state => {
            state.value.loading = false;
            state.value.error = {status: false, name: '', message: ''}
        },
    
        setLoading: state => {
            state.value.loading = true;
            state.value.error = {status: false, name: '', message: ''}
        },
        
        setError: (state, action) => {
            state.value.loading = false;
            state.value.error = {status: true, name: action.payload.name, message: action.payload.message}
        }
    }
})

export const { resetModalStatus, setLoading, setError } = modalStatusSlice.actions;
export default modalStatusSlice.reducer;