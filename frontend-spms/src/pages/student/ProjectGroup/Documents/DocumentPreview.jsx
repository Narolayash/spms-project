import { useLocation, useNavigate, useParams } from "react-router-dom";

const DocumentPreview = () => {
  const { groupId, docId } = useParams();
  const navigate = useNavigate();

  const document = {
    name: "Project Proposal.pdf",
    type: "PDF",
    uploadedBy: "Leader",
    date: "10 Feb 2026",
    description: "Initial project proposal document"
  };

  const location = useLocation();
  const backPath =
    location.state?.from ||
    `/student/project-group/${groupId}/documents`;


  return (
    <div className="card mt-4 p-4">

      <button
        className="btn btn-sm btn-outline-secondary mb-3"
        onClick={() => navigate(backPath)}
      >
        ← Back
      </button>


      <h5>{document.name}</h5>

      <p><b>Type:</b> {document.type}</p>
      <p><b>Uploaded By:</b> {document.uploadedBy}</p>
      <p><b>Date:</b> {document.date}</p>
      <p><b>Description:</b> {document.description}</p>

      <button className="btn btn-primary mt-3">
        Download
      </button>
    </div>
  );
};

export default DocumentPreview;
