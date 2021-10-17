import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import flickrUrl from '../interfaces';
import { accesskey } from '../flickr';

const initialState: flickrUrl = {
    method: 'flickr.photos.search',
    api_key: accesskey,
    text: '',
    sort: 'interestingness-desc',
    per_page: '12',
    license: '4',
    extras: 'url_m',
    format: 'json',
    nojsoncallback: '1',
    id: '',
    farm: '',
    server: '',
    secret: '',
};

export const querySlice = createSlice({
    name: 'flickrUrl',
    initialState,
    reducers: {
        text: (state, action) => {
            state.text = action.payload;
        },
        per_page: (state, action) => {
            state.per_page = action.payload;
        },
        id: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const { text, per_page, id } = querySlice.actions;

export default querySlice.reducer;
