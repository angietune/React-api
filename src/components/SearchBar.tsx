import React, { useState } from 'react';
import '../styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { text } from '../features/fetchSlice';
import { fetchQuery } from '../features/fetchSlice';
import Result from './result';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

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
            <Result />
        </div>
    );
};

export default SearchBar;
