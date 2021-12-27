import isoFetch from "isomorphic-fetch";

export const EVENTS_LOADING = "EVENTS_LOADING";
export const EVENTS_SET = "EVENTS_SET";
export const EVENTS_ERROR = "EVENTS_ERROR";
export const SELECTED_EVENT = "SELECTED_EVENT";

const eventsLoadingAC = () => {
  return {
    type: EVENTS_LOADING,
  };
};
const eventsSetAC = (event) => {
  return {
    type: EVENTS_SET,
    events: event,
  };
};
const eventsErrorAC = () => {
  return {
    type: EVENTS_ERROR,
  };
};

export const eventsThunkAC = () => (dispatch) => {
  dispatch(eventsLoadingAC);
  isoFetch("https://eonet.gsfc.nasa.gov/api/v3/events")
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
      dispatch(eventsSetAC(data.events));
    })
    .catch((error) => {
      console.error(error);
      dispatch(eventsErrorAC);
    });
};

export const selectedEventAC = (event) => {
  return {
    type: SELECTED_EVENT,
    event: event,
  };
};

