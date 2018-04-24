import {  FETCH_VENUE,  SEARCH_VENUES,  FETCH_VENUE_REQUESTED, RECENT_SEARCHES } from "../actions/types";

const initialState = {
  venues: [],
  venue: {},
  isLoading: false,
  searches: []
}


const venueReducer = (state= initialState, action) => {
  switch(action.type) {
    case SEARCH_VENUES:
      return {
        ...state, venues: action.payload, isLoading: false
      }  
    
    case FETCH_VENUE:
      return {
        ...state, venue: action.payload, isLoading: false
      }

    case FETCH_VENUE_REQUESTED:
      return { ...state, isLoading: true  }
    default:
      return state;

    case RECENT_SEARCHES:
      return { ...state, searches: [{ location: action.payload.location, query: action.payload.place }, ...state.searches] };
  }
}

export default venueReducer;