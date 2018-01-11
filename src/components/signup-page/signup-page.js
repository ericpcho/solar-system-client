import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import * as users from '../../actions/users.js';
import * as auth from '../../actions/auth.js';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { goToSignup, GoToChoosePlanet } from '../../actions/actions.js';


export class SignupPage extends React.Component {
  
  handleSignup(values) {
    console.log(values)
    const {username, password} = values;
    const user = {username, password}
    this.props.dispatch(users.registerUser(user))
    .then(() => this.props.dispatch(auth.login(user)))
  }

  render() {

    return (
      <div> 
      <form onSubmit={this.props.handleSubmit(values => this.handleSignup(values))}>
        <label htmlFor='username'>Choose a Username</label>
          <Field component='input' type='text' name='username' id='username' placeholder='username' required/>
        <label htmlFor='password'>Choose a Password</label>
          <Field component='input' type='text' name='password' id='password' placeholder='password' required/>
        <button type='submit' className="Signup">Sign Up</button>
      </form>
      </div>
    )
  }

}

export default compose(
  connect(),
  reduxForm({form:'signup-page'}) // in the state we'll have state.form.login
)(SignupPage);
