import { history } from '../../routes';
import { removeAuthenticatedState } from '../../services/Auth';

// ui actions
export { userUiStartLoading, userUiStopLoading } from './ui';

// user actions
export { setUser, getUser } from './user';

// auth actions
export { logIn, signUp, forgotPassword, logOut, resetPassword } from './auth';

export { createCourse, getCourses, deleteCourse } from './courses';

export { createLecturer, getLecturers, deleteLecturer } from './lecturers';

export { getRanks } from './ranks';

export { getDepartments } from './departments';

export { createSpecialization, getSpecializations, deleteSpecialization } from './specializations';

export const resetApp = () => {
    return async (dispatch) => {
        removeAuthenticatedState()
        dispatch(reset());
        history.push('/');
    };
};

const reset = () => ({
    type: 'RESET_APP',
});
