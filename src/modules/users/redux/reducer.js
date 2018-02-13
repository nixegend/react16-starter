import actionTypes from '../../../common/constants/actionTypes';

const usersList = (state = [], action) => {
  switch (action.type) {
    case actionTypes.REMOVE_USER_BY_ID:
      return state.filter(user => user.id !== action.payload.id);

    case actionTypes.LOAD_USERS_LIST_SUCCESS:
      return action.payload.usersList;

    default:
      return state;
  }
};

export default usersList;
