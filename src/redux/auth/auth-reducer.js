import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSucces,
  registerError,
  loginSucces,
  loginError,
  logoutSucces,
  logoutError,
} from './auth-actions';

const userStatus = createReducer([], {
  [registerSucces]: (_, { payload }) => payload.success,
  [loginSucces]: (_, { payload }) => payload,
  [logoutSucces]: () => [],
});

const token = createReducer(null, {
  [registerSucces]: (_, { payload }) => payload.token,
  [loginSucces]: (_, { payload }) => payload.token,
  [logoutSucces]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

const isLogged = createReducer(false, {
  [registerSucces]: () => true,
  [loginSucces]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [logoutSucces]: () => false,
});

export default combineReducers({
  userStatus,
  token,
  error,
  isLogged,
});
