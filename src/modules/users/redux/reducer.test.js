import actionTypes from '../../../common/constants/actionTypes';
import usersList from './reducer';

const list = [
  { id: 'd1wy', name: 'Anthony' },
  { id: 'e2wh', name: 'Bob' },
  { id: 'f3wq', name: 'David' },
  { id: 'c4we', name: 'Mark' },
  { id: 'z5wd', name: 'Jim' },
];

describe('UsersList reducer', () => {
  it('LOAD_USERS_LIST_SUCCESS should load list of users', () => {
    const result = usersList([], { type: actionTypes.LOAD_USERS_LIST_SUCCESS, payload: { usersList: [...list] } });
    expect(result).toEqual([...list]);
  });

  it('REMOVE_USER_BY_ID should remove user by ID', () => {
    const userId = 'd1wy';
    const result = usersList([...list], { type: actionTypes.REMOVE_USER_BY_ID, payload: { id: userId } });
    expect(result).toEqual([...list].filter(user => user.id !== userId));
  });

  it('should return default state if type doe not exist', () => {
    const result = usersList([], { type: 'SOME_TYPE' });
    expect(result).toEqual([]);
  });
});
