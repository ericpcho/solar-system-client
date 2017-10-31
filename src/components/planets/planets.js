import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './planets.css';

export class Planets extends React.Component {

  render() {

    return (
      <div>
        test content
    </div>
    )
  }

}

export default connect()(Planets);