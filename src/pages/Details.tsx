import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const { id }: { id: string } = useParams();
    const [info, setInfo] = useState('');

    console.log(location.pathname);
    const url = location.pathname.split('-');
    const urlFarm = url[0].charAt(9);
    const urlServer = url[1];
    const urlID = url[2];
    const urlSecret = url[3];

    const accesskey = '54aaba10eb5f2aa6e77f7549526e8b8d';

    const flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&photo_id=${urlID}&api_key=${accesskey}`;

    fetch(flickrUrl)
        .then((data) => data.text())
        .then((data) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            setInfo(xmlDoc.querySelector('title').innerHTML);
        });

    return (
        <div className="details">
            <h3>{info}</h3>

            <img
                className="card-image"
                alt="pic"
                src={
                    'https://farm' +
                    urlFarm +
                    '.staticflickr.com/' +
                    urlServer +
                    '/' +
                    urlID +
                    '_' +
                    urlSecret +
                    '_b.jpg'
                }
                width="50%"
                height="50%"
            />
        </div>
    );
};

export default Details;
