import React from 'react';
import Options from '../components/options';
import Searchbar from '../components/SearchBar';

const Home = () => {
    return (
        <div>
            <h1 className="title">Flickr search images</h1>
            <Searchbar />
        </div>
    );
};

export default Home;
