import {
  ERROR,
  GET_BURGER,
  GET_CHEESY_FUN,
  GET_DEEPING_SAUCES,
  GET_DRINKS_CAN_POP,
  GET_HOME_MADE_DRINKS,
  GET_HOUSE_OF_WINGS,
  GET_NANZA,
  GET_PASTA,
  GET_PIZZA,
  GET_SALADS,
  GET_SIDES,
  GET_SWEET_TREET,
  GET_THEEK_SHAKE,
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
    case GET_PIZZA:
      return {
        ...state,
        error: "",
        isLoading: false,
        pizza: payload,
      };
    case GET_BURGER:
      return { ...state, error: "", isLoading: false, burger: payload };
    case GET_HOUSE_OF_WINGS:
      return { ...state, error: "", isLoading: false, hos: payload };
    case GET_PASTA:
      return { ...state, error: "", isLoading: false, pasta: payload };
    case GET_NANZA:
      return { ...state, error: "", isLoading: false, nanza: payload };
    case GET_CHEESY_FUN:
      return { ...state, error: "", isLoading: false, cheesy: payload };
    case GET_SIDES:
      return { ...state, error: "", isLoading: false, sides: payload };
    case GET_SALADS:
      return { ...state, error: "", isLoading: false, salads: payload };
    case GET_SWEET_TREET:
      return { ...state, error: "", isLoading: false, sweet_treet: payload };
    case GET_DEEPING_SAUCES:
      return { ...state, error: "", isLoading: false, deeping_sauce: payload };
    case GET_THEEK_SHAKE:
      return { ...state, error: "", isLoading: false, theek_shake: payload };
    case GET_DRINKS_CAN_POP:
      return { ...state, error: "", isLoading: false, drinks_can_pop: payload };
    case GET_HOME_MADE_DRINKS:
      return { ...state, error: "", isLoading: false, home_made: payload };

    default:
      return state;
  }
};
