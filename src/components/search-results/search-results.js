import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

export class SearchResults extends React.Component {

  onClick(key) {
    this.props.dispatch(actions.deleteComment(this.props.main.currentPlanet[0]._id, this.props.main.currentPlanet[0].comments[key]._id, this.props.main.currentPlanet[0].name))
  }

  render() {

    let comments;

    if (this.props.auth.loggedIn === true) { 
      comments = this.props.comments.map((comment, key) => (
        <div>
          <p>{comment.username} {comment.content}</p>
          {this.props.auth.currentUser === comment.username ? <button className='btn btn-default delete-button' onClick={event => this.onClick(key)}><i className="fa fa-trash-o" aria-hidden="true"></i></button> : '' }
        </div>
      ))
    }

    return (
      <div>
        Here's my data: {this.props.name}
        {this.props.description}
        {this.props.composition}
        <img src={`${this.props.thumbnail}`} />
        {comments}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  main: state.main,
  auth: state.auth
})

export default connect(mapStateToProps)(SearchResults);