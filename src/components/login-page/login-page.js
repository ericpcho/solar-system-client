import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

export class LoginPage extends React.Component {

  // handlePlanetSearch(event) {
  //     event.preventDefault();
  //     this.props.dispatch(actions.authenticateUser())
  //   }

    onClick(event) {
      event.preventDefault();
      this.props.dispatch(actions.goToSignup())
    }

  render() {

    return (
      <div> 
      <form onSubmit={(event) => this.handleLogin(event)}>
        <label>Username
          <input type='text' placeholder='username' />
        </label>
        <label>Password
          <input type='text' placeholder='password' />
        </label>
        <button className="searchPlanetButton">Sign In</button>
      </form>
      <span>Don't have an account? <a onClick={event => this.onClick(event)}>Sign up here.</a></span>
      </div>
    )
  }

}

export default connect()(LoginPage);