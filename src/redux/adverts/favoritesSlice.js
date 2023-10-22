import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'favorites',
    storage,
};

const favoriteAdvertsSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, { payload }) => {
            state.favorites.push(payload);
        },
        delFavorite: (state, { payload }) => {
            state.favorites = state.favorites.filter(
                advert => advert.id !== payload.id
            );
        },
    },
});

export const { addFavorite, delFavorite } = favoriteAdvertsSlice.actions;
export const favoriteReducer = persistReducer(
    persistConfig,
    favoriteAdvertsSlice.reducer
);
