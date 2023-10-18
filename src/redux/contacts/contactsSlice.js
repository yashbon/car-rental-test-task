import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.list = action.payload;
};

const handleAddContactFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.list.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.list.findIndex(
        contact => contact.id === action.payload.id
    );
    state.list.splice(index, 1);
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        list: [],
        isLoading: false,
        error: null,
    },

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, handleFulfilled)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, handleAddContactFulfilled)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
            .addCase(deleteContact.rejected, handleRejected);
    },
});

export const contactsReducer = contactsSlice.reducer;
