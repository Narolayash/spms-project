import React from "react";

const StudentNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top px-3">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
                SPMS - Student Panel
            </span>
            <div className="d-flex align-items-center gap-3">
                <span className="text-white">Student</span>
                <button className="btn btn-outline-light btn-sm">
                    Logout
                </button>
            </div>
        </div>
    </nav>
  );
};

export default StudentNavbar;
