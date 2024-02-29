import {
  FETCH_MENU_ITEM_FAILURE,
  FETCH_MENU_ITEM_REQUEST,
  FETCH_MENU_ITEM_SUCCESS,
} from "../actionType";

const initialState = {
  menuItem: [],
  loading: false,
  error: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MENU_ITEM_REQUEST:
      return { ...state, loading: true, error: false };
    case FETCH_MENU_ITEM_SUCCESS:
      return { ...state, menuItem: payload, loading: false, error: false };
    case FETCH_MENU_ITEM_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
