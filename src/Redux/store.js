import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { reducer as menuItemsReducer } from "./MenuItems/reducer";
import { reducer as extraItemsReducer } from "./ExtraItems/reducer";

const rootReducer = combineReducers({
  menuItemsReducer,
  extraItemsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
