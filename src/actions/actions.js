import {API_BASE_URL} from '../config'

export const FETCH_PLANET_REQUEST = 'FETCH_PLANET_REQUEST'
export const fetchPlanetRequest = () => ({
  type: FETCH_PLANET_REQUEST
})

export const FETCH_PLANET_SUCCESS = 'FETCH_PLANET_SUCCESS'
export const fetchPlanetSuccess = () => ({
  type: FETCH_PLANET_SUCCESS
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