import axios from "axios";
import {
  ASSIGN_DELIVERY_BOY,
  ERROR,
  GET_DELIVERY_BOY,
  LOADING,
} from "../actionType";

export const get_delivery_boy = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/get/deliveryboy/list`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_DELIVERY_BOY, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const assign_delivery_boy = (delivery, id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/assign/deliveryboy?orderId=${id}&userId=${delivery}`
    );
    res = res.data;
    if (res.success) {
      dispatch({ type: ASSIGN_DELIVERY_BOY, payload: res });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
