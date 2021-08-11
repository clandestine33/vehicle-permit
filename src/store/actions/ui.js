import {
  USER_UI_START_LOADING,
  USER_UI_STOP_LOADING,
  RANKS_UI_START_LOADING,
  RANKS_UI_STOP_LOADING,
  LECTURERS_UI_START_LOADING,
  LECTURERS_UI_STOP_LOADING,
  COURSES_UI_START_LOADING,
  COURSES_UI_STOP_LOADING,
  SPECIALIZATIONS_UI_START_LOADING,
  SPECIALIZATIONS_UI_STOP_LOADING,
  DEPARTMENTS_UI_START_LOADING,
  DEPARTMENTS_UI_STOP_LOADING
} from './actionTypes';

export const userUiStartLoading = () => ({
  type: USER_UI_START_LOADING,
});

export const userUiStopLoading = () => ({
  type: USER_UI_STOP_LOADING,
});

export const ranksUiStartLoading = () => ({
  type: RANKS_UI_START_LOADING,
});

export const ranksUiStopLoading = () => ({
  type: RANKS_UI_STOP_LOADING,
});

export const lecturersUiStartLoading = () => ({
  type: LECTURERS_UI_START_LOADING,
});

export const lecturersUiStopLoading = () => ({
  type: LECTURERS_UI_STOP_LOADING,
});

export const coursesUiStartLoading = () => ({
  type: COURSES_UI_START_LOADING,
});

export const coursesUiStopLoading = () => ({
  type: COURSES_UI_STOP_LOADING,
});

export const specializationsUiStartLoading = () => ({
  type: SPECIALIZATIONS_UI_START_LOADING,
});

export const specializationsUiStopLoading = () => ({
  type: SPECIALIZATIONS_UI_STOP_LOADING,
});

export const departmentsUiStartLoading = () => ({
  type: DEPARTMENTS_UI_START_LOADING,
});

export const departmentsUiStopLoading = () => ({
  type: DEPARTMENTS_UI_STOP_LOADING,
});