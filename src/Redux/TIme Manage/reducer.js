import {
  CLEANUP,
  ERROR,
  GET_ALL_OUTLET_SUCCESS,
  GET_OUTLET_TIME_SLOTS_SUCCESS,
  LOADING,
} from "../actionType";

const initalState = {
  loading: false,
  error: "",
  outlets: [],
  outletOnId: [],
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
    case GET_ALL_OUTLET_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        outlets: payload,
      };
    case GET_OUTLET_TIME_SLOTS_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        outletOnId: payload,
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
