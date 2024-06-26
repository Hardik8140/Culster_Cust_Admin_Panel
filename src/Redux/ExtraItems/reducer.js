import {
  CLEANUP,
  DELETE_EXTRA_ITEM_TOPPINGS_SUCCESS,
  ERROR,
  GET_EXTRA_ITEM_DRIZZLE_SUCCESS,
  GET_EXTRA_ITEM_TOPPINGS_SUCCESS,
  LOADING,
  POSTED_TOPPINGS,
} from "../actionType";

const initalState = {
  loading: false,
  error: "",
  toppings: [],
  drizzles: [],
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
    case GET_EXTRA_ITEM_TOPPINGS_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        toppings: payload,
      };
    case GET_EXTRA_ITEM_DRIZZLE_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        drizzles: payload,
      };
    case DELETE_EXTRA_ITEM_TOPPINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        toppings: state.toppings.filter((topping) => topping.id !== payload),
      };
    case POSTED_TOPPINGS:
      return {
        ...state,
        error: "",
        isLoading: false,
        toppings: payload,
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
