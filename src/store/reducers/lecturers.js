import {
    SET_LECTURERS,
} from '../actions/actionTypes';

const initialState = {
    lecturers: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LECTURERS:
            return {
                ...state,
                lecturers: [
                    ...action.lecturers
                ],
            };
        default:
            return state;
    }
};