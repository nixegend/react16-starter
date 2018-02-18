import { CALL_API, getJSON } from 'redux-api-middleware';
import actionTypes from '../../../common/constants/actionTypes';
import * as apiConstants from '../../../common/constants/apiConstants';

export const removeUser = (id) => ({
  type: actionTypes.REMOVE_USER_BY_ID,
  payload: { id },
});

export const loadUsersList = () => ({
  [CALL_API]: {
    method: 'GET',
    credentials: 'include', // needed if CORS
    endpoint: apiConstants.LOAD_USERS_LIST,
    types: [
      actionTypes.LOAD_USERS_LIST_REQUEST,
      {
        type: actionTypes.LOAD_USERS_LIST_SUCCESS,
        payload: (action, state, res) => getJSON(res).then(json => ({ usersList: json })),
      },
      actionTypes.LOAD_USERS_LIST_FAILURE,
    ],
  },
});
