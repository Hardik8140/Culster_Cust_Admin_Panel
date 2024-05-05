import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { reducer as menuItemsReducer } from "./MenuItems/reducer";
import { reducer as extraItemsReducer } from "./ExtraItems/reducer";
import { reducer as reviewReducer } from "./Customer Review/reducer";
import { reducer as supportReducer } from "./Customer_Support/reducer";
import { reducer as reserveTableReducer } from "./Table Reservation/reducer";
import { reducer as timeReducer } from "./TIme Manage/reducer";
import { reducer as dashboardReducer } from "./Dashboard/reducer";
import { reducer as get_all_menuitem_reducer } from "./Get_All_MenuItems/reducer";
import { reducer as orderReducer } from "./Orders/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
const rootReducer = combineReducers({
  menuItemsReducer,
  extraItemsReducer,
  reviewReducer,
  supportReducer,
  reserveTableReducer,
  timeReducer,
  dashboardReducer,
  get_all_menuitem_reducer,
  orderReducer,
  AuthReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
