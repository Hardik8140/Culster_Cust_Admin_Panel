import axios from "axios";
import { ERROR, GET_SUPPORT_SUCCESS, LOADING } from "../actionType";

export const get_support = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/api/customer/support`
    );
    res = res.data;
    console.log(res.data);
    if (res.success) {
      dispatch({ type: GET_SUPPORT_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
