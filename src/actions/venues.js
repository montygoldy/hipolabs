import { FETCH_VENUE, SEARCH_VENUES } from "./types";
const api_id = process.env.REACT_APP_CLIENT_ID;
const api_key = process.env.REACT_APP_CLIENT_SECRET;

export const fetchVenues = (place, location) => dispatch => {
  fetch(
    `https://api.foursquare.com/v2/venues/search?near=${location}&query=${place}&limit=10&venuePhotos=1&client_id=${api_id}&client_secret=${api_key}&v=20180323`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SEARCH_VENUES,
        payload: data.response.venues
      })
    )
    .catch(err => console.log(err));
};

export const fetchVenueDetail = venueId => dispatch => {
  fetch(
    `https://api.foursquare.com/v2/venues/${venueId}?client_id=${api_id}&client_secret=${api_key}&v=20180323`
  )
    .then(res => res.json())
    .then(data => dispatch({ type: FETCH_VENUE, payload: data.response.venue }))
    .catch(err => console.log(err));
};
