import axios from "axios";
import {
  ERROR,
  GET_TABLE_RESERVATION_SUCCESS,
  LOADING,
  POST_TABLE_RESERVATION_SUCCESS,
} from "../actionType";

export const get_table_reservation = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/api/reservetable/list`
    );
    res = res.data;
    console.log(res.data);
    if (res.success) {
      dispatch({ type: GET_TABLE_RESERVATION_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const post_table_reservation_status =
  (status, id) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let res = await axios.post(
        `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/api/reservetable/update/status?reserveTableId=${id}&status=${status}`
      );
      res = res.data;
      console.log(res.data);
      if (res.success) {
        dispatch({ type: POST_TABLE_RESERVATION_SUCCESS, payload: res.data });
        dispatch(get_table_reservation());
      } else {
        dispatch({ type: ERROR, payload: res.message });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
