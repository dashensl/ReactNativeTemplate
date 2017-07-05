import * as actionTypes from '../constants/actionsType';

export const setBaseURL = (data) => (dispatch) => {
    dispatch({
        type: actionTypes.SET_BASE_URL,
        payload: data
    });
};
