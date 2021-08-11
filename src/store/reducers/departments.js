import {
    SET_DEPARTMENTS,
} from '../actions/actionTypes';

const initialState = {
    departments: [],
    departmentsMap: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DEPARTMENTS:
            const departmentsMap = {}
            for (let i = 0; i < action.departments.length; i++) {
                let dept = action.departments[i];
                departmentsMap[dept.name] = dept._id
            }
            return {
                ...state,
                departments: [
                    ...action.departments
                ],
                departmentsMap,
            };
        default:
            return state;
    }
};