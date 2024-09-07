import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { messageInfo } from '../../types/alert'

const initialState : messageInfo  = {
    message : "Welcome to Collage World!",
    title: "Success",
    severity: 'success'
};


const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        successMessage(state, action: PayloadAction<any>) {
            state.title = "Success";
            state.message = action.payload;
            state.severity = 'success';
        },

        errorMessage(state, action: PayloadAction<any>) {
            state.title = 'Error';
            state.message = action.payload;
            state.severity = 'error';
        },

        warningMessage(state, action: PayloadAction<any>) {
            state.title = 'Warning';
            state.message = action.payload;
            state.severity = 'warning';
        },

        infoMessage(state, action: PayloadAction<any>) {
            state.title = 'Info';
            state.message = action.payload;
            state.severity = 'info'
        },

        clearMessage(state) {
            state.message = '';
        }


    }
});

export const { infoMessage, warningMessage, successMessage, errorMessage, clearMessage } = alertSlice.actions;
export default alertSlice.reducer;