import { CLEANUP, ERROR, GET_REVIEW_SUCCESS, LOADING } from "../actionType";

const initalState = {
  loading: false,
  error: "",
  reviews: [],
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
    case GET_REVIEW_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        reviews: payload,
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
