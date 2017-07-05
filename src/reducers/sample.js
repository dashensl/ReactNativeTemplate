import * as actionTypes from '../constants/actionsType';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_BASE_URL:
      return { ...action.payload };
    default:
      return state;
  }
};
