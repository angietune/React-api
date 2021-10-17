import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import flickrUrl from '../interfaces';
import { flickrData } from '../flickr';

export interface ResultState {
    text: string;
    pics: [];
    status: string;
    error: string;
}

const initialState: ResultState = {
    text: '',
    pics: [],
    status: null,
    error: null,
};

const parameters = new URLSearchParams(flickrData);

const flickrUrl = `https://api.flickr.com/services/rest/?${parameters}`;

export const fetchQuery = createAsyncThunk('pics/fetchQuery', async function () {
    const response = await fetch(flickrUrl);
    const data = await response.json();
    return data.photos.photo;
});

export const fetchSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        text: (state, action) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuery.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        }),
            builder.addCase(fetchQuery.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.pics = action.payload;
            }),
            builder.addCase(fetchQuery.rejected, (state, action) => {});
    },
});

export const { text } = fetchSlice.actions;

export default fetchSlice.reducer;
