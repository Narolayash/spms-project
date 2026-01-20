import { Outlet, useNavigate, useParams } from "react-router-dom";

const MeetingLayout = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container mt-4">

      {/* 🔙 BACK BUTTON */}
      <button
        className="btn btn-sm btn-outline-secondary mb-3"
        onClick={() =>
          navigate(`/student/project-group/${groupId}`)
        }
      >
        ← Back to Project
      </button>

      <h4>Project Meetings</h4>
      <p className="text-muted">Group ID: {groupId}</p>

      <Outlet />
    </div>
  );
};

export default MeetingLayout;
