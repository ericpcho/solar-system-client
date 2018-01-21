import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import * as auth from '../../actions/auth.js';
import * as users from '../../actions/users.js'
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners'; 
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
      <section>
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
      <h4 className="demo-login">Demo Login:</h4>
        <p className="demo-username">username: <i>John Smith</i></p> <p className="demo-password">password: <i>John Smith</i></p>
        <PulseLoader color={'#fff'} loading={this.props.main.loading} className="loading-graphic" />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  main: state.main,
  auth: state.auth
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form:'login-page'}) 
)(LoginPage);