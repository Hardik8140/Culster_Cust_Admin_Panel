import axios from "axios";
import { ERROR, GET_ALL_ORDERS, LOADING } from "../actionType";

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
