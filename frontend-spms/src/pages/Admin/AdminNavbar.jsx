import React from "react";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
                SPMS - Admin Panel
            </span>

            <div className="d-flex align-items-center gap-3">
                <span className="text-white">Admin</span>
                <button className="btn btn-outline-light btn-sm">
                    Logout
                </button>
            </div>
        </div>
    </nav>
  );
};

export default AdminNavbar;
