import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import * as auth from '../../actions/auth.js';
import * as users from '../../actions/users.js'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import './login-page.css'

export class LoginPage extends React.Component {

  handleLogin(values) {
    const {username, password} = values;
    const user = {username, password}
      this.props.dispatch(auth.login(user))
      .then(() => this.props.dispatch(actions.goToChoosePlanet()))
      .then(() => this.props.dispatch(auth.setCurrentUser(values.username)))
    }

    onClick(event) {
      event.preventDefault();
      this.props.dispatch(actions.goToSignup())
    }

  render() {

    return (
      <div className="login-page"> 
        <form onSubmit={this.props.handleSubmit(values => this.handleLogin(values))}>
        <div className="username">
        <label className="username-label">Username
        <Field className="username-field" component='input' type='text' name='username' id='username' placeholder='username' required/>
        </label>
        </div>
        <div className="password">
        <label className="password-label">Password
        <Field className="password-field" component='input' type='text' name='password' id='password' placeholder='password' required/>
        </label>
        </div>
        <button className="signin-button">Sign In</button>
      </form>
      <span>Don't have an account? <a className="signup-anchor" onClick={event => this.onClick(event)}>Sign up here.</a></span>
      </div>
    )
  }
  

}

export default compose(
  connect(),
  reduxForm({form:'login-page'}) 
)(LoginPage);