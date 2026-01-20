import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentAllMeetings = () => {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    setMeetings([
      {
        meetingId: 1,
        projectGroupId: 101,
        projectTitle: "AI Attendance System",
        date: "2026-02-10",
        purpose: "Proposal Discussion"
      },
      {
        meetingId: 2,
        projectGroupId: 102,
        projectTitle: "Online Voting System",
        date: "2026-02-15",
        purpose: "Progress Review"
      }
    ]);
  }, []);

  return (
    <div className="container mt-4">
      <h4>My Meetings</h4>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Project</th>
            <th>Date</th>
            <th>Purpose</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((m, i) => (
            <tr key={m.meetingId}>
              <td>{i + 1}</td>
              <td>{m.projectTitle}</td>
              <td>{m.date}</td>
              <td>{m.purpose}</td>
              <td>
                <Link
                  to={`/student/project-group/${m.projectGroupId}/meetings/${m.meetingId}`}
                  state={{ from: "/student/meetings" }}
                  className="btn btn-sm btn-primary"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default StudentAllMeetings;
