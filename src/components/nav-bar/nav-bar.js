import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

export class NavBar extends React.Component {

  clickSignIn(event) {
    event.preventDefault();  
    this.props.dispatch(actions.goToLogin())
  }

  render() {

    if (this.props.loggedIn === false) {
      return (
        <nav>
          <ul>
            <li>Home</li>
            <li><a onClick={(event) =>this.clickSignIn(event)}>Sign In</a></li>
          </ul>
        </nav>
      )
    }

    else if (this.props.loggedIn === true) {
      return (
        <nav>
          <ul>
            <li>Home</li>
            <li>Log Out</li>
          </ul>
        </nav>
      )
    }

  }
}




const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps)(NavBar);