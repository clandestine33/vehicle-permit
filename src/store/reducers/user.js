import {
  SET_USER,
} from '../actions/actionTypes';

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: { ...action.user },
      };
    default:
      return state;
  }
};
