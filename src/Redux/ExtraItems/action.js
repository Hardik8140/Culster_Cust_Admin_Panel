import axios from "axios";
import {
  DELETE_EXTRA_ITEM_TOPPINGS_SUCCESS,
  ERROR,
  GET_EXTRA_ITEM_DRIZZLE_SUCCESS,
  GET_EXTRA_ITEM_TOPPINGS_SUCCESS,
  LOADING,
  POSTED_TOPPINGS,
} from "../actionType";
import { backendAPI } from "../../data";

export const get_toppings = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/extraitem?extraItemId=220003`
    );
    res = res.data;
    // console.log(res.data);
    if (res.success) {
      dispatch({ type: GET_EXTRA_ITEM_TOPPINGS_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_toppings = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteextraitem?extraId=${id}`
    );
    res = res.data;
    console.log(res);
    if (res.data.success) {
      dispatch({ type: DELETE_EXTRA_ITEM_TOPPINGS_SUCCESS, payload: id });
      dispatch(get_toppings());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const get_drizzles = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/extraitem?extraItemId=220006`
    );
    res = res.data;
    console.log(res.data);
    if (res.success) {
      dispatch({
        type: GET_EXTRA_ITEM_DRIZZLE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const post_Toppings = (toppingData) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(
      `${backendAPI}admin/add/extraItem?extraItemId=220006`,
      toppingData
    );
    if (res.success) {
      dispatch({
        type: POSTED_TOPPINGS,
        payload: toppingData.toppings,
      });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const delete_drizzles = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(
      `https://ec2-54-172-26-24.compute-1.amazonaws.com:8443/admin/deleteextraitem?extraId=${id}`
    );
    res = res.data;
    console.log(res);
    if (res.success) {
      dispatch({ type: DELETE_EXTRA_ITEM_TOPPINGS_SUCCESS, payload: id });
      dispatch(get_drizzles());
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
