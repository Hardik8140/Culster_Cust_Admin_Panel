import axios from "axios";
import {
  FETCH_MENU_ITEM_FAILURE,
  FETCH_MENU_ITEM_REQUEST,
  FETCH_MENU_ITEM_SUCCESS,
} from "../actionType";

export const getMenuItem = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MENU_ITEM_REQUEST });
    let res = await axios.get(
      `http://ec2-54-172-26-24.compute-1.amazonaws.com:8080/api/item/category`
    );
    console.log(res.data.data);
    dispatch({ type: FETCH_MENU_ITEM_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: FETCH_MENU_ITEM_FAILURE });
  }
};
