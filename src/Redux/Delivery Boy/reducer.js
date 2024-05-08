import {
  ASSIGN_DELIVERY_BOY,
  DELIVERY_BOY_UPDATED,
  ERROR,
  GET_DELIVERY_BOY,
  LOADING,
  NEW_DELIVERY_BOY_ADDED,
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
    case NEW_DELIVERY_BOY_ADDED:
      return {
        ...state,
        isLoading: false,
        error: "",
        delivery_boy: [...state.delivery_boy, payload],
      };
    case DELIVERY_BOY_UPDATED:
      const filtered = state.delivery_boy.map((item) => {
        if (item.id == payload.id) {
          return payload;
        }
        return item;
      });
      return {
        ...state,
        isLoading: false,
        error: "",
        delivery_boy: filtered,
      };
    default:
      return state;
  }
};
