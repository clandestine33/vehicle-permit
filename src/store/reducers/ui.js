import {
  USER_UI_START_LOADING,
  USER_UI_STOP_LOADING,
  RANKS_UI_START_LOADING,
  RANKS_UI_STOP_LOADING,
  COURSES_UI_START_LOADING,
  COURSES_UI_STOP_LOADING,
  SPECIALIZATIONS_UI_START_LOADING,
  SPECIALIZATIONS_UI_STOP_LOADING,
  LECTURERS_UI_START_LOADING,
  LECTURERS_UI_STOP_LOADING,
} from '../actions/actionTypes';

const initialState = {
  isUserLoading: false,
  isRanksLoading: false,
  isSpecializationsLoading: false,
  isCoursesLoading: false,
  isLecturersLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_UI_START_LOADING:
      return {
        ...state,
        isUserLoading: true,
      };
    case USER_UI_STOP_LOADING:
      return {
        ...state,
        isUserLoading: false,
      };
    case RANKS_UI_START_LOADING:
      return {
        ...state,
        isRanksLoading: true,
      };
    case RANKS_UI_STOP_LOADING:
      return {
        ...state,
        isRanksLoading: false,
      };
    case COURSES_UI_START_LOADING:
      return {
        ...state,
        isCoursesLoading: true,
      };
    case COURSES_UI_STOP_LOADING:
      return {
        ...state,
        isCoursesLoading: false,
      };
    case SPECIALIZATIONS_UI_START_LOADING:
      return {
        ...state,
        isSpecializationsLoading: true,
      };
    case SPECIALIZATIONS_UI_STOP_LOADING:
      return {
        ...state,
        isSpecializationsLoading: false,
      };
    case LECTURERS_UI_START_LOADING:
      return {
        ...state,
        isLecturersLoading: true,
      };
    case LECTURERS_UI_STOP_LOADING:
      return {
        ...state,
        isLecturersLoading: false,
      };
    default:
      return state;
  }
};