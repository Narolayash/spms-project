import React from "react";
// make common navbar

function Navbar(props) {

    return (
        <nav className="navbar navbar-dark bg-success fixed-top px-3">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    SPMS - Faculty Panel
                </span>
                <div className="d-flex align-items-center gap-3">
                    <span className="text-white">Faculty</span>
                    <button className="btn btn-outline-light btn-sm">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;