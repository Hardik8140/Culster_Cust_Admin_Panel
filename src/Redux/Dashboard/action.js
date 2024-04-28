import axios from "axios";
import { ERROR, LOADING, GET_DASHBOARD_DATA } from "../actionType";
import { backendAPI } from "../../data";

export const get_Dashboard = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(`${backendAPI}admin/dashboard`);
    console.log(res.data.data);
    res = res.data;
    if (res.success) {
      dispatch({ type: GET_DASHBOARD_DATA, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
