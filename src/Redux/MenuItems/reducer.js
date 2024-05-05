import {
  CLEANUP,
  ERROR,
  FETCH_MENU_ITEM_FAILURE,
  FETCH_MENU_ITEM_REQUEST,
  FETCH_MENU_ITEM_SUCCESS,
  GOT_ITEMS_INGREDIANTS,
  LOADING,
} from "../actionType";

const initalState = {
  loading: false,
  error: "",
  items: {},
  menuItem: [],
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
    case GOT_ITEMS_INGREDIANTS:
      return {
        ...state,
        error: "",
        isLoading: false,
        items: payload,
      };
    case CLEANUP:
      return {
        ...state,
        isLoading: false,
        error: "",
        // items: {},
      };

    case FETCH_MENU_ITEM_REQUEST:
      return { ...state, loading: true, error: payload };
    case FETCH_MENU_ITEM_SUCCESS:
      return { ...state, menuItem: payload, loading: false, error: false };
    case FETCH_MENU_ITEM_FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
