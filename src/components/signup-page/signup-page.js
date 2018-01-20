import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import * as users from '../../actions/users.js';
import * as auth from '../../actions/auth.js';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { goToSignup, GoToChoosePlanet } from '../../actions/actions.js';
import './signup-page.css'

export class SignupPage extends React.Component {
  
  handleSignup(values) {
    console.log(values)
    const {username, password} = values;
    const user = {username, password}
    this.props.dispatch(users.registerUser(user))
    .then(() => this.props.dispatch(auth.login(user)))
    .then(() => this.props.dispatch(auth.setCurrentUser(values.username)))
    .then(() => this.props.dispatch(actions.goToChoosePlanet()))
  }

  render() {

    return (
      <div className="signup-page"> 
      <form className="signup-form" onSubmit={this.props.handleSubmit(values => this.handleSignup(values))}>
        <div className="username"> <label className="username-label" htmlFor='username'>Choose a Username</label>
          <Field className="username-field" component='input' type='text' name='username' id='username' placeholder='username' required/>
          </div>
          <div className="password">
        <label className="password-label" htmlFor='password'>Choose a Password</label>
          <Field className="password-field" component='input' type='text' name='password' id='password' placeholder='password' required/>
          </div>
        <button type='submit' className="signin-button">Sign Up</button>
      </form>
      </div>
    )
  }

}

export default compose(
  connect(),
  reduxForm({form:'signup-page'}) // in the state we'll have state.form.login
)(SignupPage);
