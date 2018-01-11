import * as actions from '../actions/actions.js'

const initialState = {
  loggedIn: false,
  view: 'choosePlanet',
  currentPlanet: [],
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
      view: 'planetWithSearch',
      loading: false,
      currentPlanet: action.planet
    })
  }

  else if (action.type === actions.FETCH_PLANET_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    })
  }

  else if (action.type === actions.GO_TO_LOGIN) {
    return Object.assign({}, state, {
      view: 'loginPage'
    })
  }

  else if (action.type === actions.GO_TO_SIGNUP) {
    return Object.assign({}, state, {
      view: 'signupPage'
    })
  }

  else if (action.type === actions.GO_TO_CHOOSEPLANET) {
    return Object.assign({}, state, {
      view: 'choosePlanet'
    })
  }

  return state
}