import React from "react";
import { useNavigate } from "react-router-dom";

const AttendanceReport = () => {
  const navigate = useNavigate();

  const attendance = [
    { group: "AI Innovators", meetings: 5, avg: "92%" },
    { group: "Web Wizards", meetings: 4, avg: "88%" },
    { group: "Data Masters", meetings: 3, avg: "90%" },
  ];

  return (
    <>
      <h3>Attendance Report</h3>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Project Group</th>
            <th>Total Meetings</th>
            <th>Average Attendance</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((a, i) => (
            <tr key={i}>
              <td>{a.group}</td>
              <td>{a.meetings}</td>
              <td>{a.avg}</td>
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

export default AttendanceReport;
