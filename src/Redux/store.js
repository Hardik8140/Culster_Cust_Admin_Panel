import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { reducer as menuItemsReducer } from "./MenuItems/reducer";
const rootReducer = combineReducers({
    menuItemsReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
