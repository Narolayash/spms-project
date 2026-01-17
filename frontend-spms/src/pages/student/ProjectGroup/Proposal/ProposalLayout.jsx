import { Outlet, useNavigate, useParams } from "react-router-dom";

const ProposalLayout = () => {
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

      <div className="d-flex justify-content-between align-items-center">
        <h3>Project Proposal</h3>

        <button
          className="btn btn-primary"
          onClick={() =>
            navigate(`/student/project-group/${groupId}/proposal/submit`)
          }
        >
          New Proposal
        </button>
      </div>

      <hr />
      <Outlet />
    </div>
  );
};

export default ProposalLayout;
