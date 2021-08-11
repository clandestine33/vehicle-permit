import {
    SET_COURSES,
} from '../actions/actionTypes';

const initialState = {
    courses: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSES:
            return {
                ...state,
                courses: [
                    ...action.courses
                ],
            };
        default:
            return state;
    }
};