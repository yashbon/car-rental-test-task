import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://653013ae6c756603295e381c.mockapi.io/adverts';

export const fetchAdverts = createAsyncThunk(
    'adverts/fetchAdverts',
    async (page, thunkAPI) => {
        try {
            const response = await axios.get(`/adverts?page=${page}&limit=8`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const fetchAdvertsFirstPage = createAsyncThunk(
    'adverts/fetchFirst',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/adverts?page=1&limit=8`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
