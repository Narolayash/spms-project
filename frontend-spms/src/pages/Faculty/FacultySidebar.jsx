import React from "react";
import { NavLink } from "react-router-dom";

const FacultySidebar = () => {
  return (
    <div
      className="position-fixed top-0 start-0 bg-light border-end vh-100 overflow-auto"
      style={{ width: "240px", marginTop: "56px" }}
    >
      <ul className="nav flex-column p-3 gap-2">

        <li className="nav-item">
          <NavLink className="nav-link" to="/faculty/dashboard">
            Dashboard
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/faculty/profile">
            My Profile
          </NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink className="nav-link" to="/faculty/project-groups">
            Assigned Project Groups
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/faculty/meetings">
            Meetings
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/faculty/reports">
            Reports
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default FacultySidebar;
