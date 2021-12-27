import {
  EVENTS_LOADING,
  EVENTS_SET,
  EVENTS_ERROR,
  SELECTED_EVENT,
} from "./actions";

const DATA_LOADING = "DATA_LOADING";
const DATA_SET = "DATA_SET";
const DATA_ERROR = "DATA_ERROR";

const initialState = {
  status: null,
  events: [],
  selectedEvents: [],
  coordsSelectedEvents: []
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_LOADING: {
      return { ...state, status: DATA_LOADING };
    }
    case EVENTS_SET: {
      return { ...state, status: DATA_SET, events: action.events };
    }
    case EVENTS_ERROR: {
      return { ...state, status: DATA_ERROR };
    }
    case SELECTED_EVENT: {
      const allEvents = state.events;
      const selectedEvents = allEvents.filter((item) => {
        return action.event === item.categories[0].title;
      });
      const coordsArr = selectedEvents.map((item) => {
        return item.geometry[0].coordinates;
      });
      return { ...state, selectedEvents: selectedEvents, coordsSelectedEvents: coordsArr };
    }
    default: {
      return state;
    }
  }
};
