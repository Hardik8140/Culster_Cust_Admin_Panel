import {
  ACCEPT_ORDERS,
  ERROR,
  GET_ALL_ORDERS,
  GET_DETAILS_ORDERS,
  LOADING,
} from "../actionType";

const initalState = {
  loading: false,
  error: "",
  orders: [],
  detailOrders: [],
  orderStatus: [],
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
        error: false,
        orders: payload,
      };
    case GET_DETAILS_ORDERS:
      return {
        ...state,
        isLoading: false,
        error: "",
        detailOrders: payload,
      };
    case ACCEPT_ORDERS:
      const updatedDetailOrders = state.detailOrders.map((order) => {
        if (order.orderId === payload.id) {
          return {
            ...order,
            status: payload.status,
          };
        }
        return order;
      });
      return {
        ...state,
        isLoading: false,
        error: false,
        detailOrders: updatedDetailOrders,
      };
    default:
      return state;
  }
};
