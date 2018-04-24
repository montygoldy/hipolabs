import React from "react";
import RenderSidebar from "./RenderSidebar";
import PropTypes from "prop-types";

const Sidebar = ({ type, venueDetail }) => {
  return  <RenderSidebar sidebarType={type} venueTips={venueDetail} />
}

Sidebar.propTypes = {
  type: PropTypes.string.isRequired,
  venueDetail: PropTypes.object.isRequired
}


export default Sidebar;