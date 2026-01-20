import React from "react";
import { NavLink } from "react-router-dom";

const StudentNavbar = () => {
    // student profile
    // logout logic
    const logout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };


  return (
    <nav className="navbar navbar-dark bg-primary fixed-top px-3">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
                SPMS - Student Panel
            </span>
            <div className="d-flex align-items-center gap-3">
                {/* // my profile page ahi  thi open thase  */}
                <span className="text-white">
                    <NavLink className="nav-link" to="/student/profile" >Profile</NavLink>
                </span>
                <button className="btn btn-outline-light btn-sm" onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    </nav>
  );
};

export default StudentNavbar;
