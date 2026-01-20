import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // 🔴 Dummy data (API later)
  const stats = {
    groups: 1,
    proposals: 2,
    meetings: 3,
    documents: 5
  };

  return (
    <div className="container mt-4">

      {/* 👋 Welcome */}
      <div className="mb-4">
        <h3>Welcome, Student 👋</h3>
        <p className="text-muted">
          Manage your project, proposals, meetings, and documents
        </p>
      </div>

      {/* 📊 STATS CARDS */}
      <div className="row g-3">

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h6>My Project Groups</h6>
            <h3>{stats.groups}</h3>
            <button
              className="btn btn-sm btn-outline-primary mt-2"
              onClick={() => navigate("/student/project-group")}
            >
              View
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h6>My Proposals</h6>
            <h3>{stats.proposals}</h3>
            <button
              className="btn btn-sm btn-outline-success mt-2"
              onClick={() => navigate("/student/proposal")}
            >
              View
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h6>My Meetings</h6>
            <h3>{stats.meetings}</h3>
            <button
              className="btn btn-sm btn-outline-warning mt-2"
              onClick={() => navigate("/student/meetings")}
            >
              View
            </button>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h6>My Documents</h6>
            <h3>{stats.documents}</h3>
            <button
              className="btn btn-sm btn-outline-info mt-2"
              onClick={() => navigate("/student/documents")}
            >
              View
            </button>
          </div>
        </div>

      </div>

      

    </div>
  );
};

export default StudentDashboard;
