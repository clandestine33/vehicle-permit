import {
    SET_RANKS,
} from '../actions/actionTypes';

const initialState = {
    ranks: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_RANKS:
            return {
                ...state,
                ranks: [
                    ...action.ranks
                ],
            };
        default:
            return state;
    }
};