const { createSlice } = require('@reduxjs/toolkit');

const favoriteAdvertsSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: [],
        // isLoading: false,
        // error: null,
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
export const favoriteReducer = favoriteAdvertsSlice.reducer;
