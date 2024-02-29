import { CLEANUP, ERROR, GOT_ITEMS_INGREDIANTS, LOADING } from "../actionType"

const initalState = {
    isLoading: false,
    error: "",
    items: {}
}

export const reducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        case GOT_ITEMS_INGREDIANTS:
            return {
                ...state,
                error: "",
                isLoading: false,
                items: payload
            }
        case CLEANUP:
            return {
                ...state,
                isLoading: false,
                error: ""
            }
        default:
            return state
    }
}