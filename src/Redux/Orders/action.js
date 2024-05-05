import axios from "axios";
import {
  ACCEPT_ORDERS,
  ERROR,
  GET_ALL_ORDERS,
  GET_DETAILS_ORDERS,
  LOADING,
} from "../actionType";
import Cookies from "js-cookie";

const requestData = {
  position: 1,
  maxResults: 10,
};
export const get_All_Orders = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/all/orders`,
      requestData
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_ALL_ORDERS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_Details_Orders = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/get/order/detail?orderId=${id}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_DETAILS_ORDERS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
export const accept_Orders = (id, status) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/order/update/status?orderId=${id}&orderStatus=${status}`
    );
    console.log(res.data);
    if (res.data.success) {
      dispatch({ type: ACCEPT_ORDERS, payload: { id, status } });
      if (res.data.data === "success") {
        Cookies.set(`orderStatus_${id}`, res.data.success);
      }
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
