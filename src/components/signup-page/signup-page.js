import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

export class SignupPage extends React.Component {

  render() {

    return (
      <div> 
      <form onSubmit={(event) => this.handleSignup(event)}>
        <label>Choose a Username
          <input type='text' placeholder='username' />
        </label>
        <label>Choose a Password
          <input type='text' placeholder='password' />
        </label>
        <button className="searchPlanetButton">Sign Up</button>
      </form>
      </div>
    )
  }

}

export default connect()(SignupPage);