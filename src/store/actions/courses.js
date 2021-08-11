import {
    SET_COURSES
} from './actionTypes';
import {
    coursesUiStartLoading,
    coursesUiStopLoading
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

export const setCourses = courses => ({
    type: SET_COURSES,
    courses,
});

export const getCourses = () => async (dispatch) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(coursesUiStartLoading());
        const res = await client.get(`/courses`);

        console.log(res);

        dispatch(coursesUiStopLoading());
        if (res.success) {
            dispatch(setCourses(res.body));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(coursesUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};

export const createCourse = ({ title, code, areasOfSpecialization, department }) => async (dispatch, getState) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        areasOfSpecialization = areasOfSpecialization.map(elem => getState().specializations.specializationsMap[elem])

        dispatch(coursesUiStartLoading());
        const res = await client.post(`/courses`, { title, code, areasOfSpecialization, department });
        console.log(res);

        dispatch(coursesUiStopLoading());
        if (res.success) {
            dispatch(setCourses([...getState().courses.courses, res.body]));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(coursesUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};

export const deleteCourse = (id) => async (dispatch, getState) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(coursesUiStartLoading());
        const res = await client.delete(`/courses/${id}`);
        console.log(res);

        dispatch(coursesUiStopLoading());
        if (!res.error) {
            let courses = getState().courses.courses;
            courses = courses.filter(elem => elem._id !== id);
            dispatch(setCourses(courses));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(coursesUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};