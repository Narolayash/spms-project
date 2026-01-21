import React from "react";
import { useNavigate } from "react-router-dom";

const MeetingList = () => {
  const navigate = useNavigate();

  const meetings = [
    {
      id: 1,
      group: "AI Innovators",
      guide: "Dr. Raj Sharma",
      date: "2026-02-10",
      status: "Completed",
    },
    {
      id: 2,
      group: "Web Wizards",
      guide: "Prof. Neha Mehta",
      date: "2026-02-15",
      status: "Scheduled",
    },
  ];

  return (
    <>
      <h3>Project Meetings</h3>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Project Group</th>
            <th>Guide</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {meetings.map((m, i) => (
            <tr key={m.id}>
              <td>{i + 1}</td>
              <td>{m.group}</td>
              <td>{m.guide}</td>
              <td>{m.date}</td>
              <td>
                <span
                  className={`badge ${
                    m.status === "Completed"
                      ? "bg-success"
                      : "bg-warning"
                  }`}
                >
                  {m.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => navigate(`/admin/meetings/${m.id}`)}
                >
                  View
                </button>

                <button
                  className="btn btn-sm btn-info"
                  onClick={() =>
                    navigate(`/admin/meetings/${m.id}/attendance`)
                  }
                >
                  Attendance
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MeetingList;
