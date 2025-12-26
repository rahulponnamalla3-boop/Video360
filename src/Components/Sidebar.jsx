import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCloudArrowUp,
  faGear,
  faHome,
  faTableList,
  faUsers,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import "../Styles/Sidebar.css";

const Sidebar = ({ collapsed, overlay, active }) => {
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <div
      className={`sidebar ${overlay ? "sidebar-overlay" : "sidebar-fixed"} ${
        collapsed ? "collapsed" : ""
      } ${active ? "active" : ""}`}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/Home" className="sidebar-link">
            <FontAwesomeIcon icon={faHome} />
            {!collapsed && <span>Home</span>}
          </Link>
        </li>

        <li>
          <Link to="/Channels" className="sidebar-link">
            <FontAwesomeIcon icon={faUsers} />
            {!collapsed && <span>Channels</span>}
          </Link>
        </li>

        <li>
          <Link to="/Uploadvideo" className="sidebar-link">
            <FontAwesomeIcon icon={faCloudArrowUp} />
            {!collapsed && <span>Upload Video</span>}
          </Link>
        </li>

        <li>
          <Link to="/Uploadingdetails" className="sidebar-link">
            <FontAwesomeIcon icon={faCloudArrowUp} />
            {!collapsed && <span>Upload Video</span>}
          </Link>
        </li>


        {/* ================== MAIN DROPDOWN ================== */}
        <li>
          <button
            className="dropdown-btn"
            onClick={() => setOpenCategory(!openCategory)}
            aria-controls="category-collapse"
            aria-expanded={openCategory}
          >
            <div className="left-content">
              <FontAwesomeIcon icon={faTableList} />
              {!collapsed && <span>Categories</span>}
            </div>
            {!collapsed && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`dropdown-icon ${openCategory ? "rotate" : ""}`}
              />
            )}
          </button>

          <Collapse in={openCategory}>
            <ul id="category-collapse" className="dropdown-container">
              <li>
                <Link to="/categories" className="sidebar-sublink">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/categories" className="sidebar-sublink">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/categories" className="sidebar-sublink">
                  Travel
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        {/* ================== END DROPDOWN ================== */}

        <li>
          <Link to="/Watchlater" className="sidebar-link">
            <FontAwesomeIcon icon={faClock} />
            {!collapsed && <span>Watch Later</span>}
          </Link>
        </li>

        <li>
          <Link to="/Settings" className="sidebar-link">
            <FontAwesomeIcon icon={faGear} />
            {!collapsed && <span>Settings</span>}
          </Link>
        </li>

        <li>
          <Link to="/Myaccount" className="sidebar-link">
            <FontAwesomeIcon icon={faCircleUser} />
            {!collapsed && <span>My Account</span>}
          </Link>
        </li>

        <hr />

        <li>
          <h6 className="ps-4">SUBSCRIPTION</h6>
          <Link to="/Subscription" className="sidebar-link">
            <img className="sub-img" src="images/Rocket.jpg" alt="logo" />
            {!collapsed && <span>Your Life</span>}
          </Link>
        </li>

        <li>
          <Link to="/Subscription" className="sidebar-link">
            <img className="sub-img" src="images/Women.jpg" alt="logo" />
            {!collapsed && <span>Unboxing</span>}
          </Link>
        </li>

        <li>
          <Link to="/Subscription" className="sidebar-link">
            <img className="sub-img" src="images/Service.jpg" alt="logo" />
            {!collapsed && <span>Product/Service</span>}
          </Link>
        </li>

        <li>
          <Link to="/Subscription" className="sidebar-link">
            <img className="sub-img" src="images/Gaming.jpg" alt="logo" />
            {!collapsed && <span>Gaming</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
