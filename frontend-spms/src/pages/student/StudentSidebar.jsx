import React from "react";
import { NavLink } from "react-router-dom";

const StudentSidebar = () => {
  return (
    <div
      className="position-fixed top-0 start-0 bg-light border-end vh-100 overflow-auto"
      style={{ width: "240px", marginTop: "56px" }}
    >
      <ul className="nav flex-column p-3 gap-2">

        <li className="nav-item">
          <NavLink className="nav-link" to="/student/dashboard">
            Dashboard
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/student/project-group">
            My Project Group
          </NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink className="nav-link" to="/student/project-group">
            My Project Group
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/student/project-details">
            Project Details
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/student/meetings">
            Meetings
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/student/documents">
            Documents
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default StudentSidebar;
