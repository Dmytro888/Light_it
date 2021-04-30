import Axios from 'axios';
import {
  registerRequest,
  registerSucces,
  registerError,
  loginRequest,
  loginSucces,
  loginError,
  logoutRequest,
  logoutSucces,
  logoutError,
} from './auth-actions';

Axios.defaults.baseURL = 'https://smktesting.herokuapp.com';

const token = {
  set (token) {
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset () {
    Axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(registerRequest(credentials));
  try {
    const response = await Axios.post('/api/register/', credentials);
    token.set(response.data.token);
    if (response.data.success) {
      dispatch(registerSucces(response.data));
      return;
    }
    return;
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await Axios.post('/api/login/', credentials);

    token.set(response.data.token);
    if (response.data.success) {
      dispatch(loginSucces(response.data));
      return;
    }
    return;
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    dispatch(logoutSucces());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export { register, login, logout };
