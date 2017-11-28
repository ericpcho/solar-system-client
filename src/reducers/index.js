import { combineReducers } from 'redux';
import { reducer as main } from './main';
import { reducer as auth } from './auth';
import { reducer as form } from 'redux-form';

export default combineReducers ({
  form,
  auth,
  main
})