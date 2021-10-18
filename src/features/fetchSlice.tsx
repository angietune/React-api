import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { flickrData, flickrUrl } from '../interfaces';
import { accesskey } from '../flickr';

// export const flickrDataUrl = {
//     method: 'flickr.photos.search',
//     api_key: accesskey,
//     sort: 'interestingness-desc',
//     text: '',
//     per_page: '12',
//     license: '4',
//     extras: 'url_m',
//     format: 'json',
//     nojsoncallback: '1',
//     id: '',
//     url_m: '',
// };

export interface ResultState {
    pics: flickrData[];
    status: string;
    error: string;
    flickrDataUrl: {
        method: string;
        api_key: string;
        sort: string;
        text: string;
        per_page: string;
        license: string;
        extras: string;
        format: string;
        nojsoncallback: string;
        id: string;
        url_m: string;
    };
}

const initialState: ResultState = {
    pics: [],
    status: null,
    error: null,
    flickrDataUrl: {
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
    },
};

// const parameters = new URLSearchParams(flickrDataUrl);
// const flickrUrl = `https://api.flickr.com/services/rest/?${parameters}`;

export const fetchQuery = createAsyncThunk('pics/fetchQuery', async function (flickrUrl: string) {
    const response = await fetch(flickrUrl);
    console.log(flickrUrl);

    const data = await response.json();
    return data.photos.photo;
});

export const fetchSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        text: (state, action) => {
            state.flickrDataUrl.text = action.payload;
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
