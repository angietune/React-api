import React from 'react';
import { Link } from 'react-router-dom';
import { flickrData } from '../features/fetchSlice';

const Result = ({ pics }: any) => {
    console.log(pics[0].url_m);
    return (
        <div className="result">
            {pics !== null
                ? pics.map((pic: any) => {
                      <Link to={`/details/${pic.id}`} key={pic.id}>
                          <div className="card">
                              <img className="card-image" alt={'photo'} src={pic.url_m} width="50%" height="50%"></img>
                          </div>
                      </Link>;
                  })
                : null}
        </div>
    );
};

export default Result;
