import { combineReducers } from "redux";

import { categoriesReducer } from "./Nav/reducerNav";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
})