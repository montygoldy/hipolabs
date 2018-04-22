import { FETCH_VENUE, SEARCH_VENUES } from '../actions/types';

const initialState = {
  venues: [],
  venue: {}
}

const venueReducer = (state= initialState, action) => {
  switch(action.type) {
    case SEARCH_VENUES:
      return {
        ...state, venues: action.payload
      }  
    
    case FETCH_VENUE:
      return {
        ...state, venue: action.payload
      }
    default:
      return state;
  }
}

export default venueReducer;