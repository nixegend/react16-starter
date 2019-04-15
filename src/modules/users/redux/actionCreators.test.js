import thunk from 'redux-thunk';
import { isFSA } from 'flux-standard-action';
import configureMockStore from 'redux-mock-store';
import { apiMiddleware } from 'redux-api-middleware';
import actionTypes from '@constants/action-types';
import { removeUser, loadUsersList } from './actionCreators';

const mockStore = configureMockStore([thunk, apiMiddleware]);

const list = [
  { id: 'd1wy', name: 'Anthony' },
  { id: 'e2wh', name: 'Bob' },
  { id: 'f3wq', name: 'David' },
  { id: 'c4we', name: 'Mark' },
  { id: 'z5wd', name: 'Jim' }
];

describe('Users > actionCreators', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('should remove user by ID', () => {
    const userId = 'd1wy';
    const store = mockStore({});
    const expectedActions = [
      { type: actionTypes.REMOVE_USER_BY_ID, payload: { id: userId } }
    ];

    expectedActions.forEach(action => {
      expect(isFSA(action)).toEqual(true);
    });

    store.dispatch(removeUser(userId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should load list of users', () => {
    const response = [...list];

    fetch.mockResponseOnce(JSON.stringify(response), {
      headers: { 'Content-Type': 'application/json' }
    });

    const expectedActions = [
      {
        type: actionTypes.LOAD_USERS_LIST_REQUEST,
        payload: undefined,
        meta: undefined
      },
      {
        type: actionTypes.LOAD_USERS_LIST_SUCCESS,
        payload: { usersList: response },
        meta: undefined
      }
    ];

    expectedActions.forEach(action => {
      expect(isFSA(action)).toEqual(true);
    });

    const store = mockStore({ usersList: [] });

    return store.dispatch(loadUsersList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
