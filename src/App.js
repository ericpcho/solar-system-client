import React from 'react';
import PlanetSelect from './components/planet-select/planet-select';
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
