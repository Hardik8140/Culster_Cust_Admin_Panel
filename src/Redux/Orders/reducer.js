import { ERROR, GET_ALL_ORDERS, LOADING } from "../actionType";

const initalState = {
  loading: false,
  error: "",
  orders: [],
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
    case GET_ALL_ORDERS:
      return {
        ...state,
        isLoading: false,
        error: "",
        orders: payload,
      };
    default:
      return state;
  }
};
