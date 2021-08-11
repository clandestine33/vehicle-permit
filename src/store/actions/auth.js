import { SET_TOKEN } from './actionTypes';
import { userUiStartLoading, userUiStopLoading } from './ui';
import Client from '../../services/HTTPClient';
import { API_URL } from '../../util/constants';
import { authenticateUser } from '../../services/Auth';
import { getUser, setUser } from './user';
import { history } from '../../routes';
import { resetApp } from '.';

const client = new Client(API_URL);

export const setToken = (token) => {
  authenticateUser(token);
  return ({
    type: SET_TOKEN,
    token,
})
};

export const logIn = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(userUiStartLoading());
    const res = await client.post(`/login`, { email, password });

    console.log(res);
    dispatch(userUiStopLoading());
    if (res.success) {
      dispatch(setToken(res.body.token));
      await dispatch(getUser());
      history.push('/dashboard');
      return null;
    }
    // TODO --> Add retry logic using refresh token
    return res.message || 'An error occured. Try again';
  } catch (error) {
    console.log(error);
    return 'Something went wrong. Check your internet';
  }
};

export const signUp = ({ email, name, password }) => async (dispatch) => {
  try {
    dispatch(userUiStartLoading());
    const res = await client.post(`/register`, { email, name, password });
    dispatch(userUiStopLoading());
    console.log(res);
    if (res.success) {
      dispatch(setUser(res.body));
      history.push('/dashboard');
      return null;
    }
    return res.message || 'An error occured. Try again';
  } catch (error) {
    console.log(error);
    return 'Something went wrong. Check your connection.';
  }
};

export const forgotPassword = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(userUiStartLoading());
    const res = await client.post('/login', { email, password });
    dispatch(userUiStopLoading());
    if (res.success && res.data && res.data.access) {
      dispatch(setToken(res.data.access, res.data.refresh));
      await dispatch(getUser());
      history.push('/profile');
      return null;
    }
    // TODO --> Add retry logic using refresh token
    return res.message;
  } catch (error) {
    console.log(error);
    return 'Something went wrong. Check your internet';
  }
};

export const resetPassword = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(userUiStartLoading());
    const res = await client.post('/login', { email, password });
    dispatch(userUiStopLoading());
    if (res.success && res.data && res.data.access) {
      dispatch(setToken(res.data.access, res.data.refresh));
      await dispatch(getUser());
      history.push('/profile');
      return null;
    }
    // TODO --> Add retry logic using refresh token
    return res.message;
  } catch (error) {
    console.log(error);
    return 'Something went wrong. Check your internet';
  }
};

export const logOut = () => async (dispatch) => {
  try {
    dispatch(userUiStartLoading());

    dispatch(resetApp());
    dispatch(userUiStopLoading());
    return null;
  } catch (error) {
    console.log(error);
    return 'Something went wrong. Check your internet';
  }
};
