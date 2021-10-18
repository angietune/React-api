import React, { useState } from 'react';
import '../styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { text } from '../features/fetchSlice';
import { fetchQuery } from '../features/fetchSlice';
import Result from './result';
import { RootState } from '../store';
import Options from './options';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.fetchUrl.status);
    const pics = useSelector((state: RootState) => state.fetchUrl.pics);
    const url = useSelector((state: RootState) => state.fetchUrl.flickrDataUrl);
    const parameters = new URLSearchParams(url);
    const flickrUrl = `https://api.flickr.com/services/rest/?${parameters}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
        dispatch(text(value));
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setValue('');
        dispatch(fetchQuery(flickrUrl));
    };

    return (
        <div>
            <form className="search-form">
                <input
                    className="input"
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter some keywords"
                />
                <button className="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            {pics.length > 0 ? <Options /> : null}
            {status === 'loading' ? <div>Loading...</div> : status === 'resolved' ? <Result {...pics} /> : null}
        </div>
    );
};

export default SearchBar;
