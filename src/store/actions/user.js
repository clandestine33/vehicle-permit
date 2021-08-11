import {
  SET_USER
} from './actionTypes';
import {
  userUiStartLoading,
  userUiStopLoading
} from './ui';
import Client from '../../services/HTTPClient';
import {
  API_URL
} from '../../util/constants';
import {
  getAuthorizationHeader,
} from '../../services/Auth';
import { resetApp } from '.';

export const setUser = user => ({
  type: SET_USER,
  user,
});

export const getUser = () => async (dispatch) => {
  try {
    const headers = {
      Authorization: getAuthorizationHeader()
    };
    const client = new Client(API_URL, headers);

    dispatch(userUiStartLoading());
    const res = await client.get(`/profile`);
    console.log(res);

    dispatch(userUiStopLoading());
    if (res.success) {
      dispatch(setUser(res.body));
      return null;
    }
    if (res.status === 401) {
      dispatch(resetApp())
      return 0;
    }

    return res.message;
  } catch (error) {
    dispatch(userUiStopLoading());
    return 'Something went wrong. Check your connection.';
  }
};