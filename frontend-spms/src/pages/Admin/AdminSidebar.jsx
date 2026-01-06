import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      className="position-fixed top-0 start-0 bg-light border-end vh-100 overflow-auto"
      style={{ width: "240px", marginTop: "56px" }}
    >
      <ul className="nav flex-column p-3 gap-2">

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/dashboard">
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/profile">
            My Profile
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/project-types">
            Project Types
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/faculty">
            Faculty
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/students">
            Students
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/project-groups">
            Project Groups
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/meetings">
            Meetings
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/reports">
            Reports
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default AdminSidebar;
