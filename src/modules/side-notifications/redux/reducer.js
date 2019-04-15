// import { v4 } from 'uuid';
import actionTypes from '../../../common/constants/action-types';

// const initialState = [
//   { id: v4(), type: 'info', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
//   { id: v4(), type: 'warning', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
//   { id: v4(), type: 'error', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
// ];

const sideNotifications = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SIDE_NOTIFICATION_SHOW:
      return [action.payload, ...state];

    case actionTypes.SIDE_NOTIFICATION_CLOSE:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default sideNotifications;
