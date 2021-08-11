import {
    SET_SPECIALIZATIONS
} from './actionTypes';
import {
    specializationsUiStartLoading,
    specializationsUiStopLoading
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

export const setSpecializations = specializations => ({
    type: SET_SPECIALIZATIONS,
    specializations,
});

export const getSpecializations = () => async (dispatch) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(specializationsUiStartLoading());
        const res = await client.get(`/specializations`);

        console.log(res);

        dispatch(specializationsUiStopLoading());
        if (res.success) {
            dispatch(setSpecializations(res.body));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(specializationsUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};

export const createSpecialization = ({ name, department }) => async (dispatch, getState) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(specializationsUiStartLoading());
        console.log(department);
        const res = await client.post(`/specializations`, { name, department });
        console.log(res);

        dispatch(specializationsUiStopLoading());
        if (res.success) {
            dispatch(setSpecializations([...getState().specializations.specializations, res.body]));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(specializationsUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};

export const deleteSpecialization = (id) => async (dispatch, getState) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(specializationsUiStartLoading());
        const res = await client.delete(`/specializations/${id}`);
        console.log(res);

        dispatch(specializationsUiStopLoading());
        if (!res.error) {
            let specializations = getState().specializations.specializations;
            specializations = specializations.filter(elem => elem._id !== id);
            setSpecializations(specializations);
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp());
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(specializationsUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};