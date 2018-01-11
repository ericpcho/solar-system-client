import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

export class SearchResults extends React.Component {

  render() {

let comments;

if (this.props.auth.loggedIn === true) {
  comments = this.props.comments.map((comment, key) => (<p>{comment.username} {comment.content}</p>))
}

    return (
      <div>
        Here's my data: {this.props.name}
        {this.props.description}
        {this.props.composition}
        <img src={`${this.props.thumbnail}`}/>
        {comments}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(SearchResults);