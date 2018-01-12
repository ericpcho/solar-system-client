import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import * as auth from '../../actions/auth.js';
import {clearAuthToken} from '../../local-storage';

export class NavBar extends React.Component {

  clickSignIn(event) {
    event.preventDefault();  
    this.props.dispatch(actions.goToLogin())
  }

  logOut(event) {
    this.props.dispatch(auth.clearAuth());
    clearAuthToken();
  }

  goHome() {
    this.props.dispatch(actions.goHome())
  }

  render() {

    if (this.props.auth.loggedIn === false) {
      return (
        <nav>
          <ul>
            <li><a onClick={(event) =>this.goHome(event)}>Home</a></li>
            <li><a onClick={(event) =>this.clickSignIn(event)}>Sign In</a></li>
          </ul>
        </nav>
      )
    }

    else if (this.props.auth.loggedIn === true) {
      return (
        <nav>
          <ul>
            <li>Home</li>
            <li><a onClick={(event) =>this.logOut(event)}>Log Out</a></li>
          </ul>
        </nav>
      )
    }

  }
}




const mapStateToProps = state => ({
  main: state.main,
  auth: state.auth
})

export default connect(mapStateToProps)(NavBar);