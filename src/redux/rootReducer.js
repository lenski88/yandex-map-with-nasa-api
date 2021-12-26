import { combineReducers } from "redux";

import { categoriesReducer } from "./Categories/reducer";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
})