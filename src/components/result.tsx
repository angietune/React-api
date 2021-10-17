import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import Options from './options';
import flickrUrl from '../interfaces';

const Result = () => {
    const status = useSelector((state: RootState) => state.fetchUrl.status);
    const pics = useSelector((state: RootState) => state.fetchUrl.pics);

    return (
        <div className="result">
            <Options />
            {status === 'loading' ? (
                <div>Loading...</div>
            ) : (
                pics.map((pic: flickrUrl) => {
                    <>
                        <div>loaded</div>
                        <Link to={`/details/${pic.farm}-${pic.server}-${pic.id}-${pic.secret}`} key={pic.id}>
                            <div className="card">
                                <img
                                    className="card-image"
                                    alt={'photo'}
                                    src={pic.url_m}
                                    width="50%"
                                    height="50%"
                                ></img>
                                <div>{pic.url_m}</div>
                            </div>
                        </Link>
                        ;
                    </>;
                })
            )}
            {status === 'resolved' ? (
                pics.map((pic: flickrUrl) => {
                    <Link to={`/details/${pic.farm}-${pic.server}-${pic.id}-${pic.secret}`} key={pic.id}>
                        <div className="card">
                            <img className="card-image" alt={'photo'} src={pic.url_m} width="50%" height="50%"></img>
                            <div>{pic.url_m}</div>
                        </div>
                    </Link>;
                })
            ) : (
                <div>No results...</div>
            )}
        </div>
    );
};

export default Result;
