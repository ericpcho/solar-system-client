import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import * as auth from '../../actions/auth.js';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';

export class LoginPage extends React.Component {

  handleLogin(values) {
    const {username, password} = values;
    const user = {username, password}
      this.props.dispatch(auth.login(user))
      .then(() => this.props.dispatch(actions.goToChoosePlanet()))
    }

    onClick(event) {
      event.preventDefault();
      this.props.dispatch(actions.goToSignup())
    }

  render() {

    return (
      <div> 
        <form onSubmit={this.props.handleSubmit(values => this.handleLogin(values))}>
        <label>Username
        <Field component='input' type='text' name='username' id='username' placeholder='username' required/>
        </label>
        <label>Password
        <Field component='input' type='text' name='password' id='password' placeholder='password' required/>
        </label>
        <button className="searchPlanetButton">Sign In</button>
      </form>
      <span>Don't have an account? <a onClick={event => this.onClick(event)}>Sign up here.</a></span>
      </div>
    )
  }
  

}

export default compose(
  connect(),
  reduxForm({form:'login-page'}) 
)(LoginPage);