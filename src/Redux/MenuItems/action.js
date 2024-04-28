import axios from "axios";
import {
  ADDED_NEW_PIZZA,
  ERROR,
  FETCH_MENU_ITEM_FAILURE,
  FETCH_MENU_ITEM_REQUEST,
  FETCH_MENU_ITEM_SUCCESS,
  GOT_ITEMS_INGREDIANTS,
  LOADING,
} from "../actionType";
import { itemsIngrediants, backendAPI } from "../../data";

export const get_Ingrediants = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(`${itemsIngrediants}${id}`);
    res = await res.data;
    if (res.success) {
      dispatch({ type: GOT_ITEMS_INGREDIANTS, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const getMenuItem = () => async (dispatch) => {
  dispatch({ type: FETCH_MENU_ITEM_REQUEST });
  try {
    let res = await axios.get(`${backendAPI}api/item/category`);
    dispatch({ type: FETCH_MENU_ITEM_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: FETCH_MENU_ITEM_FAILURE, payload: error.message });
  }
};

export const addNewPizza = (pizzaData, handleNavigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(`${backendAPI}admin/add/item`, pizzaData);
    res = await res.data;
    if (res.success) {
      handleNavigate();
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const updatePizza = (pizzaData) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.post(
      `${backendAPI}admin/updateitem?itemId=${pizzaData.id}`,
      pizzaData
    );
    res = await res.data;
    if (res.success) {
      // dispatch({ type: ADDED_NEW_PIZZA, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

export const deletePizza = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.delete(`${backendAPI}admin/deleteitem?itemId=${id}`);
    res = await res.data;
    if (res.success) {
      // dispatch({ type: ADDED_NEW_PIZZA, payload: res.data });
    } else {
      dispatch({ type: ERROR, payload: res.message });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};
