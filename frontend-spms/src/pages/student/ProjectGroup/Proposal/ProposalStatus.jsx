import { useNavigate, useParams } from "react-router-dom";

const ProposalStatus = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  // 🔥 Dummy data (API later)
  const proposal = {
    status: "Pending", // Pending | Approved | Rejected
    remarks: "Waiting for guide approval"
  };

  const badgeMap = {
    Pending: "warning",
    Approved: "success",
    Rejected: "danger"
  };

  return (
    <div
      className="card p-4 mt-3"
      style={{ cursor: "pointer" }}
      onClick={() =>
        navigate(`/student/project-group/${groupId}/proposal/view`)
      }
    >
      <h5>Proposal Status</h5>

      <p>
        <b>Status:</b>{" "}
        <span className={`badge bg-${badgeMap[proposal.status]}`}>
          {proposal.status}
        </span>
      </p>

      <p><b>Remarks:</b> {proposal.remarks}</p>

      {/* 🔴 Only if rejected */}
      {proposal.status === "Rejected" && (
        <button
          className="btn btn-danger mt-2"
          onClick={(e) => {
            e.stopPropagation(); // ❗ important
            navigate(
              `/student/project-group/${groupId}/proposal/submit`
            );
          }}
        >
          Re-submit Proposal
        </button>
      )}

      {/* 🟢 Approved info */}
      {proposal.status === "Approved" && (
        <p className="text-success mt-3 mb-0">
          ✅ Proposal approved. Meetings are now enabled.
        </p>
      )}
    </div>
  );
};

export default ProposalStatus;
  