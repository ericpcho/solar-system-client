import {API_BASE_URL} from '../config'

export const FETCH_PLANET_REQUEST = 'FETCH_PLANET_REQUEST'
export const fetchPlanetRequest = () => ({
  type: FETCH_PLANET_REQUEST
})

export const FETCH_PLANET_SUCCESS = 'FETCH_PLANET_SUCCESS'
export const fetchPlanetSuccess = (planet) => ({
  type: FETCH_PLANET_SUCCESS,
  planet
})

export const FETCH_PLANET_ERROR = 'FETCH_PLANET_ERROR'
export const fetchPlanetError = () => ({
  type: FETCH_PLANET_ERROR
})

export const fetchPlanet = (planet) => dispatch => {
  dispatch(fetchPlanetRequest());
  fetch(`${API_BASE_URL}/api/planets/${planet}`)
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  })
  .then((planet) => dispatch(fetchPlanetSuccess(planet)))
  .catch(error => dispatch (fetchPlanetError(error)))
}

export const GO_TO_LOGIN = 'GO_TO_LOGIN'
export const goToLogin = () => ({
  type: GO_TO_LOGIN,
})

export const GO_TO_SIGNUP = 'GO_TO_SIGNUP'
export const goToSignup = () => ({
  type: GO_TO_SIGNUP,
})

export const GO_TO_CHOOSEPLANET = 'GO_TO_CHOOSEPLANET'
export const goToChoosePlanet = () => ({
  type: GO_TO_CHOOSEPLANET,
})

export const GO_HOME = 'GO_HOME'
export const goHome = () => ({
  type: GO_HOME,
})

export const saveComment = (planet, content, username) => (dispatch, getState) => {
  // dispatch(saveCommentRequest());
    const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/planets/${planet}/comments`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
  },
    body: JSON.stringify(content, username)
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  })
  // .then((planet) => dispatch(fetchPlanetSuccess(planet)))
  .catch(error => dispatch (fetchPlanetError(error)))
}

