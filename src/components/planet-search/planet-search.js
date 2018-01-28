import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import './planet-search.css';

export class PlanetSearch extends React.Component {

handlePlanetSearch(event) {
    event.preventDefault();
    let planet = this.input.value;
    this.props.dispatch(actions.fetchPlanet(planet))
  }

  render() {

    return (
      <div>
        <p className="description" ><span>Solar System App</span>Explore our solar system by searching basic information about the planets and commenting with other users.</p>
      <form className="planet-form" onSubmit={(event) =>this.handlePlanetSearch(event)}>
        <select className="select" ref={input => this.input = input}>
          <option value="Mercury">Mercury</option>
          <option value="Venus">Venus</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
          <option value="Uranus">Uranus</option>
          <option value="Neptune">Neptune</option>
        </select>
        <button className="searchPlanetButton">Search</button>
      </form>
      </div>
    )
  }

}

export default connect()(PlanetSearch);