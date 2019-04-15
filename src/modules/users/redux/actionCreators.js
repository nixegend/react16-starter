import { RSAA, getJSON } from 'redux-api-middleware';
import actionTypes from '@constants/action-types';
import api from '@constants/api-urls';

export const removeUser = id => ({
  type: actionTypes.REMOVE_USER_BY_ID,
  payload: { id }
});

export const loadUsersList = () => ({
  [RSAA]: {
    method: 'GET',
    credentials: 'include',
    endpoint: api.LOAD_USERS_LIST,
    types: [
      actionTypes.LOAD_USERS_LIST_REQUEST,
      {
        type: actionTypes.LOAD_USERS_LIST_SUCCESS,
        payload: (action, state, res) => getJSON(res).then(json => ({ usersList: json }))
      },
      actionTypes.LOAD_USERS_LIST_FAILURE
    ]
  }
});
