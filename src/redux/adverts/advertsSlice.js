import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchAdvertsFirstPage } from './advertsOperations';

const initialState = {
    adverts: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleGetAdvertsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.adverts = [...state.adverts, ...action.payload];
};

const handleGetAdvertsFirstPage = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.adverts = action.payload;
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchAdverts.pending, handlePending)
            .addCase(fetchAdverts.fulfilled, handleGetAdvertsFulfilled)
            .addCase(fetchAdverts.rejected, handleRejected)
            .addCase(fetchAdvertsFirstPage.pending, handlePending)
            .addCase(fetchAdvertsFirstPage.fulfilled, handleGetAdvertsFirstPage)
            .addCase(fetchAdvertsFirstPage.rejected, handleRejected);
    },
});

export const advertsReducer = advertsSlice.reducer;
