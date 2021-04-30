import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequestRequest');
const registerSucces = createAction('auth/registerRequestSuccess');
const registerError = createAction('auth/registerRequestError');

const loginRequest = createAction('auth/loginRequest');
const loginSucces = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSucces = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/currentUserRequest');
const getCurrentUserSucces = createAction('auth/currentUserSuccess');
const getCurrentUserError = createAction('auth/currentUserError');

export {
  registerRequest,
  registerSucces,
  registerError,
  loginRequest,
  loginSucces,
  loginError,
  logoutRequest,
  logoutSucces,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSucces,
  getCurrentUserError,
};
