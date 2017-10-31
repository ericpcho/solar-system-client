import React, { Component } from 'react';
import Planets from './components/planets/planets';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function Layout(){
  return (
    <Router> 
      <div>
        <Route path="/" component={Planets} />
      </div>
    </Router>
  )
}

export default Layout;
