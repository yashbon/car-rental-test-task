import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        applyFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { applyFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
