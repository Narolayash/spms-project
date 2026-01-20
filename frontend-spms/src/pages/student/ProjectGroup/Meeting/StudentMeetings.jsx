import { useNavigate, useParams } from "react-router-dom";

const StudentMeetings = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();

  const meetings = [
    {
      id: 1,
      date: "2026-02-10 10:30 AM",
      purpose: "Proposal Discussion",
      status: "Completed"
    },
    {
      id: 2,
      date: "2026-02-18 11:00 AM",
      purpose: "Design Review",
      status: "Scheduled"
    }
  ];

  return (
    <div className="mt-3">
      {meetings.map(m => (
        <div
          key={m.id}
          className="card p-3 mb-2"
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/student/project-group/${groupId}/meetings/${m.id}`)
          }
        >
          <p><b>Date:</b> {m.date}</p>
          <p><b>Purpose:</b> {m.purpose}</p>
          <span className={`badge ${
            m.status === "Completed" ? "bg-success" : "bg-warning"
          }`}>
            {m.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StudentMeetings;
