import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import PlanetSearch from '../planet-search/planet-search';
import SearchResults from '../search-results/search-results';
import NavBar from '../nav-bar/nav-bar';

export class Home extends React.Component {



  render() {

    let searchResults;

    if (this.props.view === 'planetWithSearch') {
      searchResults = this.props.currentPlanet.map((planet, key) => (
        <SearchResults key={key} name={planet.name} composition={planet.composition} 
        description={planet.description} thumbnail={planet.thumbnail}/>
      ))
    }

      return (
        <div classname="home">
          <NavBar/>
          <div classname="home-content">
            <PlanetSearch />
            {searchResults}
          </div>
        </div>
      )

  }
}

const mapStateToProps = state => ({
  view: state.view,
  currentPlanet: state.currentPlanet
})


export default connect(mapStateToProps)(Home);