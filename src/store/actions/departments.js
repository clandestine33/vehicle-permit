import {
    SET_DEPARTMENTS
} from './actionTypes';
import {
    departmentsUiStartLoading,
    departmentsUiStopLoading
} from './ui';
import Client from '../../services/HTTPClient';
import {
    API_URL
} from '../../util/constants';
import {
    getAuthorizationHeader,
} from '../../services/Auth';
import {
    resetApp
} from '.';

export const setDepartments = departments => ({
    type: SET_DEPARTMENTS,
    departments,
});

export const getDepartments = () => async (dispatch) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(departmentsUiStartLoading());
        const res = await client.get(`/departments`);

        console.log(res);

        dispatch(departmentsUiStopLoading());
        if (res.success) {
            dispatch(setDepartments(res.body));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(departmentsUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};
