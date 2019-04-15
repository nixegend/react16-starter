import { v4 } from 'uuid';
import actionTypes from '../../../common/constants/action-types';

export const closeSideNotificationById = id => ({
  type: actionTypes.SIDE_NOTIFICATION_CLOSE,
  payload: { id }
});

export const showSideNotification = (type, message) => ({
  type: actionTypes.SIDE_NOTIFICATION_SHOW,
  payload: { id: v4(), type, message }
});
