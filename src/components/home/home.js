import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import PlanetSearch from '../planet-search/planet-search';

export class Home extends React.Component {
  
    render() {
      if (this.props.view === 'choosePlanet') {
        return (
          <div classname="home">
            {/* <NavBar/> */}
            <div classname="home-content">
              <PlanetSearch/>
              <SearchResults/>
            </div>
          </div>
        )
      }
    }

  }
  
  export default connect()(Home);