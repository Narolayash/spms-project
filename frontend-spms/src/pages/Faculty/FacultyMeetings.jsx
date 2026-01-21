import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function FacultyMeetings() {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const meetings = [
    {
      id: 1,
      date: "2026-02-10",
      purpose: "Project Discussion",
      status: "Completed",
    },
    {
      id: 2,
      date: "2026-02-18",
      purpose: "Module Review",
      status: "Scheduled",
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Project Meetings</h3>
        <button
          className="btn btn-primary"
          onClick={() =>
            navigate(`/faculty/project-groups/${groupId}/meetings/add`)
          }
        >
          + Schedule Meeting
        </button>
      </div>

      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Date</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((m) => (
            <tr key={m.id}>
              <td>{m.date}</td>
              <td>{m.purpose}</td>
              <td>{m.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-info"
                  onClick={() =>
                    navigate(
                      `/faculty/project-groups/${groupId}/meetings/${m.id}`
                    )
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

export default FacultyMeetings;
