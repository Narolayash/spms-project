import React from "react";
import { useNavigate } from "react-router-dom";

function FacultyProjectGroups() {
  const navigate = useNavigate();

  const groups = [
    {
      id: 1,
      name: "Group Alpha",
      title: "AI Attendance System",
      type: "Major",
      department: "IT",
      status: "Proposal Pending",
    },
    {
      id: 2,
      name: "Group Beta",
      title: "Online Exam Portal",
      type: "Mini",
      department: "CS",
      status: "Approved",
    },
  ];

  return (
    <>
      <h3>My Project Groups</h3>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Group Name</th>
            <th>Project Title</th>
            <th>Type</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((g) => (
            <tr key={g.id}>
              <td>{g.name}</td>
              <td>{g.title}</td>
              <td>{g.type}</td>
              <td>{g.department}</td>
              <td>{g.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() =>
                    navigate(`/faculty/project-groups/${g.id}`)
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FacultyProjectGroups;
