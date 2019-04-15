import actionTypes from '../constants/action-types';
import { locales } from '../constants/common';

const initialState = {
  locale: locales.EN,
  isOpenedModalWindow: false,
  currentUserInfo: {
    name: '',
    role: '',
    surname: '',
    email: ''
  }
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_WINDOW_TOGGLE:
      return { ...state, isOpenedModalWindow: !state.isOpenedModalWindow };

    default:
      return state;
  }
};

export default common;
