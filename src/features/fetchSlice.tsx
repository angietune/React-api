import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { flickrData, flickrUrl } from '../interfaces';
import { accesskey } from '../flickr';

export interface ResultState {
    text: string;
    pics: flickrData[];
    status: string;
    error: string;
}

const initialState: ResultState = {
    text: '',
    pics: [],
    status: null,
    error: null,
};

export const flickrDataUrl = {
    method: 'flickr.photos.search',
    api_key: accesskey,
    sort: 'interestingness-desc',
    text: '',
    per_page: '12',
    license: '4',
    extras: 'url_m',
    format: 'json',
    nojsoncallback: '1',
    id: '',
    url_m: '',
};

const parameters = new URLSearchParams(flickrDataUrl);

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
                console.log(action);
            }),
            builder.addCase(fetchQuery.rejected, (state, action) => {});
    },
});

export const { text } = fetchSlice.actions;

export default fetchSlice.reducer;
