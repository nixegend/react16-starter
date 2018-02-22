import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import nock from 'nock';
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
    nock.cleanAll();
  });

  it('should remove user by ID', () => {
    const userId = 'd1wy';
    const store = mockStore({ usersList: [...list] });
    const expectedActions = [{ type: actionTypes.REMOVE_USER_BY_ID, payload: { id: userId } }];

    expectedActions.forEach((action) => {
      expect(isFSA(action)).toEqual(true);
    });

    return store.dispatch(removeUser(userId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should load list of users', () => {
    const store = mockStore({ usersList: [] });
    const payload = [...list];

    nock(apiConstants.API_SERVER)
      .get(`${apiConstants.USERS_URL_PART}`)
      .reply(200, payload);

    const expectedActions = [
      { type: actionTypes.LOAD_USERS_LIST_REQUEST, payload: undefined, meta: undefined },
      { type: actionTypes.LOAD_USERS_LIST_SUCCESS, payload, meta: undefined },
    ];

    expectedActions.forEach((action) => {
      expect(isFSA(action)).toEqual(true);
    });

    return store.dispatch(loadUsersList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
