import {
  CATEGORIES_LOADING,
  CATEGORIES_SET,
  CATEGORIES_ERROR,
} from "./actions";

const DATA_LOADING = "DATA_LOADING";
const DATA_SET = "DATA_SET";
const DATA_ERROR = "DATA_ERROR";

const initialState = {
  status: null,
  categories: [],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_LOADING: {
      return { ...state, status: DATA_LOADING };
    }
    case CATEGORIES_SET: {
      return { ...state, status: DATA_SET, categories: action.categories };
    }
    case CATEGORIES_ERROR: {
      return { ...state, status: DATA_ERROR };
    }
    default: {
      return state;
    }
  }
};
