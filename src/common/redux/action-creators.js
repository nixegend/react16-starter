import { RSAA, getJSON } from 'redux-api-middleware';

import actionTypes from '../constants/action-types';
import api from '../constants/api-urls';

export const toggleModalWindow = name => ({
  type: actionTypes.MODAL_WINDOW_TOGGLE,
  payload: { name }
});

export const getCurrentUserInfo = () => ({
  [RSAA]: {
    method: 'GET',
    credentials: 'include',
    endpoint: api.CURRENT_USER,
    types: [
      actionTypes.GET_CURRENT_USER_INFO_REQUEST,
      {
        type: actionTypes.GET_CURRENT_USER_INFO_SUCCESS,
        payload: (action, state, res) => getJSON(res).then(json => json)
      },
      actionTypes.GET_CURRENT_USER_INFO_FAILURE
    ]
  }
});
