import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import usersList from './modules/users/redux/reducer';

const mainReducer = combineReducers({
  usersList,
  routing: routerReducer,
});

export default mainReducer;
