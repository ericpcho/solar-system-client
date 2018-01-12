import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import * as auth from '../../actions/auth.js';
import {clearAuthToken} from '../../local-storage';

export class AddComment extends React.Component {

  onSubmit() {
    const comment = this.textInput.value
    console.log(this.props.main.currentPlanet[0].name, comment, this.props.auth.currentUser)
    this.props.dispatch(actions.saveComment(this.props.main.currentPlanet[0].name, comment, this.props.auth.currentUser))
  }


  render() {

      return (
        <div>
         <form onSubmit={(e) => this.onSubmit(e)}>
           <label>Add A Comment:
          <input 
          type="text"
          ref={(input) => {this.textInput = input;}}
          />
          </label>
          <input type="submit" value="Submit"/>
           </form>
        </div>
      )
    }

}

const mapStateToProps = state => ({
  main: state.main,
  auth: state.auth
})

export default connect(mapStateToProps)(AddComment);