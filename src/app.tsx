import React from "react";
import Searchbar from "./components/search";
import './styles.scss'

const App = () => {

    return (
      <div>
        <h1 className="title">Flickr search images</h1>
        <Searchbar />
      </div>
    );
  };
  
  export default App;