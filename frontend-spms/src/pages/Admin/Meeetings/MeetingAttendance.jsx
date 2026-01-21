import React from "react";
import { useNavigate } from "react-router-dom";

const MeetingAttendance = () => {
  const navigate = useNavigate();

  const attendance = [
    { id: 1, name: "Amit Patel", present: true },
    { id: 2, name: "Riya Shah", present: true },
    { id: 3, name: "Karan Mehta", present: false },
  ];

  return (
    <>
      <h3>Meeting Attendance</h3>

      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((a, i) => (
            <tr key={a.id}>
              <td>{i + 1}</td>
              <td>{a.name}</td>
              <td>
                {a.present ? (
                  <span className="badge bg-success">Present</span>
                ) : (
                  <span className="badge bg-danger">Absent</span>
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

export default MeetingAttendance;
