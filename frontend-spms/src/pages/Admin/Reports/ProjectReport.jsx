import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectReport = () => {
  const navigate = useNavigate();

  const projects = [
    { type: "Major", total: 12, approved: 10, pending: 2 },
    { type: "Mini", total: 8, approved: 7, pending: 1 },
    { type: "Research", total: 5, approved: 4, pending: 1 },
  ];

  return (
    <>
      <h3>Project Report</h3>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Project Type</th>
            <th>Total</th>
            <th>Approved</th>
            <th>Pending</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p, i) => (
            <tr key={i}>
              <td>{p.type}</td>
              <td>{p.total}</td>
              <td className="text-success">{p.approved}</td>
              <td className="text-warning">{p.pending}</td>
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

export default ProjectReport;
