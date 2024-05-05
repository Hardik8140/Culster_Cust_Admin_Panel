import { CLEANUP, ERROR, LOADING, LOGIN_SUCCESS } from "../actionType";

const initalState = {
  loading: false,
  error: "",
  isAuth: false,
  accessToken: "",
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        isAuth: true,
        accessToken: payload,
      };
    case CLEANUP:
      return {
        ...state,
        isLoading: false,
        error: "",
      };

    default:
      return state;
  }
};
