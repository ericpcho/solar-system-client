import * as actions from '../actions/actions.js'


const initialState = {
  view: 'home',
  currentPlanet: '',
  loading: false,
  error: null
};

export const reducer = (state = initialState, action) => {

  if (action.type === actions.FETCH_PLANET_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  }

  else if (action.type === actions.FETCH_PLANET_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentPlanet: action.planet
    })
  }

  else if (action.type === actions.FETCH_PLANET_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  }

  return state
}