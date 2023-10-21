import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations';

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
    // state.adverts = action.payload;
    state.adverts = [...state.adverts, ...action.payload];
};

// const handleAddContactFulfilled = (state, action) => {
//     state.isLoading = false;
//     state.error = null;
//     state.adverts.push(action.payload);
// };

// const handleDeleteContactFulfilled = (state, action) => {
//     state.isLoading = false;
//     state.error = null;
//     const index = state.adverts.findIndex(
//         contact => contact.id === action.payload.id
//     );
//     state.adverts.splice(index, 1);
// };

const advertsSlice = createSlice({
    name: 'adverts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchAdverts.pending, handlePending)
            .addCase(fetchAdverts.fulfilled, handleGetAdvertsFulfilled)
            .addCase(fetchAdverts.rejected, handleRejected);
        // .addCase(addContact.pending, handlePending)
        // .addCase(addContact.fulfilled, handleAddContactFulfilled)
        // .addCase(addContact.rejected, handleRejected)
        // .addCase(deleteContact.pending, handlePending)
        // .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
        // .addCase(deleteContact.rejected, handleRejected);
    },
});

export const advertsReducer = advertsSlice.reducer;
