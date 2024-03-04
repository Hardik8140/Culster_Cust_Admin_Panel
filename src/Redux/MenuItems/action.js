import axios from "axios"
import { ERROR, FETCH_MENU_ITEM_FAILURE, FETCH_MENU_ITEM_REQUEST, FETCH_MENU_ITEM_SUCCESS, GOT_ITEMS_INGREDIANTS, LOADING } from "../actionType"
import { itemsIngrediants } from "../../data"

export const get_Ingrediants = (id) => async (dispatch) => {
    dispatch({ type: LOADING })
    try {
        let res = await axios.get(`${itemsIngrediants}${id}`)
        res = res.data;
        if (res.success) {
            dispatch({ type: GOT_ITEMS_INGREDIANTS, payload: res.data })
        } else {
            dispatch({ type: ERROR, payload: res.message })

        }
    } catch (error) {
        dispatch({ type: ERROR, payload: error.message })
    }
}

export const getMenuItem = () => async (dispatch) => {
    dispatch({ type: FETCH_MENU_ITEM_REQUEST });
    try {
        let res = await axios.get(
            `http://ec2-54-172-26-24.compute-1.amazonaws.com:8080/api/item/category`
        );
        dispatch({ type: FETCH_MENU_ITEM_SUCCESS, payload: res.data.data });
    } catch (error) {
        dispatch({ type: FETCH_MENU_ITEM_FAILURE, payload: error.message });
    }
};
