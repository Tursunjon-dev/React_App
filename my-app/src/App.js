import React from 'react';
import Ads from './Ads/Ads';
import Collection from './Ads/Collection';
import Footer from './footer/Footer';
import CategoriesSec from './homePage/CategoriesSec';
import Home from './homePage/Home';
import Nav from './homePage/Nav';
import './homePage/styles/main.css'
import SmartWatch from './recommended/SmartWatch';
import Trending from './Trend/Trending';


const App = () => {
  return ( 
    <div>
      <Nav />
      <CategoriesSec />
      <Home />
      <SmartWatch />
      <Ads />
      <Collection />
      <Ads />
      <Trending />
      <Ads />
      <Footer />
    </div>
  );
};


export default App;
