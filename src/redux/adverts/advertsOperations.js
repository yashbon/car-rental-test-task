import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://653013ae6c756603295e381c.mockapi.io/adverts';
// https://653013ae6c756603295e381c.mockapi.io/adverts/:endpoint
// url.searchParams.append('limit', 10);

export const fetchAdverts = createAsyncThunk(
    'adverts/fetchAdverts',
    async (page, thunkAPI) => {
        console.log(page);
        // debugger;
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
