import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { reducer as menuItemReducer } from "./MeniItems/reducer";

const rootReducer = combineReducers({ menuItemReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
