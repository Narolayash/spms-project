import { useLocation, useNavigate, useParams } from "react-router-dom";

const MeetingDetail = () => {
  const { groupId, meetingId } = useParams();
  const navigate = useNavigate(); 

  const meeting = {
    date: "2026-02-10 10:30 AM",
    purpose: "Proposal Discussion",
    location: "Lab 203",
    notes: "Project scope approved",
    attendance: [
      { name: "Doctor Strange", present: true },
      { name: "Scarlet Witch", present: true },
      { name: "Vision", present: false }
    ]
  };

  const location = useLocation();
  const backPath = location.state?.from || `/student/project-group/${groupId}/meetings`;

  return (
    <div className="card mt-3 p-4">
      <h5>Meeting Details</h5>
      <button
        className="btn btn-sm btn-outline-secondary mb-3"
        onClick={() => navigate(backPath)}
      >
        ← Back
      </button>


      <p><b>Date:</b> {meeting.date}</p>
      <p><b>Purpose:</b> {meeting.purpose}</p>
      <p><b>Location:</b> {meeting.location}</p>
      <p><b>Notes:</b> {meeting.notes}</p>

      <hr />

      <h6>Attendance</h6>
      <ul>
        {meeting.attendance.map((a, i) => (
          <li key={i}>
            {a.name} — {a.present ? "Present" : "Absent"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingDetail;
