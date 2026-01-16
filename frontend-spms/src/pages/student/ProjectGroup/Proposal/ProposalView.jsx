import { useNavigate, useParams } from "react-router-dom";

const ProposalView = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  // 🔥 Dummy data (API later)
  const proposal = {
    title: "AI Based Student Monitoring",
    area: "Artificial Intelligence",
    description:
      "System to monitor student academic progress using AI.",
    objectives:
      "Automation, accuracy, performance improvement",
    status: "Pending"
  };

  return (
    <div className="card mt-4 p-4">

      {/* ⬅ Back Button */}
      <button
        className="btn btn-sm btn-outline-secondary mb-3"
        onClick={() =>
          navigate(`/student/project-group/${groupId}/proposal`)
        }
      >
        ← Back
      </button>

      <h5>Proposal Details</h5>

      <p><b>Title:</b> {proposal.title}</p>
      <p><b>Area:</b> {proposal.area}</p>
      <p><b>Description:</b> {proposal.description}</p>
      <p><b>Objectives:</b> {proposal.objectives}</p>

      <p>
        <b>Status:</b>{" "}
        <span className="badge bg-warning">
          {proposal.status}
        </span>
      </p>
    </div>
  );
};

export default ProposalView;
