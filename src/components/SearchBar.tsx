import React, { useState } from 'react';
import '../styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { text } from '../features/fetchSlice';
import { fetchQuery } from '../features/fetchSlice';
import Result from './result';
import { RootState } from '../store';
import { flickrData } from '../features/FetchSlice';
import Options from './options';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const status = useSelector((state: RootState) => state.fetchUrl.status);
    const pics: typeof flickrData[] = useSelector((state: RootState) => state.fetchUrl.pics);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(text(value));
        setValue('');
        dispatch(fetchQuery());
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
            {status === 'loading' ? <div>Loading...</div> : status === 'resolved' ? <Result pics={pics} /> : null}
        </div>
    );
};

export default SearchBar;
