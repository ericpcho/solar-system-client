import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import * as auth from '../../actions/auth.js';
import {clearAuthToken} from '../../local-storage';
import './add-comment.css'

export class AddComment extends React.Component {


  scrollToTop() {
    var myDiv = document.getElementById('scroll-box');
    myDiv.scrollTop = myDiv.scrollHeight;
  }

  onSubmit(event) {
    event.preventDefault()
    const comment = this.textInput.value
    console.log(this.props.main.currentPlanet[0].name, comment)
    this.props.dispatch(actions.saveComment(this.props.main.currentPlanet[0].name, comment))
    .then(() => setTimeout(this.scrollToTop, 500));
    this.textInput.value = ''

  }


  render() {

      return (
        <div className="add-comments">
         <form className="add-comment-form" onSubmit={(e) => this.onSubmit(e)}>
           <label className="add-comment-label" >Add A Comment:
          <input 
          className="add-comment-input"
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