import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentAllProposals = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    // 🔴 TEMP DATA (Replace with API later)
    const data = [
      {
        proposalId: 1,
        projectGroupId: 101,
        projectTitle: "AI Attendance System",
        status: "Pending",
        submittedOn: "2026-01-10"
      },
      {
        proposalId: 2,
        projectGroupId: 102,
        projectTitle: "Online Voting System",
        status: "Approved",
        submittedOn: "2026-01-05"
      }
    ];

    setProposals(data);
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="mb-3">My Proposals</h4>

      {proposals.length === 0 ? (
        <div className="alert alert-info">
          No proposals submitted yet.
        </div>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Project Title</th>
              <th>Status</th>
              <th>Submitted On</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {proposals.map((p, index) => (
              <tr key={p.proposalId}>
                <td>{index + 1}</td>
                <td>{p.projectTitle}</td>
                <td>
                  <span
                    className={`badge ${
                      p.status === "Approved"
                        ? "bg-success"
                        : p.status === "Rejected"
                        ? "bg-danger"
                        : "bg-warning"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td>{p.submittedOn}</td>
                <td>
                <Link
                    to={`/student/project-group/${p.projectGroupId}/proposal/view`}
                    state={{ from: "/student/proposal" }}
                    className="btn btn-sm btn-primary"
                    >
                    View
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentAllProposals;
