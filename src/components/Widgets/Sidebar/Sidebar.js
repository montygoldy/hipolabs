import React from "react";
import { Link } from "react-router-dom";

const RenderSidebar = ({ sidebarType, venueTips }) => {
  console.log(venueTips.tips)
  let template = null;
  switch (sidebarType) {
    case "recent-search":
    template =  <aside className="sidebar">
                  <h3>Recent Searches</h3>
                  <ul className="sidebar__list">
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                    <li className="sidebar__listItem">
                      <Link to="#" className="sidebar__listItemLink">
                        Pizza in kadikoy
                      </Link>
                    </li>
                  </ul>
                </aside>
    break;

    case "tips":
    template = <aside className="sidebar tips-sidebar">
        <h3>Tips</h3>
        <ul className="sidebar__list">
          <li className="sidebar__listItem">
            <Link to="#" className="sidebar__listItemLink">
              <div className="left">
                <img src="/image/background.jpg" alt="Tips" className="tips-image" />
              </div>
              <div className="right">
                <p>{venueTips.tips}</p>
                <h4>Arzu sendag</h4>
                <p>guzei mekan cok serdim.</p>
              </div>
            </Link>
          </li>
        </ul>
        <Link to="#" className="allTips">
          All Tips
        </Link>
      </aside>;
    break;

    default:
      template = null;
      break;
  }
  return template;
}
  
const Sidebar = ({ type, venueDetail }) => {
  return  <RenderSidebar sidebarType={type} venueTips={venueDetail} />

}

export default Sidebar;