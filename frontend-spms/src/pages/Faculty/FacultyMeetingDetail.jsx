import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function FacultyMeetingDetail() {
  const { meetingId } = useParams();
  const navigate = useNavigate();

  const [students, setStudents] = useState([
    { id: 1, name: "Amit Patel", present: true },
    { id: 2, name: "Neha Sharma", present: false },
    { id: 3, name: "Rahul Mehta", present: true },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  return (
    <>
      <h3>Meeting Detail</h3>

      <div className="card mb-3">
        <div className="card-body">
          <p><b>Purpose:</b> Project Discussion</p>
          <p><b>Date:</b> 10 Feb 2026</p>
          <p><b>Status:</b> Completed</p>
        </div>
      </div>

      <h5>Attendance</h5>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Student</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={s.present}
                  onChange={() => toggleAttendance(s.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-success">Save Attendance</button>
      <button
        className="btn btn-secondary ms-2"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
}

export default FacultyMeetingDetail;
