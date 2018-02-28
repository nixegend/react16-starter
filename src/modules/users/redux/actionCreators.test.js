import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import fetchMock from 'fetch-mock';
import { isFSA } from 'flux-standard-action';
import * as apiConstants from '../../../common/constants/apiConstants';
import actionTypes from '../../../common/constants/actionTypes';
import { removeUser, loadUsersList } from './actionCreators';

const middlewares = [thunk, apiMiddleware];
const mockStore = configureMockStore(middlewares);

const list = [
  { id: 'd1wy', name: 'Anthony' },
  { id: 'e2wh', name: 'Bob' },
  { id: 'f3wq', name: 'David' },
  { id: 'c4we', name: 'Mark' },
  { id: 'z5wd', name: 'Jim' },
];

describe('Users > actionCreators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('should remove user by ID', () => {
    const userId = 'd1wy';
    const store = mockStore({});
    const expectedActions = [{ type: actionTypes.REMOVE_USER_BY_ID, payload: { id: userId } }];

    expectedActions.forEach((action) => {
      expect(isFSA(action)).toEqual(true);
    });

    store.dispatch(removeUser(userId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('should load list of users', () => {
    const payload = [...list];

    fetchMock.getOnce(apiConstants.LOAD_USERS_LIST, { body: payload });

    const expectedActions = [
      { type: actionTypes.LOAD_USERS_LIST_REQUEST, payload: undefined, meta: undefined },
      { type: actionTypes.LOAD_USERS_LIST_SUCCESS, payload: { usersList: payload }, meta: undefined },
    ];

    expectedActions.forEach((action) => {
      expect(isFSA(action)).toEqual(true);
    });

    const store = mockStore({ usersList: [] });

    return store.dispatch(loadUsersList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
