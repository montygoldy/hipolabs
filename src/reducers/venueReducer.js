import {  FETCH_VENUE,  SEARCH_VENUES,  FETCH_VENUE_REQUESTED } from "../actions/types";

const initialState = {
  venues: [],
  venue: {},
  isLoading: false
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
  }
}

export default venueReducer;