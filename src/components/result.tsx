import React from 'react';
import { Link } from 'react-router-dom';
import flickrData from '../interfaces.js';

interface Props {
    pics: flickrData[];
    loading: boolean;
}

const Result = ({ pics, loading }: Props) => {
    return (
        <div className="result">
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                pics.map((pic: any, i: number) => (
                    <Link to={`/details/${pic.farm}-${pic.server}-${pic.id}-${pic.secret}`} key={i}>
                        <div className="card">
                            <img
                                className="card-image"
                                alt={pic}
                                src={
                                    'https://farm' +
                                    pic.farm +
                                    '.staticflickr.com/' +
                                    pic.server +
                                    '/' +
                                    pic.id +
                                    '_' +
                                    pic.secret +
                                    '_b.jpg'
                                }
                                width="50%"
                                height="50%"
                            ></img>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default Result;
