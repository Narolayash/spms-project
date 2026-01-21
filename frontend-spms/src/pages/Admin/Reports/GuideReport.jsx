import React from "react";
import { useNavigate } from "react-router-dom";

const GuideReport = () => {
  const navigate = useNavigate();

  const guides = [
    { name: "Dr. Raj Sharma", projects: 5 },
    { name: "Prof. Neha Mehta", projects: 4 },
    { name: "Dr. Amit Verma", projects: 3 },
  ];

  return (
    <>
      <h3>Guide-wise Project Report</h3>

      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Guide Name</th>
            <th>Total Projects</th>
          </tr>
        </thead>

        <tbody>
          {guides.map((g, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{g.name}</td>
              <td>{g.projects}</td>
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

export default GuideReport;
