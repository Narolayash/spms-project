import React from "react";
import { useNavigate } from "react-router-dom";

const ReportsDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Reports & Analytics</h3>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5>Project Reports</h5>
              <p>Type-wise & status-wise projects</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/admin/reports/projects")}
              >
                View
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5>Guide Reports</h5>
              <p>Guide-wise project allocation</p>
              <button
                className="btn btn-success"
                onClick={() => navigate("/admin/reports/guides")}
              >
                View
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5>Attendance Reports</h5>
              <p>Meeting attendance summary</p>
              <button
                className="btn btn-warning"
                onClick={() => navigate("/admin/reports/attendance")}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsDashboard;
