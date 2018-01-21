import {SET_AUTH_TOKEN, SET_CURRENT_USER, AUTH_SUCCESS, CLEAR_AUTH, AUTH_REQUEST} from '../actions/auth';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    loggedIn: false,
    loading: false
};

export const reducer = (state = initialState, action) => {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === SET_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    }
    else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loggedIn: true,
            loading: false,
            currentUser: action.currentUser
        });
    }
    else if (action.type === CLEAR_AUTH) {
        return Object.assign({}, state, {
            loggedIn: false,
            currentUser: null,
            authToken: null
        });
    }
    return state;
}