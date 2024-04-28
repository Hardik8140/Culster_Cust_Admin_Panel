import { ERROR, LOADING, GET_DASHBOARD_DATA } from "../actionType";

const initalState = {
  loading: false,
  error: "",
  dashboard: [],
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
    case GET_DASHBOARD_DATA:
      return { ...state, loading: false, dashboard: payload, error: false };
    default:
      return state;
  }
};
