import React, { useState } from 'react';
import '../styles.scss';
import Result from './result';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const [pics, setPics] = useState([]);
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value);
    };

    const accesskey = '54aaba10eb5f2aa6e77f7549526e8b8d';

    const flickrData = {
        method: 'flickr.photos.search',
        api_key: accesskey,
        text: query,
        sort: 'interestingness-desc',
        per_page: '12',
        license: '4',
        extras: 'url_m',
        format: 'json',
        nojsoncallback: '1',
    };

    const parameters = new URLSearchParams(flickrData);

    const flickrUrl = `https://api.flickr.com/services/rest/?${parameters}`;

    const searchPhotos = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setLoading(true);
        fetch(flickrUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPics(data.photos.photo);
                setPages(data.photos.pages);
            });
        setLoading(false);
    };

    return (
        <div>
            <form className="search-form">
                <input
                    className="input"
                    type="text"
                    onChange={handleChange}
                    value={query}
                    placeholder="Enter some keywords"
                />
                <button className="button" onClick={searchPhotos}>
                    Search
                </button>
            </form>
            <div className="info-list">
                <div>
                    <p>Total results: {pages}</p>
                </div>
            </div>
            <Result pics={pics} loading={loading} />
        </div>
    );
};

export default Searchbar;
