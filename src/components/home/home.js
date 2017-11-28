import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import PlanetSearch from '../planet-search/planet-search';
import SearchResults from '../search-results/search-results';
import NavBar from '../nav-bar/nav-bar';
import LoginPage from '../login-page/login-page';
import SignupPage from '../signup-page/signup-page';

export class Home extends React.Component {



  render() {

    let searchResults;
    let loginPage;
    let signupPage;

    if (this.props.main.view === 'planetWithSearch') {
      searchResults = this.props.currentPlanet.map((planet, key) => (
        <SearchResults key={key} name={planet.name} composition={planet.composition} 
        description={planet.description} thumbnail={planet.thumbnail}/>
      ))
    }

    else if (this.props.main.view === 'loginPage') {
      loginPage = <LoginPage/> 
    }

    else if (this.props.main.view === 'signupPage') {
      loginPage = <SignupPage/> 
    }
    

    if (this.props.main.view === 'loginPage' || this.props.main.view === 'signupPage') {
      return (
    <div> 
      <NavBar/>
      <div> 
      {loginPage}
      {signupPage}
      </div>
      </div>
      )
    }

    else {
      return (
        <div className="home">
          <NavBar/>
          <div className="home-content">
            <PlanetSearch />
            {searchResults}
          </div>
        </div>
      )
    }

  }
}

const mapStateToProps = state => ({
  main: state.main
})


export default connect(mapStateToProps)(Home);