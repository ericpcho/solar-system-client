import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './planet-select.css';

export class PlanetSelect extends React.Component {

handlePlanetSelection(event) {
    event.preventDefault();
  console.log('im being clicked')        
    let planetSelection = this.input.value;
    this.props.dispatch(actions.fetchPlanet(planetSelection))
  }

  render() {

    return (
      <form onSubmit={(event) =>this.handlePlanetSelection(event)}>
        <select ref={input => this.input = input}>
          <option value="Mercury">Mercury</option>
          <option value="Venus">Venus</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
          <option value="Uranus">Uranus</option>
          <option value="Neptune">Neptune</option>
        </select>
        <button className="button">Select</button>
      </form>
    )
  }

}

export default connect()(PlanetSelect);