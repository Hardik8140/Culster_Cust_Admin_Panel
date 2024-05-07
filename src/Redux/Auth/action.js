import { ERROR, LOADING, LOGIN_SUCCESS } from "../actionType";
import { backendAPI } from "../../data";
import axios from "axios";
export const doLogin = (userData, handleNavigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(`${backendAPI}api/auth/signin`, userData);
    res = await res.data;
    if (res.success) {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.accessToken });
      handleNavigate();
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
