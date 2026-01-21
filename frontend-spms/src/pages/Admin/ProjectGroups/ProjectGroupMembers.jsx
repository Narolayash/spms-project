import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectGroupMembers = () => {
  const navigate = useNavigate();

  const members = [
    { id: 1, name: "Amit Patel", cgpa: 8.2, leader: true },
    { id: 2, name: "Riya Shah", cgpa: 7.9, leader: false },
    { id: 3, name: "Karan Mehta", cgpa: 8.0, leader: false },
  ];

  return (
    <>
      <h3>Project Group Members</h3>

      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>CGPA</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {members.map((m, i) => (
            <tr key={m.id}>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td>{m.cgpa}</td>
              <td>
                {m.leader ? (
                  <span className="badge bg-success">Leader</span>
                ) : (
                  <span className="badge bg-secondary">Member</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};

export default ProjectGroupMembers;
