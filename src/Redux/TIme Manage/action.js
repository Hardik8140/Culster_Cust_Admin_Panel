import axios from "axios";
import {
  ERROR,
  GET_ALL_OUTLET_SUCCESS,
  GET_OUTLET_TIME_SLOTS_SUCCESS,
  LOADING,
  POST_OUTLET_TIME_SLOTS_SUCCESS,
} from "../actionType";

export const get_all_outlets = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/api/outlet/all`
    );
    res = res.data;
    // console.log(res.data);
    if (res.success) {
      dispatch({ type: GET_ALL_OUTLET_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const fetchOutletTimeSlots = (outletId) => {
  return async (dispatch) => {
    console.log(outletId);
    dispatch({ type: LOADING });
    try {
      const response = await axios.get(
        `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/api/outlet/time/slot?outletId=${outletId}`
      );
      console.log(response.data);
      dispatch({
        type: GET_OUTLET_TIME_SLOTS_SUCCESS,
        payload: response.data.data.timeSlots,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const saveOutletTimeSlots = (outletId, timeSlots) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.post(
        `https://ec2-54-172-26-24.compute-1.amazonaws/api/outlet/save/time/slot`,
        {
          outletId,
          timeSlots,
        }
      );
      dispatch({
        type: POST_OUTLET_TIME_SLOTS_SUCCESS,
        payload: response.data.data.timeSlots,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};
