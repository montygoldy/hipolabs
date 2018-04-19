import React from "react";

const VenueDetail = ({ match }) => {
  return <div>VenueDetail: {match.params.id}</div>;
};

export default VenueDetail;