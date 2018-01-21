import {API_BASE_URL} from '../config'

import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {fromByteArray} from 'base64-js';
import {TextEncoder} from 'text-encoding';

import {saveAuthToken, clearAuthToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
    type: SET_CURRENT_USER,
    currentUser
});

// Encode a JS string as Base-64 encoded UTF-8
const base64EncodingUTF8 = str => {
    const encoded = new TextEncoder('utf-8').encode(str);
    const b64Encoded = fromByteArray(encoded);
    return b64Encoded;
};

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(setCurrentUser(decodedToken.user));
    saveAuthToken(authToken);
};

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = (loggedIn, currentUser) => ({
    type: AUTH_SUCCESS,
    loggedIn,
    currentUser
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const login = (user) => dispatch => {
    // Base64 encode the string username:password, used in the basic
    // auth field
    console.log(user)
    const token = base64EncodingUTF8(`${user.username}:${user.password}`);
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                // Provide our username and password as login credentials
                Authorization: `Basic ${token}`
            }
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => res.json())
            .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .then(() => dispatch(authSuccess()))
            .catch(err => {
                const {code} = err;
                if (code === 401) {
                    // Could not authenticate, so return a SubmissionError for Redux
                    // Form
                    return Promise.reject(
                        new SubmissionError({
                            _error: 'Incorrect username or password'
                        })
                    );
                }
            })
    );
};

export const refreshAuthToken = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => res.json())
        .then(({authToken}) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            const {code} = err;
            if (code === 401) {
                // We couldn't get a refresh token because our current credentials
                // are invalid or expired, so clear them and sign us out
                dispatch(setCurrentUser(null));
                dispatch(setAuthToken(null));
                clearAuthToken(authToken);
            }
        });
      }