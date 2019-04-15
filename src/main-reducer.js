import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './modules/users/redux/reducer';
import common from './common/redux/reducer';
import sideNotifications from './modules/side-notifications/redux/reducer';

export default combineReducers({
  users,
  common,
  sideNotifications,
  routing: routerReducer
});
