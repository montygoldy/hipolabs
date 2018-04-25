import { FETCH_VENUE, SEARCH_VENUES, FETCH_VENUE_REQUESTED, RECENT_SEARCHES } from "./types";
const api_id = process.env.REACT_APP_CLIENT_ID;
const api_key = process.env.REACT_APP_CLIENT_SECRET;

export const fetchVenues = (place, location) => dispatch => {
  dispatch({ type: FETCH_VENUE_REQUESTED })
  dispatch({ type: RECENT_SEARCHES, payload: { place, location } })
  fetch(`https://api.foursquare.com/v2/venues/explore?near=${location}&query=${place}&limit=10&venuePhotos=1&client_id=${api_id}&client_secret=${api_key}&v=20180422`)
    .then(res => res.json())
    .then(data => data.response.groups[0].items.map(item => {
        return dispatch({
          type: SEARCH_VENUES,
          payload: data.response.groups[0].items
        });
      }))

    .catch(err => console.log(err));
};

export const fetchVenueDetail = venueId => dispatch => {
  dispatch({ type: FETCH_VENUE_REQUESTED });
  fetch(
    `https://api.foursquare.com/v2/venues/${venueId}?client_id=${api_id}&client_secret=${api_key}&v=20180422`
  )
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_VENUE, payload: data.response.venue }))
    .catch(err => console.log(err));
};


