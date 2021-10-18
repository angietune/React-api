import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../store';
import '../styles.scss';

const Details = () => {
    const pics = useSelector((state: RootState) => state.fetchUrl.pics);
    const location = useLocation();
    const id = location.pathname.substring(9);
    const detailedPic = pics.find((item) => item.id === id);

    return (
        <div className="details">
            <h3>{detailedPic.title}</h3>
            <h4>Author: {detailedPic.owner}</h4>
            <img className="card-image" alt="pic" src={detailedPic.url_m} width="50%" height="50%" />
        </div>
    );
};

export default Details;
