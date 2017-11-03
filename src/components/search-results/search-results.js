import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

export class SearchResults extends React.Component {

  render() {
    return (
      <div>
        Here's my data: {this.props.name}
        {this.props.description}
        {this.props.composition}
        <img src={`${this.props.thumbnail}`}/>
      </div>
    )
  }
}

export default connect()(SearchResults);