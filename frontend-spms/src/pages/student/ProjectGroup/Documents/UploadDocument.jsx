import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const UploadDocument = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const isLeader = true;
  const proposalApproved = true;

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  if (!isLeader) {
    return (
      <div className="alert alert-danger mt-4">
        🚫 Only group leader can upload documents.
      </div>
    );
  }

  if (!proposalApproved) {
    return (
      <div className="alert alert-warning mt-4">
        ⚠ Proposal must be approved before uploading documents.
      </div>
    );
  }

  const handleUpload = () => {
    console.log("GroupID:", groupId);
    console.log("Title:", title);
    console.log("File:", file);

    alert("Document uploaded successfully!");
    navigate(`/student/project-group/${groupId}/documents`);
  };

  return (
    <div className="card mt-4 p-4">
      <h5>Upload Document</h5>

      <input
        className="form-control mb-3"
        placeholder="Document Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="file"
        className="form-control mb-3"
        onChange={e => setFile(e.target.files[0])}
      />

      <div className="d-flex gap-2">
        <button className="btn btn-success" onClick={handleUpload}>
          Upload
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() =>
            navigate(`/student/project-group/${groupId}/documents`)
          }
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UploadDocument;
