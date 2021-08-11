import {
    SET_SPECIALIZATIONS,
} from '../actions/actionTypes';

const initialState = {
    specializations: [],
    specializationsMap: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SPECIALIZATIONS:
            const specializationsMap = {}
            for (let i = 0; i < action.specializations.length; i++) {
                let spec = action.specializations[i];
                specializationsMap[spec.name] = spec._id
            }
            return {
                ...state,
                specializations: [
                    ...action.specializations
                ],
                specializationsMap,
            };
        default:
            return state;
    }
};