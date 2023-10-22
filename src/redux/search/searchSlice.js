import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'search',
    storage,
};

const initialState = {
    brand: '',
    price: '',
    mileageMin: '',
    mileageMax: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, { payload }) {
            state.brand = payload.brand;
            state.price = payload.price;
            state.mileageMin = payload.mileageMin;
            state.mileageMax = payload.mileageMax;
        },
    },
});

export const { setSearch } = searchSlice.actions;
export const searchReducer = persistReducer(persistConfig, searchSlice.reducer);
