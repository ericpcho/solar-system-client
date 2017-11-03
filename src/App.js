import React from 'react';
import PlanetSearch from './components/planet-search/planet-search';
import Home from './components/home/home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function Layout(){
  return (
    <Router> 
      <div>
        <Route path="/" component={Home} />
      </div>
    </Router>
  )
}

export default Layout;
