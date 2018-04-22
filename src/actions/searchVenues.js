import { FETCH_VENUE, SEARCH_VENUES } from "./types";

export const fetchVenues = (place, location) => dispatch => {
  const api_id = process.env.REACT_APP_CLIENT_ID;
  const api_key = process.env.REACT_APP_CLIENT_SECRET;
  fetch(`https://api.foursquare.com/v2/venues/search?near=${location}&query=${place}&limit=10&client_id=${api_id}&client_secret=${api_key}&v=20180323`)
    .then(res => res.json())
    .then(data => dispatch({ type: SEARCH_VENUES, payload: data.response.venues}))
    .catch(err => console.log(err));
}


