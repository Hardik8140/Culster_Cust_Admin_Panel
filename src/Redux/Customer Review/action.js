import axios from "axios";
import { ERROR, GET_REVIEW_SUCCESS, LOADING } from "../actionType";

export const get_reviews = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/api/customer/review`
    );
    res = res.data;
    console.log(res.data);
    if (res.success) {
      dispatch({ type: GET_REVIEW_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
