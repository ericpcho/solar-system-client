import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import PlanetSearch from '../planet-search/planet-search';
import SearchResults from '../search-results/search-results';
import AddComment from '../add-comment/add-comment';
import NavBar from '../nav-bar/nav-bar';
import LoginPage from '../login-page/login-page';
import SignupPage from '../signup-page/signup-page';
import './home.css';

export class Home extends React.Component {



  render() {

    let searchResults;
    let loginPage;
    let signupPage;
    let addComment;

    if (this.props.main.view === 'planetWithSearch' && this.props.auth.loggedIn === false) {
      searchResults = this.props.main.currentPlanet.map((planet, key) => (
        <SearchResults key={key} name={planet.name} composition={planet.composition} 
        description={planet.description} thumbnail={planet.thumbnail}/>
      ))
    }

    else if (this.props.main.view === 'planetWithSearch' && this.props.auth.loggedIn === true) {
      searchResults = this.props.main.currentPlanet.map((planet, key) => (
        <SearchResults key={key} name={planet.name} composition={planet.composition} 
        description={planet.description} thumbnail={planet.thumbnail} comments={planet.comments}/>
      ))
      addComment = <AddComment/>
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
      <footer className="footer"> </footer>
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
            {addComment}
          </div>
          <footer className="footer"> </footer>
        </div>
        
      )
    }

  }
}

const mapStateToProps = state => ({
  main: state.main,
  auth: state.auth
})


export default connect(mapStateToProps)(Home);