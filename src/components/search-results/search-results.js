import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './search-results.css'

export class SearchResults extends React.Component {

  onClick(key) {
    this.props.dispatch(actions.deleteComment(this.props.main.currentPlanet[0]._id, this.props.main.currentPlanet[0].comments[key]._id, this.props.main.currentPlanet[0].name))
  }

  clickSignIn(event) {
    event.preventDefault();  
    this.props.dispatch(actions.goToLogin())
  }

  render() {

    let comments;

    if (this.props.auth.loggedIn === true) { 
      comments = this.props.comments.map((comment, key) => (
        <div className="sub-comments" id="sub-comments">
          <p className="comments">{comment.username}: {comment.content}</p>
          {this.props.auth.currentUser === comment.username ? <button className="btn btn-default delete-button" onClick={event => this.onClick(key)}>delete</button> : '' }
        </div>
      ))
    }

    if (this.props.auth.loggedIn === false) { 
      comments = <p className="sub-comments" id="sub-comments" >Please <a className="sub-comment-a" onClick={(event) =>this.clickSignIn(event)}> login </a> to view comments</p>
    }
    

    return (
      <div className="search-results">
       <img className="planet-image" src={`${this.props.thumbnail}`} />
        <h1 className ="planet-name">{this.props.name}</h1>
        <p className="planet-description">{this.props.description}</p>
        <p className="planet-list">{this.props.composition}</p>
        <div className="scroll-box" id="scroll-box">{comments}</div> 
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  main: state.main,
  auth: state.auth
})

export default connect(mapStateToProps)(SearchResults);