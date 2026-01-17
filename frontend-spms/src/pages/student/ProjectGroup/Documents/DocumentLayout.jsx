import { Outlet, useNavigate, useParams } from "react-router-dom";

const DocumentLayout = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const isLeader = true;          // backend later
  const proposalApproved = true; // backend later

  return (
    <div className="container mt-4">

      {/* 🔙 Back to Project */}
      <button
        className="btn btn-sm btn-outline-secondary mb-3"
        onClick={() =>
          navigate(`/student/project-group/${groupId}`)
        }
      >
        ← Back to Project
      </button>

      <div className="d-flex justify-content-between align-items-center">
        <h3>Project Documents</h3>

        {isLeader && proposalApproved && (
          <button
            className="btn btn-primary"
            onClick={() =>
              navigate(
                `/student/project-group/${groupId}/documents/upload`
              )
            }
          >
            Upload Document
          </button>
        )}
      </div>

      {!proposalApproved && (
        <div className="alert alert-warning mt-3">
          ⚠ Proposal must be approved before uploading documents.
        </div>
      )}

      <hr />
      <Outlet />
    </div>
  );
};

export default DocumentLayout;
