import React from "react";
import RenderSidebar from "./RenderSidebar";

const Sidebar = ({ type, venueDetail }) => {
  return  <RenderSidebar sidebarType={type} venueTips={venueDetail} />
}



export default Sidebar;