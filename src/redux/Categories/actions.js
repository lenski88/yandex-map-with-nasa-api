import isoFetch from "isomorphic-fetch";

export const CATEGORIES_LOADING = "CATEGORIES_LOADING";
export const CATEGORIES_SET = "CATEGORIES_SET";
export const CATEGORIES_ERROR = "CATEGORIES_ERROR";

const categoriesLoadingAC = () => {
  return {
    type: CATEGORIES_LOADING,
  };
};
const categoriesSetAC = (categories) => {
  return {
    type: CATEGORIES_SET,
    categories: categories,
  };
};
const categoriesErrorAC = () => {
  return {
    type: CATEGORIES_ERROR,
  };
};

export const categoriesThunkAC = () => (dispatch) => {
  dispatch(categoriesLoadingAC);
  isoFetch("https://eonet.gsfc.nasa.gov/api/v2.1/categories")
    .then((response) => {
      if (!response.ok) {
        let Err = new Error(`fetch error ${response.status}`);
        Err.message = "Communication error";
        throw Err;
      } else {
        return response.json();
      }
    })
    .then((data) => {
      dispatch(categoriesSetAC(data.categories));
    })
    .catch((error) => {
      console.error(error);
      dispatch(categoriesErrorAC);
    });
};
