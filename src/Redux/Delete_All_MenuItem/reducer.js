import {
  ERROR,
  DELETE_BURGER,
  DELETE_CHEESY_FUN,
  DELETE_DEEPING_SAUCES,
  DELETE_DRINKS_CAN_POP,
  DELETE_HOME_MADE_DRINKS,
  DELETE_HOUSE_OF_WINGS,
  DELETE_NANZA,
  DELETE_PASTA,
  DELETE_PIZZA,
  DELETE_SALADS,
  DELETE_SIDES,
  DELETE_SWEET_TREET,
  DELETE_THEEK_SHAKE,
  LOADING,
} from "../actionType";

const initalState = {
  loading: false,
  error: "",
  pizza: [],
  burger: [],
  hos: [],
  pasta: [],
  nanza: [],
  cheesy: [],
  sides: [],
  salads: [],
  sweet_treet: [],
  deeping_sauce: [],
  theek_shake: [],
  drinks_can_pop: [],
  home_made: [],
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
    case DELETE_PIZZA:
      return {
        ...state,
        error: "",
        isLoading: false,
        pizza: payload,
      };
    case DELETE_BURGER:
      return { ...state, error: "", isLoading: false, burger: payload };
    case DELETE_HOUSE_OF_WINGS:
      return { ...state, error: "", isLoading: false, hos: payload };
    case DELETE_PASTA:
      return { ...state, error: "", isLoading: false, pasta: payload };
    case DELETE_NANZA:
      return { ...state, error: "", isLoading: false, nanza: payload };
    case DELETE_CHEESY_FUN:
      return { ...state, error: "", isLoading: false, cheesy: payload };
    case DELETE_SIDES:
      return { ...state, error: "", isLoading: false, sides: payload };
    case DELETE_SALADS:
      return { ...state, error: "", isLoading: false, salads: payload };
    case DELETE_SWEET_TREET:
      return { ...state, error: "", isLoading: false, sweet_treet: payload };
    case DELETE_DEEPING_SAUCES:
      return { ...state, error: "", isLoading: false, deeping_sauce: payload };
    case DELETE_THEEK_SHAKE:
      return { ...state, error: "", isLoading: false, theek_shake: payload };
    case DELETE_DRINKS_CAN_POP:
      return { ...state, error: "", isLoading: false, drinks_can_pop: payload };
    case DELETE_HOME_MADE_DRINKS:
      return { ...state, error: "", isLoading: false, home_made: payload };

    default:
      return state;
  }
};
