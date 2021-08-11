import {USER_LOGOUT} from '../actionType';

// init state
const initState = {
  userData: {},
  isLogin: true,
};

export default reducer = (state = initState, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
        userData: {},
      };
    default:
      return state;
  }
};
