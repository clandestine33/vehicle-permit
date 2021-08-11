import {
    SET_LECTURERS
} from './actionTypes';
import {
    lecturersUiStartLoading,
    lecturersUiStopLoading
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

export const setLecturers = lecturers => ({
    type: SET_LECTURERS,
    lecturers,
});

export const getLecturers = () => async (dispatch) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(lecturersUiStartLoading());
        const res = await client.get(`/lecturers`);

        console.log(res);

        dispatch(lecturersUiStopLoading());
        if (res.success) {
            dispatch(setLecturers(res.body));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(lecturersUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};

export const createLecturer = ({ name, rank, lecturingSince, areasOfSpecialization, department }) => async (dispatch, getState) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(lecturersUiStartLoading());
        areasOfSpecialization = areasOfSpecialization.map(elem => getState().specializations.specializationsMap[elem])
        const res = await client.post(`/lecturers`, { name, title: rank, lecturingSince, areasOfSpecialization, department, designation: rank });
        console.log(res);

        dispatch(lecturersUiStopLoading());
        if (res.success) {
            dispatch(setLecturers([...getState().lecturers.lecturers, res.body]));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(lecturersUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};

export const activateLecturer = (id) => async (dispatch) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(lecturersUiStartLoading());
        const res = await client.post(`/lecturers/activate/${id}`);
        console.log(res);

        dispatch(lecturersUiStopLoading());
        if (res.success) {
            // dispatch(setLecturers(res.data));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(lecturersUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};

export const deleteLecturer = (id) => async (dispatch, getState) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(lecturersUiStartLoading());
        const res = await client.delete(`/lecturers/${id}`);
        console.log(res);

        dispatch(lecturersUiStopLoading());
        if (!res.error) {
            let lecturers = getState().lecturers.lecturers;
            lecturers = lecturers.filter(elem => elem._id !== id);
            dispatch(setLecturers(lecturers));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(lecturersUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};