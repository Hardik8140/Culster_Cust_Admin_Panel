import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { reducer as menuItemsReducer } from "./MenuItems/reducer";
import { reducer as extraItemsReducer } from "./ExtraItems/reducer";
import { reducer as reviewReducer } from "./Customer Review/reducer";
import { reducer as supportReducer } from "./Customer_Support/reducer";
import { reducer as reserveTableReducer } from "./Table Reservation/reducer";
import { reducer as timeReducer } from "./TIme Manage/reducer";

const rootReducer = combineReducers({
  menuItemsReducer,
  extraItemsReducer,
  reviewReducer,
  supportReducer,
  reserveTableReducer,
  timeReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
