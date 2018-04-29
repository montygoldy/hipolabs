import {
  FETCH_VENUE,
  SEARCH_VENUES,
  FETCH_VENUE_REQUESTED,
  RECENT_SEARCHES,
  FETCH_VENUE_ERROR
} from "../actions/types";

const initialState = {
  venues: [
    {
      photos: {},
      stats: {}
    }
  ],
  venue: {
    tips: {},
    bestPhoto: {},
    contact: {},
    location: {},
    categories: [],
    photos: {}
  },
  isLoading: false,
  searches: [],
  hasError: false
};

const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VENUES:
      return {
        ...state,
        venues: action.payload,
        isLoading: false,
        hasError: false
      };

    case FETCH_VENUE:
      return {
        ...state,
        venue: action.payload,
        isLoading: false,
        hasError: false
      };

    case FETCH_VENUE_REQUESTED:
      return { ...state, isLoading: true, hasError: false };

    case RECENT_SEARCHES:
      return {
        ...state,
        searches: [
          { location: action.payload.location, query: action.payload.place },
          ...state.searches
        ]
      };

    case FETCH_VENUE_ERROR:
      return { ...state, isLoading: false, hasError: true };

    default:
      return state;
  }
};

export default venueReducer;
