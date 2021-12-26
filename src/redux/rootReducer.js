import { combineReducers } from "redux";

import { categoriesReducer } from "./Categories/reducer";
import { eventsReducer } from "./Events/reducer";


export const rootReducer = combineReducers({
  categories: categoriesReducer,
  events: eventsReducer,
});
