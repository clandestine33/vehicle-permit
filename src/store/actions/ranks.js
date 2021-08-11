import {
    SET_RANKS
} from './actionTypes';
import {
    ranksUiStartLoading,
    ranksUiStopLoading
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

export const setRanks = ranks => ({
    type: SET_RANKS,
    ranks,
});

export const getRanks = () => async (dispatch) => {
    try {
        const headers = {
            Authorization: getAuthorizationHeader()
        };
        const client = new Client(API_URL, headers);

        dispatch(ranksUiStartLoading());
        const res = await client.get(`/lecturer-titles`);

        console.log(res);

        dispatch(ranksUiStopLoading());
        if (res.success) {
            dispatch(setRanks(res.body));
            return null;
        }
        if (res.status === 401) {
            dispatch(resetApp())
            return 0;
        }

        return res.message;
    } catch (error) {
        dispatch(ranksUiStopLoading());
        return 'Something went wrong. Check your connection.';
    }
};

// export const createRank = (name, level) => async (dispatch) => {
//     try {
//         const headers = {
//             Authorization: getAuthorizationHeader()
//         };
//         const client = new Client(API_URL, headers);

//         dispatch(ranksUiStartLoading());
//         const res = await client.post('/ranks', { name, level });
//         console.log(res);

//         dispatch(ranksUiStopLoading());
//         if (res.success && res.data) {
//             // dispatch(setRanks(res.data));
//             return null;
//         }
//         if (res.status === 401) {
//             dispatch(resetApp())
//             return 0;
//         }

//         return res.message;
//     } catch (error) {
//         dispatch(ranksUiStopLoading());
//         return 'Something went wrong. Check your connection.';
//     }
// };

// export const deleteRank = (id) => async (dispatch) => {
//     try {
//         const headers = {
//             Authorization: getAuthorizationHeader()
//         };
//         const client = new Client(API_URL, headers);

//         dispatch(ranksUiStartLoading());
//         const res = await client.delete(`/ranks/${id}`);
//         console.log(res);

//         dispatch(ranksUiStopLoading());
//         if (res.success && res.data) {
//             // dispatch(setRanks(res.data));
//             return null;
//         }
//         if (res.status === 401) {
//             dispatch(resetApp())
//             return 0;
//         }

//         return res.message;
//     } catch (error) {
//         dispatch(ranksUiStopLoading());
//         return 'Something went wrong. Check your connection.';
//     }
// };