import React from 'react';
import { Link } from 'react-router-dom';
import { flickrData } from '../interfaces';

const Result = (pics: flickrData[]) => {
    return (
        <div className="result">
            {pics !== null ? (
                Object.values(pics).map((pic) => {
                    return (
                        <Link to={`/details/${pic.id}`} key={pic.id}>
                            <div className="card">
                                <img
                                    className="card-image"
                                    alt={'photo'}
                                    src={pic.url_m}
                                    width="50%"
                                    height="50%"
                                ></img>
                            </div>
                        </Link>
                    );
                })
            ) : (
                <div>No images</div>
            )}
        </div>
    );
};

export default Result;
