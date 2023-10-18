import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://653013ae6c756603295e381c.mockapi.io/adverts';
// https://653013ae6c756603295e381c.mockapi.io/adverts/:endpoint

export const fetchAdverts = createAsyncThunk(
    'adverts/fetchAdverts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/adverts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
