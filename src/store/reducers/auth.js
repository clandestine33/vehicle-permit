import {
  SET_TOKEN,
} from '../actions/actionTypes';

const initialState = {
  token: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
