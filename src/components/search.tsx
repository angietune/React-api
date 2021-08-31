import React, { useState } from "react";
import '../styles.scss'

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const [pics, setPics] = useState([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value)
    }

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
    }

    const parameters = new URLSearchParams(flickrData);

    const flickrUrl = `https://api.flickr.com/services/rest/?${parameters}`;

    const searchPhotos = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        fetch(flickrUrl)
        .then(response => {return response.json()})
        .then((data) => {
            setPics(data.photos.photo)
        })
    }

    return (
        <div>
            <form className="search-form">
            <input className="input" type="text"
                onChange={handleChange}
                value={query}
                placeholder="Enter some keywords"
            />
            <button className="button" onClick={searchPhotos}>Search</button>
            </form>
            <div className="result">
            {
            pics.map((pic, i) =>
                <div className="card" key={i}>
                    <img
                        className="card-image"
                        alt={pic}
                        src={"https://farm" + pic.farm + ".staticflickr.com/" +  pic.server + "/" + pic.id + "_" + pic.secret + "_b.jpg"}
                        width="50%"
                        height="50%"
                    ></img>
                </div>)
            }
            </div>
        </div>
    )
}

export default Searchbar