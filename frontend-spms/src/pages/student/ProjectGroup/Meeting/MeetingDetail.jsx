import { useParams } from "react-router-dom";

const MeetingDetail = () => {
  const { meetingId } = useParams();

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

  return (
    <div className="card mt-3 p-4">
      <h5>Meeting Details</h5>

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
