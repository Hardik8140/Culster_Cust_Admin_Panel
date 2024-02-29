import axios from "axios"
import { ERROR, GOT_ITEMS_INGREDIANTS } from "../actionType"
import { itemsIngrediants } from "../../data"

export const get_Ingrediants = (id) => async (dispatch) => {
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