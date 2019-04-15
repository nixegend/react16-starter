import { showSideNotification } from '../../modules/side-notifications/redux/action-creators';
import { apiNotificationsTypes } from '../constants/common';
import { translate } from '../utils/base-helper';

export const getMessage = (payload, locale) => {
  const response = payload.response;

  if (response && Array.isArray(response.errors) && response.errors.length) {
    return translate(response.errors[0].message, locale);
  }

  if (payload.message) {
    return payload.message;
  }

  return 'Unknown error occurred';
};

export const getErrorLevel = payload => {
  const response = payload.response;

  if (response && Array.isArray(response.errors) && response.errors.length) {
    switch (response.errors[0].level) {
      case 0:
        return apiNotificationsTypes.INFO;
      case 1:
        return apiNotificationsTypes.WARNING;
      default:
        return apiNotificationsTypes.ERROR;
    }
  }

  return apiNotificationsTypes.ERROR;
};

export const isOkHttp = status => status >= 200 && status < 300;

const apiErrorMiddleware = ({ dispatch, getState }) => next => action => {
  const payload = action.payload;

  if (
    payload &&
    ((action.error && payload.status && !isOkHttp(payload.status)) ||
      payload.name === 'RequestError')
  ) {
    if (payload.status !== 401) {
      // disable notification for 401 status codes
      dispatch(
        showSideNotification(
          getErrorLevel(payload),
          getMessage(payload, getState().common.locale)
        )
      );
    }
  }

  return next(action);
};

export default apiErrorMiddleware;
