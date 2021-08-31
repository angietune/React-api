import React, { useState } from "react";

const Searchbar = () => {
    const [query, setQuery] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value)
        console.log(query)
    }

    const accesskey = '54aaba10eb5f2aa6e77f7549526e8b8d';

    const flickrData = {
        method: 'flickr.photos.search',
        api_key: accesskey,
        text: query,
        sort: 'interestingness-desc',
        per_page: '12',
        license: '4',
        extras: 'owner_name,license',
        format: 'json',
        nojsoncallback: '1',
    }

    const parameters = new URLSearchParams(flickrData);

    const flickrUrl = `https://api.flickr.com/services/rest/?${parameters}`;
    console.log(flickrUrl)

    const searchPhotos = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        fetch(flickrUrl)
        .then(response => {return response.json()})
        .then((data) => {
            console.log(data.photos.photo)
        })
    }

    return (
        <form className="search-form">
            <input type="text"
                onChange={handleChange}
                value={query}
            />
            <button onClick={searchPhotos}>Search</button>
        </form>
    )
}

export default Searchbar