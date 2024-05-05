import {
  ASSIGN_DELIVERY_BOY,
  ERROR,
  GET_DELIVERY_BOY,
  LOADING,
} from "../actionType";

const initalState = {
  loading: false,
  error: "",
  delivery_boy: [],
  assign_boy: [],
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
    case GET_DELIVERY_BOY:
      return {
        ...state,
        isLoading: false,
        error: "",
        delivery_boy: payload,
      };
    case ASSIGN_DELIVERY_BOY:
      return {
        ...state,
        isLoading: false,
        error: "",
        assign_boy: payload,
      };
    default:
      return state;
  }
};
